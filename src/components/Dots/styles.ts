import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';

export default StyleSheet.create({
  container: {
    width: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: themeColors.grey,
  },
  activeDot: {
    backgroundColor: themeColors.dots,
  },
});
