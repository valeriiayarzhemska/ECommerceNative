import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, RefreshControl, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useGetProductsQuery } from '../../store/redux/services/products/productsApi';
import {
  selectProductsError,
  selectProductsLoading,
} from '../../store/redux/features/products/productsSelectors';

import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Logo } from '../../assets/icons';
import { SearchBar } from '../../components/SearchBar';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonCatalog } from '../../components/Skeletons/SkeletonCatalog';
import { SkeletonCatalogItem } from '../../components/Skeletons/SkeletonCatalogItem';

import { refresh, shouldItemUpdate, sortProducts } from '../../utils';

import { styles } from './style';

export const Catalog = () => {
  const stylesShema = styles();
  const { t } = useTranslation();
  const {
    data,
    isLoading: isDataLoading,
    isFetching: isDataFetching,
    error,
    refetch,
  } = useGetProductsQuery({
    refetchOnMountOrArgChange: true,
  });
  const isLoading = useSelector(selectProductsLoading);
  const isError = useSelector(selectProductsError);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState(
    t('sortPopularity'),
  );
  const [refreshing, setRefreshing] = useState(false);

  const setProductsFiltered = () => {
    if (data) {
      const sortedProducts = sortProducts(data, selectedSortOption);

      setFilteredProducts(sortedProducts);
    }
  };

  const handleRefresh = refresh(setRefreshing, useCallback);

  useEffect(() => {
    if (refreshing) {
      refetch();
    }

    setProductsFiltered();
  }, [refreshing]);

  useEffect(() => {
    setProductsFiltered();
  }, [isDataLoading, isDataFetching]);

  return (
    <SafeAreaView style={stylesShema.container}>
      <View style={stylesShema.headerContainer}>
        <CustomHeader
          isButtonLeft={true}
          buttonLeft={<Logo width={44} height={44} />}
        />

        <View style={stylesShema.searchContainer}>
          <SearchBar />
        </View>
      </View>

      {isDataFetching ||
        (isDataLoading && <SkeletonCatalog isLoading={true} />)}

      <FlatList
        columnWrapperStyle={stylesShema.list}
        contentContainerStyle={stylesShema.listContent}
        numColumns={2}
        key={2}
        data={filteredProducts}
        renderItem={({ item }) => <ProductsItem product={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <CatalogHeader
            products={data}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            selectedSortOption={selectedSortOption}
            setSelectedSortOption={setSelectedSortOption}
          />
        }
        ListEmptyComponent={
          isDataFetching || isDataLoading ? (
            <SkeletonCatalog isLoading={true} />
          ) : isLoading && !isError && !error ? (
            <SkeletonCatalogItem isLoading={true} />
          ) : (
            <ErrorComponentMessage message={'emptyProductsList'} />
          )
        }
        initialNumToRender={8}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        shouldItemUpdate={shouldItemUpdate}
      />
    </SafeAreaView>
  );
};
