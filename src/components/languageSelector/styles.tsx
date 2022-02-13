import {StyleSheet} from 'react-native';
import {Metrix} from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 5,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 1,
  },
  text: {
    fontSize: Metrix.customFontSize(14),
    color: 'white',
    fontFamily: 'Sansation-Bold',
    padding: Metrix.VerticalSize(5),
  },
  dropDown: {
    top: 15,
    right: 18,
    zIndex: 999,
    paddingLeft: 10,
    paddingRight: 50,
    paddingBottom: 10,
    position: 'absolute',
    backgroundColor: 'white',
  },
  item: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#4D4D4D',
    fontFamily: 'Sansation-Regular',
  },
});
