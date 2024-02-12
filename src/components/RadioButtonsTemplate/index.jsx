import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import RadioGroup from 'react-native-radio-buttons-group';

import { styles } from './style';

export const RadioButtonsTemplate = ({
  radioButtons,
  selectedId,
  setSelectedId,
}) => {
  const stylesShema = styles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const radioButtonsTemplate = useMemo(() => {
    return radioButtons.map(button => {
      return {
        id: button.id,
        label: t(`${button.label}`),
        value: button.value,
      };
    });
  }, []);

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
