import React, { useState } from 'react';
import { View } from 'react-native';
import { fullScreenStyle } from './styles';
import { Message } from './Message';
import { MessageLengthSetter } from './MessageLengthSetter';
import { CountButton } from './CountButton';
import { CountResult } from './CountResult';
import { OverFlow } from './OverFlow';

export const Main = () => {
  const [validSms, setValidSms] = useState('');
  const [smsLength, setSmsLength] = useState(0);
  const [smsQuantity, setSmsQuantity] = useState(0);
  const [overflow, setOverflow] = useState(null);
  const viewStyles = {
    ...fullScreenStyle,
    backgroundColor: 'lightgrey',
    padding: 10,
  };

  const handlePress = () => {
    const quantifyPattern = new RegExp(`(\\b.{0,${smsLength}})\\b`, 'gi');
    const overflowPattern = new RegExp(
      `\\b([^\\s]{${+smsLength + 1},})\\b`,
      'gi',
    );
    const matches = validSms.match(quantifyPattern);
    const overflowMatches = validSms.match(overflowPattern);
    let quantity = 0;

    if (overflowMatches) {
      setSmsQuantity('🚨  ой йой');
      setOverflow(overflowMatches);

      return;
    }

    matches?.forEach((match) => {
      if (match.length) {
        quantity += 1;
      }
    });
    setSmsQuantity(quantity);
    setOverflow(null);
  };

  return (
    <View style={viewStyles}>
      <Message sendOnChange={setValidSms} />
      <MessageLengthSetter sendOnChange={setSmsLength} />
      <CountButton onPress={handlePress} />
      <CountResult value={smsQuantity} />
      {overflow && <OverFlow words={overflow} />}
    </View>
  );
};
