import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useTranslation } from 'react-i18next';

import { Eye } from '../../assets/icons';

import { colors } from '../../constants';

import { styles } from './style';

export const InputTemplate = ({
  icon,
  placeholder,
  secureTextEntry,
  value = '',
  onChangeText,
  error,
  errors,
  keyboardType,
  name,
  isSearch = false,
}) => {
  const stylesShema = styles(error, icon, isSearch);
  const [isFocused, setIsFocused] = useState(value.length > 0 ? true : false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);
  const [isInit, setIsInit] = useState(true);

  const { t } = useTranslation();
  const inputRef = useRef();
  const IconComponent = icon;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsInit(false);
    }, 1100);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <View style={stylesShema.inputWrapper}>
      {IconComponent && (
        <View style={stylesShema.icon}>
          <IconComponent
            color={error ? '#ed6666' : isFocused ? '#5D3478' : '#BF87E3'}
          />
        </View>
      )}

      {name === 'phone' ? (
        <TextInputMask
          type={'custom'}
          options={{
            mask: '+ 99 (999) 999 99 99',
          }}
          ref={inputRef}
          style={[
            stylesShema.input,
            IconComponent ? stylesShema.inputIcon : null,
          ]}
          placeholder={t(placeholder)}
          placeholderTextColor={colors.lightGray}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCompleteType="off"
          onBlur={() => {
            if (value?.length === 0) {
              setIsFocused(false);
            }
          }}
          onFocus={() => {
            if (!isInit) {
              setIsFocused(true);
            }
          }}
        />
      ) : (
        <TextInput
          ref={inputRef}
          style={[
            stylesShema.input,
            IconComponent ? stylesShema.inputIcon : null,
          ]}
          placeholder={t(placeholder)}
          secureTextEntry={isPasswordVisible}
          placeholderTextColor={colors.lightGray}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          autoCompleteType="off"
          onBlur={() => {
            if (value?.length === 0) {
              setIsFocused(false);
            }
          }}
          onFocus={() => {
            if (!isInit) {
              setIsFocused(true);
            }
          }}
        />
      )}

      {errors && (
        <View style={stylesShema.errorWrapper}>
          <Text style={stylesShema.errorText}>{t(errors)}</Text>
        </View>
      )}

      {secureTextEntry && (
        <TouchableOpacity
          style={stylesShema.eyeIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
        >
          {isPasswordVisible ? <Eye /> : <Eye color={colors.darkGray} />}
        </TouchableOpacity>
      )}
    </View>
  );
};
