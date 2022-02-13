import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

import ImageAssets from '../../../assets/images';
import {
  AppHeader,
  AppTransparentButton,
  FooterButtonSection,
} from '../../../components';
// import {loginWithYoutube} from 'source/redux/actions/auth';
import InstagramLogin from 'react-native-instagram-login';
import {NavigationService} from '../../../services';

export type Props = {};
const ArtistCreateAccountS1: React.FC<Props> = () => {
  const [count, setCount] = useState(1);
  const instagramLogin = useRef(null);
  const setIgToken = data => {
    console.log('Token: ', data);
  };

  return (
    <View style={styles.container}>
      <AppHeader />

      <Text style={styles.heading1}>
        {count === 2
          ? 'Have a second account? Login here'
          : 'Fill in your account details using'}
      </Text>

      <AppTransparentButton
        icon={ImageAssets.YoutubeIcon}
        style={GlobalStyles.MT(35)}
        title="Login with Youtube (Google-Required)"
        // onPress={() => dispatch(loginWithYoutube())}
      />
      {count === 2 && (
        <>
          <AppTransparentButton
            icon={ImageAssets.InstaIcon}
            style={{marginTop: 20}}
            title="Login with Instagram"
            // onPress={() => instagramLogin.current.show()}
          />

          <InstagramLogin
            ref={instagramLogin}
            appId="154789513242329"
            appSecret="bac2d02c1f65b97a72c29a02a449649a"
            redirectUrl="https://www.google.com/"
            scopes={['user_profile', 'user_media']}
            onLoginSuccess={setIgToken}
            onLoginFailure={data => console.log(data)}
          />
        </>
      )}

      <FooterButtonSection
        btnTitle="NEXT"
        isHeading
        headingText="I'dont have an account"
        onPress={() => {
          if (count === 1) {
            setCount(2);
          } else if (count === 2) {
            NavigationService.navigate('ArtistCreateAccount');
          }
        }}
      />
    </View>
  );
};

export default ArtistCreateAccountS1;
