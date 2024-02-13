import React, { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/redux/features/auth/authSelectors';

import RadioGroup from 'react-native-radio-buttons-group';

import { styles } from './style';

export const RadioButtonsTemplate = ({
  radioButtons,
  selectedId,
  setSelectedId,
}) => {
  const stylesShema = styles();
  const { t } = useTranslation();
  const userLang = useSelector(selectLanguage);

  const radioButtonsTemplate = useMemo(() => {
    return radioButtons.map(button => {
      return {
        id: button.id,
        label: t(`${button.label}`),
        value: button.value,
      };
    });
  }, []);

  useEffect(() => {
    setSelectedId(userLang);
  }, [userLang]);

  return (
    <View>
      <RadioGroup
        containerStyle={stylesShema.container}
        labelStyle={stylesShema.itemContainer}
        radioButtons={radioButtonsTemplate}
        onPress={setSelectedId}
        selectedId={selectedId}
      />
    </View>
  );
};
