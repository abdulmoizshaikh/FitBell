import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export type Props = {};
const AppSearchInput: React.FC<Props> = ({
  style,
  title,
  value,
  onChangeText,
  keyboardType,
  isPassword,
}) => {
  return (
    <View style={[styles.transparentContainer, style]}>
      <Icon
        name="search"
        size={20}
        color="#ffffff"
        style={{paddingHorizontal: 10}}
      />

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

export default AppSearchInput;
