import React, {useState} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from '../styles/styles';

import {
  AppCheckbox,
  AppInput,
  AppHeader,
  AppPhoneInput,
  FooterButtonSection,
} from '../../../components';
import {useDispatch} from 'react-redux';
import ImageAssets from '../../../assets/images';
import {NavigationService} from '../../../services';
import {useKeyboard} from '../../../hooks/';

export type Props = {};

const ArtistCreateAccount: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('1');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [PRO, setPRO] = useState('');
  const [merchableProfile, setMerchableProfile] = useState('');
  const {isKeyboardVisible} = useKeyboard();

  return (
    <View style={styles.container}>
      <AppHeader />

      <Text style={styles.heading1}>SIGN UP</Text>
      <Text
        style={
          GlobalStyles.heading2
        }>{`Please fill below details to create a\nnew account`}</Text>

      <AppInput title="Name" value={name} onChangeText={setName} />

      <AppPhoneInput
        value={phone}
        onChangeText={setPhone}
        style={GlobalStyles.MT(10)}
        setMyCountryCode={setCountryCode}
        title={`Mobile Number`}
      />

      <AppInput title="Country" value={country} onChangeText={setCountry} />

      <TouchableWithoutFeedback onPress={() => setIsChecked(prev => !prev)}>
        <View style={styles.checkRow}>
          <AppCheckbox checked={isChecked} setChecked={setIsChecked} />
          <Text style={styles.heading3}>I Agree to the Terms & Conditions</Text>
        </View>
      </TouchableWithoutFeedback>

      {isKeyboardVisible ? null : (
        <FooterButtonSection
          btnTitle="NEXT"
          onPress={() => {
            // dispatch({type: 'AUTHENTICATE_APP'})}
            NavigationService.navigate('Login');
          }}
        />
      )}
    </View>
  );
};

export default ArtistCreateAccount;
