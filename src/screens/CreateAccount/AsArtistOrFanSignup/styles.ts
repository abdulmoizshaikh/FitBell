import {Dimensions, StyleSheet} from 'react-native';
import {themeColors} from '../../../theme';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  scrollViewContainer: {
    height: '100%',
  },
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: themeColors.primary,
  },
  appName: {
    height: 22,
    marginTop: 18,
    resizeMode: 'contain',
  },
  image: {
    marginTop: 50,
    height: height / 3.5,
    resizeMode: 'contain',
  },
  heading1: {
    fontSize: 20,
    marginTop: 50,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Sansation-Bold',
  },
  heading2: {
    fontSize: 18,
    marginTop: 22,
    color: '#C6C6C6',
    marginBottom: 45,
    textAlign: 'center',
    fontFamily: 'Sansation-Bold',
  },
  bottomBtnsWrapper: {
    marginTop: 'auto',
    width: '100%',
    paddingBottom: 15,
  },
  btnStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  createAccountBtn: {
    marginTop: 50,
  },
  signinBtn: {
    marginTop: 15,
  },

  // swiper
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: themeColors.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
