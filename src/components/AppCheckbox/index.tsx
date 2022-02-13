import React from 'react';
import {View, Image} from 'react-native';
import ImageAssets from '../../assets/images';
import styles from './styles';

export type Props = {};
const AppCheckbox: React.FC<Props> = ({checked, setChecked}) => {
  return checked ? (
    <View style={styles.container}>
      <Image source={ImageAssets.CheckIcon} style={styles.img} />
    </View>
  ) : (
    <View style={[styles.container, styles.unchecked]} />
  );
};

export default AppCheckbox;
