import React from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export default function NavItem({icon, title, onPress}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => (onPress ? onPress() : alert('Clicked!'))}>
      <View style={styles.navItem}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
