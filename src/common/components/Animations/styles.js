import { StyleSheet, Dimensions } from 'react-native'
const screen = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    // justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  screenBackground: {
    flex: 1
  },
  coverImage: {
    flex: 1,
    height: null,
    width: null
  },
  animateAbsoluteView: {
    justifyContent: 'center',
    position: 'absolute',
    top: -2,
    right: 0,
    bottom: 0,
    left: 0,
  }
});