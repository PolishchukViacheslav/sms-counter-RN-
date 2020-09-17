import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import {
  overFlowStyle,
  overFlowTitleStyle,
  overFlowContainerStyle,
} from './styles';

export const OverFlow = ({ words }) => {
  return (
    <View style={overFlowContainerStyle}>
      <Text style={overFlowTitleStyle}>Тут проблеми з довжиною:</Text>
      <ScrollView style={overFlowStyle}>
        {words?.map((word) => (
          <Text key={`${word} + ${Math.random()}`}>{`${'👉'}${word}`}</Text>
        ))}
      </ScrollView>
    </View>
  );
};
