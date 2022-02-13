import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';

export type Props = {};
const AppTransparentButton: React.FC<Props> = ({
  title,
  icon,
  onPress,
  style,
  titleStyle,
  disabled,
}) => {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[styles.transparentContainer, style]}>
        <Text style={[styles.title2, titleStyle]}>{title}</Text>
        <View style={styles.iconView}>
          <Image style={styles.icon} source={icon || SOUND_CLOUD} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppTransparentButton;
