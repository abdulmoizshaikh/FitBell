/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {TouchableOpacity} from 'react-native';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationService} from '../../../services';
import styles from './style';

export type Props = {};
export const NetworkLoggerWidget: React.FC<Props> = () => (
  <TouchableOpacity
    style={styles.wifiWidget}
    onPress={() => NavigationService.navigate('NetworkLoggerView')}>
    {/* <FontAwesome name="wifi" size={16} color="white" /> */}
  </TouchableOpacity>
);
