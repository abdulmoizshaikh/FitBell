import {StyleSheet} from 'react-native';
import {Metrix, themeColors} from '../../../theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: themeColors.primary,
    height: '100%',
  },
  heading1: {
    fontSize: 18,
    marginTop: 50,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Sansation-Bold',
  },
  heading3: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: Metrix.HorizontalSize(10),
    fontFamily: 'Sansation-Bold',
  },
  checkRow: {
    width: '100%',
    paddingLeft: 15,
    marginTop: Metrix.VerticalSize(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
});
