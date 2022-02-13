import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import {
  AppHeader,
  AppPhoneInput,
  FooterButtonSection,
} from '../../../components';
import {useKeyboard} from '../../../hooks';
import {NavigationService} from '../../../services';
import styles from '../styles';

export default function Login() {
  const {isKeyboardVisible} = useKeyboard();
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('1');

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <AppHeader />
        <Text style={styles.heading1}>Welcome Back!</Text>
        <Text style={GlobalStyles.heading2}>Fill in your account using</Text>

        <AppPhoneInput
          value={phone}
          onChangeText={setPhone}
          style={GlobalStyles.MT(35)}
          setMyCountryCode={setCountryCode}
          title="Mobile Number"
        />
        <Text style={[GlobalStyles.heading2, styles.dEnd]}>Change Number?</Text>

        {isKeyboardVisible ? null : (
          <FooterButtonSection
            btnTitle="VERIFY"
            onPress={() => NavigationService.navigate('SendOTP')}
          />
        )}
      </View>
    </ScrollView>
  );
}
