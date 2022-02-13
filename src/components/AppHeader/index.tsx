import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ImageAssets from '../../assets/images';
import {NavigationService} from '../../services';
import {useDrawerStatus} from '@react-navigation/drawer';

export type Props = {
  rightIcon?: boolean;
  leftIcon?: boolean;
  navigation: any;
};
const AppHeader: React.FC<Props> = props => {
  const isDrawerOpen = props?.rightIcon && useDrawerStatus() === 'open';
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconWrapper(0.3)}>
          {props?.leftIcon && (
            <TouchableOpacity
              style={GlobalStyles.padding(10)}
              onPress={() => setTimeout(NavigationService.goBack, 1)}>
              <Image source={ImageAssets.BackArrow} style={styles.icon} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        <View style={styles.iconWrapper(1)}>
          <Image source={ImageAssets.AppNameImg} style={styles.appName} />
        </View>

        {props?.rightIcon && useDrawerStatus() && (
          <TouchableOpacity
            style={styles.iconWrapper(0.3)}
            onPress={() => props?.navigation?.openDrawer()}>
            <Image source={ImageAssets.MoreIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
  },
  iconWrapper: (flex: number) => ({
    flex,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    // backgroundColor: 'red',
  }),
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  appName: {
    height: 22,
    resizeMode: 'contain',
  },
});
