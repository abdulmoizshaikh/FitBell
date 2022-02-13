import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';

export default StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Sansation-Bold',
  },
  transparentContainer: {
    height: 59,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    // alignItems: 'center',
    paddingLeft: 11,
    paddingRight: 11,
    // justifyContent: 'space-between',
    elevation: 3,
    // paddingLeft: 100,

    shadowColor: 'rgba(255, 255, 255, 0.2)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconView: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  // codeView: {
  // left: 4,
  // bottom: 4,
  // position: 'absolute',
  // width: 90,
  // height: 49,
  // zIndex: 999,
  // borderTopLeftRadius: 5,
  // borderBottomLeftRadius: 5,
  // opacity: 0.5,
  // backgroundColor: themeColors.phone,
  // justifyContent: 'center',
  // alignItems: 'center',
  // },
  inputField: {
    width: '100%',
    fontSize: 15,
    color: 'white',
    fontFamily: 'Sansation-Bold',
  },
  countryCode: {
    color: 'white',
    fontSize: 15,
    // marginTop: 25,
    fontFamily: 'Sansation-Bold',
  },
  countryCodeCompWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
