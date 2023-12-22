import React, { useEffect, useRef, useState } from 'react';
import { FlatList, View, TouchableOpacity, Text, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Picker } from '@react-native-picker/picker';
import { CategoriesItem } from '../CategoriesItem';

import { styles } from './style';
import { sortOptions } from '../../constants';
import { DownArrow } from '../../assets/icons';
import { sortProducts } from '../../utils';
const pokemons = ['Pikachu', 'Charmander', 'Squirtle'];

export const SortList = ({
  filteredProducts,
  setFilteredProducts,
  activeCategory,
}) => {
  const stylesShema = styles();

  const { t } = useTranslation();

  const [selectedSortOption, setSelectedSortOption] = useState(
    t('sortPopularity'),
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleValueChange = itemValue => {
    const sortedProducts = sortProducts(filteredProducts, itemValue);

    setFilteredProducts(sortedProducts);
    setSelectedSortOption(itemValue);
    setModalVisible(false);
  };

  useEffect(() => {
    const sortedProducts = sortProducts(filteredProducts, selectedSortOption);

    setFilteredProducts(sortedProducts);
  }, [activeCategory]);

  return (
    <View style={stylesShema.container}>
      <View style={stylesShema.buttonContainer}>
        <View style={stylesShema.titleContainer}>
          <Text style={stylesShema.title}>{t('sortText')}</Text>
        </View>

        <TouchableOpacity
          style={stylesShema.inputContainer}
          onPress={handlePress}
        >
          <Text style={stylesShema.input}>{selectedSortOption}</Text>

          <DownArrow width={18} height={18} />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={stylesShema.modalContainer}>
          <View style={stylesShema.modalContent}>
            <Picker
              style={stylesShema.pickerStyles}
              selectedValue={selectedSortOption}
              onValueChange={handleValueChange}
              mode={'dropdown'}
            >
              {sortOptions.map(option => (
                <Picker.Item
                  key={t(option)}
                  label={t(option)}
                  value={t(option)}
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </View>
  );
};
