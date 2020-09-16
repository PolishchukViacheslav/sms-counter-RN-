import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';
import { fullScreenStyle } from './styles';
import { Message } from './Message';
import { MessageLengthSetter } from './MessageLengthSetter';

export const Main = () => {
  const viewStyles = {
    ...fullScreenStyle,
    backgroundColor: 'lightgrey',
    padding: 10,
  };

  return (
    <View style={viewStyles}>
      <Message />
      <MessageLengthSetter />
    </View>
  );
};
