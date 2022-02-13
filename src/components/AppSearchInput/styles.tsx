import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';

export default StyleSheet.create({
  transparentContainer: {
    height: 59,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 11,
    paddingRight: 11,
    elevation: 3,
    shadowColor: 'rgba(255, 255, 255, 0.2)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  inputField: {
    width: '100%',
    fontSize: 15,
    color: themeColors.white,
    fontFamily: 'Sansation-Bold',
  },
});
