import React, { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { useResizeMode } from 'react-native-keyboard-controller';

import { randomColor } from '../../../utils';

import KeyboardAwareScrollView from './KeyboardAwareScrollView';
import { styles } from './styles';

export default function AwareScrollView() {
  useResizeMode();
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <>
      {items.map((i) => (
        <>
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
          <Button
            title={`remove ${i}`}
            onPress={() => setItems(items.filter((id) => id !== i))}
          />
        </>
      ))}
    </>
  );
}
