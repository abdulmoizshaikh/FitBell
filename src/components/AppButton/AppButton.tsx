import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export type Props = {
  title: string;
  onPress?: Function;
  style?: Object;
  titleStyle?: Object;
};

const AppButton: React.FC<Props> = ({
  title,
  onPress,
  style,
  titleStyle,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.container, style]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
