// import React, {useRef} from 'react';
// import {View, Image, Text} from 'react-native';
// import styles from '../styles';

// import InstagramLogin from 'react-native-instagram-login';
// import ImageAssets from '../../../assets/images';
// import {AppButton, AppTransparentButton} from '../../../components';

// export default function ArtistFanCreateAccountS2() {
//   const instagramLogin = useRef(null);

//   const setIgToken = data => {
//     console.log('Token: ', data);
//   };

//   // return (
//   // <View style={[styles.container, {height: '100%'}]}>
//   //   <AppHeader/>

//   //   <Text style={styles.heading1}>Fill in your account details using</Text>

//   //   <AppTransparentButton
//   //     icon={ImageAssets.YoutubeIcon}
//   //     style={{marginTop: 35}}
//   //     onPress={() => {}}
//   //     title="Login with Youtube (Google-Required)"
//   //   />

//   //   <AppTransparentButton
//   //     icon={ImageAssets.InstaIcon}
//   //     style={{marginTop: 20}}
//   //     title="Login with Instagram"
//   //     // onPress={() => instagramLogin.current.show()}
//   //   />

//   //   <InstagramLogin
//   //     ref={instagramLogin}
//   //     appId="154789513242329"
//   //     appSecret="bac2d02c1f65b97a72c29a02a449649a"
//   //     redirectUrl="https://www.google.com/"
//   //     scopes={['user_profile', 'user_media']}
//   //     onLoginSuccess={setIgToken}
//   //     onLoginFailure={data => console.log(data)}
//   //   />

//   // );
// }
