import React from 'react';
import { colors } from '../../constants';

export const InputTemplate = ({
  hasIcon,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  hasError,
  keyboardType,
  handleSearch = false,
}) => {
  const stylesShema = styles(hasError);

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
      {hasIcon && (
        <View style={stylesShema.icon}>
          <IconComponent
            color={hasError ? '#ed6666' : isFocused ? '#5D3478' : '#BF87E3'}
          />
        </View>
      )}

      <TextInput
        ref={inputRef}
        style={stylesShema.input}
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

      {handleSearch && (
        <TouchableOpacity
          onPress={() => {
            handleSearch(value);
          }}
          style={stylesShema.searchIcon}>
          <CheckIcon />
        </TouchableOpacity>
      )}

      {secureTextEntry && (
        <TouchableOpacity
          style={stylesShema.eyeIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          {isPasswordVisible ? <EyeCrossedIcon /> : <EyeShowIcon />}
        </TouchableOpacity>
      )}
    </View>
  );
};
