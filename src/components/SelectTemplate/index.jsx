import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import SelectDropdown from 'react-native-select-dropdown';

import { DownArrow, UpArrow } from '../../assets/icons';
import { colors } from '../../constants';

import { styles } from './style';

export const SelectTemplate = React.forwardRef(
  ({ data = [], handleSelect, defaultText, errors, name }, ref) => {
    const stylesShema = styles();
    const { t } = useTranslation();

    return (
      <View style={stylesShema.inputWrapper}>
        <SelectDropdown
          data={data}
          ref={ref}
          onSelect={(selectedItem, index) => {
            handleSelect(selectedItem);
          }}
          defaultButtonText={t(`${defaultText}`)}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.name;
          }}
          rowTextForSelection={(item, index) => {
            return item.name;
          }}
          buttonStyle={[
            stylesShema.dropdownButton,
            data.length < 1 ? stylesShema.dropdownButtonDisabled : null,
          ]}
          buttonTextStyle={[
            stylesShema.dropdownButtonText,
            data.length < 1 ? stylesShema.dropdownButtonTextDisabled : null,
          ]}
          renderDropdownIcon={isOpened => {
            return isOpened ? (
              <UpArrow color={colors.lightGray} />
            ) : (
              <DownArrow color={colors.lightGray} />
            );
          }}
          dropdownIconPosition={'right'}
          dropdownStyle={stylesShema.dropdown}
          rowStyle={stylesShema.dropdownRow}
          rowTextStyle={stylesShema.dropdownRowText}
          selectedRowTextStyle={stylesShema.dropdownSelectedText}
          disabled={data.length < 1}
          dropdownOverlayColor={'none'}
        />

        {errors[name] && (
          <View style={stylesShema.errorWrapper}>
            <Text style={stylesShema.errorText}>{t(`${errors[name]}`)}</Text>
          </View>
        )}
      </View>
    );
  },
);
