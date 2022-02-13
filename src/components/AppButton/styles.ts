import {StyleSheet} from 'react-native';
import {themeColors} from '../../theme';

export default StyleSheet.create({
  container: {
    height: 52,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.secondary,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Sansation-Bold',
  },
  title2: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Sansation-Bold',
  },
  outlinedContainer: {
    height: 52,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  transparentContainer: {
    height: 59,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 11,
    paddingRight: 11,
    justifyContent: 'space-between',
    elevation: 3,

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
});
