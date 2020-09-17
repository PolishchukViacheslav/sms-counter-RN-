import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import {
  mesLenSettContainerStyle,
  mesLenSettInputWrapperStyle,
  mesLenSettInputStyles,
  mesLenSettTitleWrapperStyles,
  mesLenSettTitleStyles,
} from './styles';

export const MessageLengthSetter = ({ sendOnChange }) => {
  const [smsLength, setSmsLength] = useState();

  const handleSmsLength = (value) => {
    const patter = /^[0-9]*$/;
    const preparedValue = value.trim();
    if (patter.test(preparedValue)) {
      setSmsLength(preparedValue);
      sendOnChange(preparedValue);
    }
  };

  return (
    <View style={mesLenSettContainerStyle}>
      <View style={mesLenSettInputWrapperStyle}>
        <TextInput
          style={mesLenSettInputStyles}
          placeholder="0"
          placeholderTextColor="grey"
          value={smsLength}
          onChangeText={handleSmsLength}
        />
      </View>
      <View style={mesLenSettTitleWrapperStyles}>
        <Text style={mesLenSettTitleStyles}>символів</Text>
      </View>
    </View>
  );
};
