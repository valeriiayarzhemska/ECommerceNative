import { StyleSheet } from 'react-native';
import { colors, containerWidth } from '../../constants';

export const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: colors.white,
    },
    headerContainer: {
      flexDirection: 'row',
      paddingLeft: '6%',
      zIndex: 10,
    },
    searchContainer: {
      position: 'absolute',
      marginLeft: '6.4%',
    },
    list: {
      justifyContent: 'space-between',
    },
    listContent: {
      paddingHorizontal: '6%',
      paddingBottom: '7%',
    },
    skeletonSlider: {
      marginBottom: 20,
      width: containerWidth,
      height: 140,
      borderRadius: 30,
    },
    skeletonCategories: {
      marginBottom: 16,
      width: containerWidth,
      height: 33,
      borderRadius: 30,
    },
    skeletonSort: {
      marginBottom: 10,
      width: containerWidth,
      height: 39,
      borderRadius: 30,
    },
    skeletonList: {
      flexDirection: 'row',

      width: containerWidth,
      height: 253,
    },
    skeletonItem: {
      marginHorizontal: 6,
      marginBottom: 12,
      width: '47%',
      height: 241,
      borderRadius: 20,
    },
  });
};
