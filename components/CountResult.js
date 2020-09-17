import React from 'react';
import { Text, View } from 'react-native';
import {
  countResultContainerStyle,
  countResultTitleStyle,
  countResultValueStyle,
} from './styles';

export const CountResult = ({ value }) => {
  return (
    <View style={countResultContainerStyle}>
      <Text style={countResultTitleStyle}>Потрібно СМС:</Text>
      <Text style={countResultValueStyle}>{value}</Text>
    </View>
  );
};
