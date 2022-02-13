import {StyleSheet} from 'react-native';
import {themeColors} from '../../../theme';

export default StyleSheet.create({
  scrollview: {
    height: '100%',
  },
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: themeColors.primary,
  },
  appName: {
    height: 22,
    marginTop: 35,
    resizeMode: 'contain',
  },
  heading1: {
    fontSize: 20,
    marginTop: 25,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Sansation-Bold',
  },
  heading2: {
    fontSize: 16,
    marginTop: 15,
    color: '#C6C6C6',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Sansation-Bold',
  },
  heading4: {
    fontSize: 15,
  },
  heading3: {
    fontSize: 14,
  },
  dEnd: {
    marginLeft: 'auto',
    marginRight: 20,
  },
  otpImage: {
    width: 140,
    height: 140,
    marginTop: 38,
  },
  verifiedImage: {
    top: 40,
    right: 0,
    width: 50,
    height: 50,
    position: 'absolute',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
