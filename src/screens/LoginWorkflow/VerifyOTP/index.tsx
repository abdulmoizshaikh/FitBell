import React from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import styles from '../styles';
import {AppHeader, FooterButtonSection} from '../../../components';
import ImageAssets from '../../../assets/images';
import {NavigationService} from '../../../services';
import {useKeyboard} from '../../../hooks';
import {AuthContext} from '../../../context';

export type Props = {};
const VerifyOTP: React.FC<Props> = () => {
  const {isKeyboardVisible} = useKeyboard();
  // use context
  const {signIn} = React.useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      <View style={styles.container}>
        <AppHeader />

        <Text style={[styles.heading1, GlobalStyles.MT(35)]}>
          Phone Verification
        </Text>

        <View>
          <Image source={ImageAssets.EnterOTIcon} style={styles.otpImage} />
          <Image
            source={ImageAssets.VerifyOTIcon}
            style={styles.verifiedImage}
          />
        </View>

        <Text style={[GlobalStyles.heading2, {fontSize: 18}]}>Verified</Text>

        {isKeyboardVisible ? null : (
          <FooterButtonSection
            onPress={() => {
              signIn();
              setTimeout(() => {
                NavigationService.navigate('Profile');
              }, 1000);
            }}
            btnTitle="NEXT"
          />
        )}
      </View>
    </ScrollView>
  );
};
export default VerifyOTP;
