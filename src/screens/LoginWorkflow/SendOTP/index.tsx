import React, {useState} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from '../styles';
import {
  AppButton,
  AppHeader,
  AppPhoneInput,
  FooterButtonSection,
} from '../../../components';
import ImageAssets from '../../../assets/images';
import {NavigationService} from '../../../services';
import {useKeyboard} from '../../../hooks';

export type Props = {};
const SendOTP: React.FC<Props> = () => {
  const {isKeyboardVisible} = useKeyboard();
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('1');

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <AppHeader />
        <Image source={ImageAssets.EnterOTIcon} style={styles.otpImage} />
        <Text style={styles.heading1}>Phone Verification</Text>

        <AppPhoneInput
          value={phone}
          onChangeText={setPhone}
          style={GlobalStyles.MT(35)}
          setMyCountryCode={setCountryCode}
          title="Mobile Number"
        />

        <Text style={[GlobalStyles.heading2, styles.heading4]}>
          <Text style={styles.heading3}>You did’nt recieve a code? </Text>
          <Text style={styles.textBold}>Re-send</Text>
        </Text>

        {isKeyboardVisible ? null : (
          <FooterButtonSection
            onPress={() => NavigationService.navigate('VerifyOTP')}
            btnTitle="VERIFY"
          />
        )}
      </View>
    </ScrollView>
  );
};

export default SendOTP;
