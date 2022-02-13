import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

export type Props = {};
const AppInput: React.FC<Props> = ({
  style,
  title,
  value,
  onChangeText,
  keyboardType,
  isPassword,
}) => {
  return (
    <View style={[styles.transparentContainer, style]}>
      <TextInput
        value={value || ''}
        placeholder={title || ''}
        style={styles.inputField}
        secureTextEntry={isPassword}
        keyboardType={keyboardType || 'default'}
        placeholderTextColor="rgba(255, 255, 255, 0.3)"
        onChangeText={onChangeText ? onChangeText : () => {}}
      />
    </View>
  );
};

export default AppInput;
