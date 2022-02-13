import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import theme from 'source/constants/colors';
import DrawerContent from './components/DrawerContent';
import MORE_ICON from 'source/assets/more.png';

// screens
import Dashboard from 'source/ui/dashboard';
import Messages from 'source/ui/profile';
import Contact from 'source/ui/auth/selection/FanArtistSelection';

import MainNavigation from './Main';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerRight: () => (
            <TouchableWithoutFeedback transparent onPress={() => navigation.openDrawer()}>
              <Image
                source={MORE_ICON}
                style={styles.moreIcon}
              />
            </TouchableWithoutFeedback>
          ),
        }}>
        <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
        <Stack.Screen name="Profile">{props => <Messages {...props} />}</Stack.Screen>
        <Stack.Screen name="Contact">{props => <Contact {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        drawerPosition="right"
        sceneContainerStyle={{ backgroundColor: theme.primary }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {props => <MainNavigation {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent', borderRadius: 15 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
  moreIcon: {
    width: 25,
    height: 25,
    marginTop: 15,
    marginRight: 13
  }
});
