import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  counterButtonTouchStyle,
  counterButtonContainerStyle,
  counterButtonTitleStyle,
} from './styles';

export const CountButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={counterButtonTouchStyle} onPress={onPress}>
      <View style={counterButtonContainerStyle}>
        <Text style={counterButtonTitleStyle}>Порахувати кількість SMS</Text>
      </View>
    </TouchableOpacity>
  );
};
