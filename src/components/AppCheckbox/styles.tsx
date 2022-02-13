import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';

export default StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.white,
    elevation: 2,
  },
  img: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  unchecked: {
    backgroundColor: themeColors.uncheckedBC,
  },
});
