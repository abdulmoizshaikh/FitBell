import {StyleSheet} from 'react-native';
import {Metrix} from '../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 5,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // zIndex: 1,
  },
  text: {
    fontSize: Metrix.customFontSize(14),
    color: 'white',
    fontFamily: 'Sansation-Bold',
    padding: Metrix.VerticalSize(5),
  },
  dropDown: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 20,
    width: 120,
    // zIndex: 1,
    // top: 15,
    // right: 18,
    // zIndex: 999,
    // paddingLeft: 10,
    // paddingBottom: 10,
  },
  item: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#4D4D4D',
    fontFamily: 'Sansation-Regular',
    backgroundColor: 'yellow',
    zIndex: 10,
  },
  containerButtonStyle: {},
});
