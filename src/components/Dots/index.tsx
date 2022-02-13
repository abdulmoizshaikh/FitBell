import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export type Props = {};
const Dots: React.FC<Props> = ({active}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, active === 0 ? styles.activeDot : {}]} />
      <View style={[styles.dot, active === 1 ? styles.activeDot : {}]} />
    </View>
  );
};

export default Dots;
