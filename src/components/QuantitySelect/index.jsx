import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';

import { styles } from './style';
import { MinusIcon, PlusIcon } from '../../assets/icons';

export const QuantitySelect = ({
  quantity,
  setQuantity,
  isCartSelect = false,
  handleQuantityIncreaseCart,
  handleQuantityDecreaseCart,
}) => {
  const stylesShema = styles(isCartSelect);

  const handleQuantityIncrease = () => {
    setQuantity((Number(quantity) + 1).toString());
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((Number(quantity) - 1).toString());
    }
  };

  return (
    <View style={stylesShema.quantitySelect}>
      <TouchableOpacity
        style={stylesShema.quantityButton}
        onPress={
          isCartSelect ? handleQuantityDecreaseCart : handleQuantityDecrease
        }
      >
        <MinusIcon width={8} />
      </TouchableOpacity>

      <View style={stylesShema.quantityInputContainer}>
        <TextInput
          style={stylesShema.quantityInput}
          onChangeText={setQuantity}
          value={quantity}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={stylesShema.quantityButton}
        onPress={
          isCartSelect ? handleQuantityIncreaseCart : handleQuantityIncrease
        }
      >
        <PlusIcon width={8} />
      </TouchableOpacity>
    </View>
  );
};
