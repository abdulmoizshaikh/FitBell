// global styles Global.js
import {StyleSheet} from 'react-native';
import {Metrix} from '..';

module.GlobalStyles = StyleSheet.create({
  MTAuto: {
    marginTop: 'auto',
  },

  height100: {
    height: '100%',
  },

  heading2: {
    fontSize: 16,
    marginTop: 22,
    color: '#C6C6C6',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Sansation-Bold',
  },

  padding: (val: number) => ({
    padding: Metrix.VerticalSize(val),
  }),
  // handlers
  MT: (val = 20) => ({
    marginTop: Metrix.VerticalSize(val),
  }),
  MB: (val = 20) => ({
    marginBottom: Metrix.VerticalSize(val),
  }),
  PB: (val = 20) => ({
    paddingbottom: Metrix.VerticalSize(val),
  }),
});

if (global) {
  global.GlobalStyles = module.GlobalStyles;
}
