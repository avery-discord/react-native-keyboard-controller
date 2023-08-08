import React from 'react';
import { TextInput } from 'react-native';
import { useResizeMode } from 'react-native-keyboard-controller';

import { randomColor } from '../../../utils';

import KeyboardAwareScrollView from './KeyboardAwareScrollView';
import { styles } from './styles';

export default function AwareScrollView() {
  useResizeMode();

  return (
    <>
      {new Array(10).fill(0).map((_, i) => (
        <TextInput
          key={i}
          placeholder={`${i}`}
          placeholderTextColor="black"
          multiline
          style={{
            width: '100%',
            minHeight: 50,
            // maxHeight: 250,
            backgroundColor: randomColor(),
            marginTop: 50,
          }}
        />
      ))}
    </>
  );
}
