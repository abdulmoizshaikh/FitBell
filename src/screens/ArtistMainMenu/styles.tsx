import {Dimensions, StyleSheet} from 'react-native';
import {themeColors} from '../../theme';
const {height} = Dimensions.get('window');

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: 'rgba(56, 56, 56, 0.9)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: themeColors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  appName: {
    marginTop: 80,
    height: 20,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  navItem: {
    width: '100%',
    paddingTop: 15,
    paddingLeft: 40,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: 22,
    height: 22,
  },
  title: {
    fontSize: 16,
    color: 'white',
    marginLeft: 30,
    fontFamily: 'Sansation-Bold',
  },
  image: {
    marginTop: 50,
    // height: height / 3.5,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    right: -25,
  },
});
