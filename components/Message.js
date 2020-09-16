import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { textAreaContainerStyles, textAreaStyles } from './styles';

export const Message = () => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText) => setText(inputText);

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
