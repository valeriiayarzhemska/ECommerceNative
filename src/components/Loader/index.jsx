import { Text, View } from 'react-native';
import LoaderKit from 'react-native-loader-kit';
import { useTranslation } from "react-i18next";

import { colors } from '../../constants';

import { styles } from './style';

export const Loader = ({
  loading,
  width = 40,
  height = 40,
  size = 40,
  color = colors.purple,
}) => {
  const stylesShema = styles();
  const { t } = useTranslation();

  return (
    <View style={stylesShema.container}>
      {loading ? (
        <LoaderKit
          style={{ width: width, height: height }}
          name={'BallClipRotate'}
          size={size}
          color={color}
        />
      ) : (
        <View style={stylesShema.textContainer}>
          <Text style={stylesShema.title}>{t('placeholderTitle')}</Text>
          <Text style={stylesShema.text}>{t('placeholderText')}</Text>
        </View>
      )}
    </View>
  );
};
