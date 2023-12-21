import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ScrollView,
  View,
  Animated,
  LayoutAnimation,
  UIManager,
  FlatList,
} from 'react-native';
import { Formik } from 'formik';
import { debounce } from 'lodash';

import { useSelector } from 'react-redux';
import { selectProducts } from '../../store/redux/features/products/productsSelectors';

import { ButtonTemplate } from '../ButtonTemplate';
import { InputTemplate } from '../InputTemplate';
import { SearchInputItem } from '../SearchInputItem';
import { SearchIcon } from '../../assets/icons';

import { inputList } from '../../store/mocks/search-mock';
import { containerWidth } from '../../constants';
import { filterSearchedProducts } from '../../utils';

import { styles } from './style';
import { Loader } from '../Loader';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const SearchBar = () => {
  const stylesShema = styles();
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const formikRef = useRef(null);
  const products = useSelector(selectProducts);
  const containerWidthAnim = useRef(new Animated.Value(0)).current;

  const handleSearchDebounce = useCallback(
    debounce(async values => {
      if (values && values.length > 0) {
        setIsLoading(true);

        try {
          const searchedProducts = await filterSearchedProducts(
            products,
            values,
        );

          setSearchedProducts(searchedProducts);
        } catch (error) {
          console.error('Error filtering products:', error);
        }
      } else {
        setSearchedProducts([]);
        setIsLoading(false);
      }

      setIsLoading(false);
    }, 800),
    [products],
  );

  const toggleInput = () => {
    const toValue = isInputVisible ? 0 : containerWidth;

    Animated.timing(containerWidthAnim, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsInputVisible(!isInputVisible);

    if (!isInputVisible && formikRef.current) {
      formikRef.current.resetForm();
      formikRef.current.setFieldValue('search', '');
      setSearchedProducts([]);
    }
  };

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isInputVisible]);

  useEffect(() => {
    Animated.timing(containerWidthAnim, {
      toValue: isInputVisible ? containerWidth : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isInputVisible, containerWidth]);

  return (
    <>
      <View style={stylesShema.container}>
        <Animated.View
          style={[
            stylesShema.searchContainer,
            {
              width: containerWidthAnim,
              paddingRight: isInputVisible ? 0 : 42,
            },
          ]}
        >
          <View style={stylesShema.seacrhButton}>
            <ButtonTemplate
              icon={SearchIcon}
              handleClick={toggleInput}
              isRounded={true}
              isSearch={true}
            />
          </View>
          <Animated.View
            style={[
              stylesShema.formContainer,
              {
                opacity: isInputVisible ? 1 : 0,
              },
            ]}
          >
            <Formik
              initialValues={{ search: '' }}
              validateOnChange={false}
              innerRef={formikRef}
            >
              {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={stylesShema.form}>
                  {inputList.map(field => (
                    <InputTemplate
                      key={field.id}
                      placeholder={field.placeholder}
                      secureTextEntry={field.secureTextEntry}
                      value={values[field.name]}
                      onChangeText={value => {
                        handleChange(field.name)(value);
                        handleSearchDebounce(value);
                      }}
                      error={touched[field.name] && errors[field.name]}
                      keyboardType={field.keyboardType}
                      isSearch={true}
                      handleSearchClose={toggleInput}
                    />
                  ))}
                </View>
              )}
            </Formik>

            {isInputVisible && (
              <View
                style={[
                  stylesShema.results,
                  {
                    opacity: isInputVisible ? 1 : 0,
                  },
                ]}
              >
                <FlatList
                  data={searchedProducts}
                  renderItem={({ item }) => {
                    return <SearchInputItem key={item.id} product={item} />;
                  }}
                  keyExtractor={item => item.id}
                  ListEmptyComponent={
                    <View style={stylesShema.resultsEmpty}>
                      <Loader isLoading={isLoading} />
                    </View>
                  }
                  initialNumToRender={5}
                />
              </View>
            )}
          </Animated.View>
        </Animated.View>
      </View>
    </>
  );
};
