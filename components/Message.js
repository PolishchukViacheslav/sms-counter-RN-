import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { textAreaContainerStyles, textAreaStyles } from './styles';

export const Message = ({ sendOnChange }) => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    const preparedInputText = inputText.trimStart();
    setText(preparedInputText);
    sendOnChange(preparedInputText);
  };

  return (
    <View style={textAreaContainerStyles}>
      <TextInput
        style={textAreaStyles}
        placeholder="Type message here"
        placeholderTextColor="grey"
        numberOfLines={10}
        multiline={true}
        value={text}
        onChangeText={handleTextChange}
      />
    </View>
  );
};
