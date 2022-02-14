import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {images} from '../../../common/assets/images';
import {Metrix, themeColors} from '../../../theme';
// import {LogoIcon, HisaabTextIcon} from '../../assets/svg';
// import {asyncStorage} from '../../utills';
// import {Root, StyledView} from './style';
// Store imports
// import {useDispatch} from 'react-redux';
// import {AuthActions} from '../../store/actions';

export type Props = {};

const Splash: React.FC<Props> = () => {
  // const dispatch = useDispatch();
  /**
   * Checks Token and performs operation accordingly
   */
  const fetchData = async () => {
    //   const getToken = await asyncStorage.getToken();
    //   const id = await asyncStorage.getID();
    //   const languagePref = await asyncStorage.getLanguage();
    //   if (getToken !== null && getToken.length > 1) {
    //     if (id !== null && id.length > 1) {
    //       dispatch(
    //         AuthActions.loggedIn({
    //           id,
    //           languagePref,
    //         }),
    //       );
    //       NavigationService.reset_0('Tabs');
    //     }
    //   } else {
    setTimeout(() => {
      // NavigationService.reset_0('ChooseLoginOrSignup');
    }, 3000);
    //   }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.logoIcon} source={images.appLogo} />
      {/* <Image
        source={ImageAssets.AppNameImg}
        style={[styles.appName, GlobalStyles.MT(35)]}
      /> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.primary,
  },
  logoIcon: {
    width: Metrix.HorizontalSize(125),
    height: Metrix.VerticalSize(132),
  },
  appName: {
    height: 22,
    resizeMode: 'contain',
  },
});
