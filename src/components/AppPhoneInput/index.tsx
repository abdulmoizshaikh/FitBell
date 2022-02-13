import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {CountryPickerComp} from '..';
import styles from './styles';

export type Props = {
  title: string;
  value: string;
  onChangeText: Function;
  onPress?: Function;
  style?: object;
  setMyCountryCode: object;
};

const AppPhoneInput: React.FC<Props> = ({
  title,
  value,
  onChangeText,
  onPress,
  style,
  setMyCountryCode,
}) => {
  const onSelect = country => {
    setMyCountryCode(country.callingCode.length ? country.callingCode[0] : '');
    setCountryCode(country.callingCode.length ? country.callingCode[0] : '');
  };

  const [countryCode, setCountryCode] = useState('US');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validatePhone, setValidatePhone] = useState({
    isValid: false,
    error: '',
  });

  return (
    <View
      style={[styles.transparentContainer, style]}
      // onPress={onPress}
    >
      <View style={styles.countryCodeCompWrapper}>
        <CountryPickerComp
          validatePhone={validatePhone}
          setValidatePhone={setValidatePhone}
          setCountryCode={setCountryCode}
          setPhoneNumber={setPhoneNumber}
          countryCode={countryCode}
          phoneNumber={phoneNumber}
        />
      </View>
      <TextInput
        value={value || ''}
        keyboardType="numeric"
        placeholder={title || 'Mobile Number'}
        style={styles.inputField}
        placeholderTextColor="rgba(255, 255, 255, 0.3)"
        onChangeText={onChangeText ? onChangeText : () => {}}
      />
    </View>
  );
};
export default AppPhoneInput;
