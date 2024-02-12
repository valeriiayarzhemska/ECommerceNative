import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';

import { MinusIcon, PlusIcon } from '../../assets/icons';

import { styles } from './style';

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
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <MinusIcon width={8} />
      </TouchableOpacity>

      <View style={stylesShema.quantityInputContainer}>
        <TextInput
          style={stylesShema.quantityInput}
          onChangeText={setQuantity}
          value={quantity}
          keyboardType="numeric"
          editable={false}
        />
      </View>

      <TouchableOpacity
        style={stylesShema.quantityButton}
        onPress={
          isCartSelect ? handleQuantityIncreaseCart : handleQuantityIncrease
        }
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <PlusIcon width={8} />
      </TouchableOpacity>
    </View>
  );
};
