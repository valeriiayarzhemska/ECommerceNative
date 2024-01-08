import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/redux/features/auth/authSlice';
import * as Yup from 'yup';
import { useGetProductsQuery } from '../../store/redux/services/products/productsApi';
import { setUserData } from '../../store/redux/features/auth/authActions';

import { validationSchema } from '../../store/validationSchema';
import { mock } from '../../store/mocks/login-mock';

import { BackgroundWrapper } from '../../components/BackgroundWrapper';
import { FormTemplate } from '../../components/FormTemplate';
import { ButtonTemplate } from '../../components/ButtonTemplate';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Logo, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { colors } from '../../constants';
import { ProductsList } from '../../components/ProductsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProductsItem } from '../../components/ProductsItem';
import { CatalogHeader } from '../../components/CatalogHeader';
import { Loader } from '../../components/Loader';
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from '../../store/redux/features/products/productsSelectors';
import { setProductsData } from '../../store/redux/features/products/productsActions';
import { refresh, shouldItemUpdate, sortProducts } from '../../utils';
import { SearchBar } from '../../components/SearchBar';
import { CustomHeader } from '../../components/CustomHeader';
import { SkeletonCatalog } from '../../components/Skeletons/SkeletonCatalog';
import { SkeletonWishlist } from '../../components/Skeletons/SkeletonWishlist';
import { SkeletonCatalogItem } from '../../components/Skeletons/SkeletonCatalogItem';
import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';

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
  const dispatch = useDispatch();

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

      {isError && (
        <View style={stylesShema.productsContainer}>
          <Text>{t('errorWentWrong')}</Text>
        </View>
      )}

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
          ) : isLoading ? (
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
