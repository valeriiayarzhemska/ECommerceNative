import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectWishList,
  selectWishListError,
  selectWishListLoading,
} from '../../store/redux/features/products/productsSelectors';

import { ErrorComponentMessage } from '../../components/ErrorComponentMessage';
import { Logo } from '../../assets/icons';
import { CustomHeader } from '../../components/CustomHeader';
import { WishListItem } from '../../components/WishListItem';
import { SkeletonWishlist } from '../../components/Skeletons/SkeletonWishlist';

import { styles } from './style';

export const WishList = () => {
  const stylesShema = styles();
  const { t } = useTranslation();

  const userWishList = useSelector(selectWishList);
  const isUserWishListLoading = useSelector(selectWishListLoading);
  const isUserWishListError = useSelector(selectWishListError);

  return (
    <SafeAreaView style={stylesShema.container}>
      {userWishList && !isUserWishListLoading && (
        <FlatList
          contentContainerStyle={stylesShema.listContent}
          numColumns={1}
          key={1}
          data={userWishList}
          renderItem={({ item }) => <WishListItem product={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <CustomHeader
              isButtonLeft={true}
              buttonLeft={<Logo width={44} height={44} />}
              title={t('titleWishList')}
              isTitled={true}
            />
          }
          ListEmptyComponent={
            isUserWishListError ? (
              <ErrorComponentMessage message={'errorWentWrong'} />
            ) : isUserWishListLoading ? (
              <SkeletonWishlist isLoading={isUserWishListLoading} />
            ) : (
              <ErrorComponentMessage message={'emptyWishList'} />
            )
          }
          initialNumToRender={8}
        />
      )}
    </SafeAreaView>
  );
};
