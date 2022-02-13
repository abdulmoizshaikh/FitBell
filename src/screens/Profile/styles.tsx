import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';

export default StyleSheet.create({
  scrollview: {
    height: '100%',
  },
  container: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: themeColors.primary,
  },
  row: {
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  more: {
    width: 20,
    height: 20,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 13,
  },
  appName: {
    height: 22,
    marginRight: 'auto',
    marginLeft: 'auto',
    resizeMode: 'contain',
  },
  heading1: {
    fontSize: 18,
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
  heading3: {
    fontSize: 15,
    color: 'white',
  },
  pading: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  otpImage: {
    width: 240,
    height: 240,
    marginTop: 25,
  },
  networksView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  iconView: {
    width: 48,
    height: 48,
    marginRight: 10,
    borderRadius: 24,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});
