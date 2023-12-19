import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  ScrollViewComponent,
  ScrollView,
  View,
  Animated,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { ButtonTemplate } from '../ButtonTemplate';
import { Logo, SearchIcon, UserIcon } from '../../assets/icons';

import { styles } from './style';
import { CustomHeader } from '../CustomHeader';
import { filterProductsCategories } from '../../utils';
import { SliderCatalog } from '../SliderCatalog';
import { CategoriesList } from '../CategoriesList';
import SearchBar from '@pnap/react-native-search-bar';
import { colors } from '../../constants';
import { SearchInputIcon } from '../SearchInputIcon';
import { Formik } from 'formik';
import { inputList } from '../../store/mocks/search-mock';
import { InputTemplate } from '../InputTemplate';
import { SearchInputItem } from '../SearchInputItem';

export const SearchInput = () => {
  const stylesShema = styles();
  const [searchValues, setSearchValues] = useState([]);
  const [isSeacrhActive, setIsSearchActive] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const handleSubmit = value => {};

  const handleChange = value => {
    console.log(value);
  };

  const handleSearch = () => {};

  const toggleInput = () => {
    Animated.timing(inputWidth, {
      toValue: isInputVisible ? 0 : 200, // Adjust the width as needed
      duration: 300,
      useNativeDriver: false,
    }).start();

    setIsInputVisible(!isInputVisible);
  };

  return (
    <View style={stylesShema.container}>
      <Animated.View>
        <ButtonTemplate
          icon={SearchIcon}
          iconWidth={30}
          iconHeight={30}
          handleClick={toggleInput}
          isRounded={true}
        />
      </Animated.View>

      <Animated.View
        style={{
          width: inputWidth,
          marginLeft: isInputVisible ? 10 : 'auto', // Adjust margin for the input field
          marginRight: isInputVisible ? 'auto' : 10, // Adjust margin for the search icon
          opacity: isInputVisible ? 1 : 0,
        }}
      >
        <Formik
          initialValues={{ search: '' }}
          onSubmit={handleSubmit}
          validateOnChange={false}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={stylesShema.form}>
              {inputList.map(field => (
                <InputTemplate
                  key={field.id}
                  placeholder={field.placeholder}
                  secureTextEntry={field.secureTextEntry}
                  value={values[field.name]}
                  onChangeText={handleChange(field.name)}
                  error={touched[field.name] && errors[field.name]}
                  keyboardType={field.keyboardType}
                  handleSearch={handleSearch}
                />
              ))}
              <ScrollView style={stylesShema.scrollContainer}>
                <View style={stylesShema.checboxList}>
                  {searchValues.map(title => (
                    <SearchInputItem
                      key={title}
                      text={title}
                      slug={title}
                      setSelected={setSelected}
                      selected={selected}
                    />
                  ))}
                </View>
              </ScrollView>
            </View>
          )}
        </Formik>
      </Animated.View>

      <ScrollView style={stylesShema.resultsContainer}></ScrollView>
    </View>
  );
};
