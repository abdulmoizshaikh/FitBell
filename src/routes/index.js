import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import SideBar from '../common/components/sidebar/sidebar';
// import {Easing, Animated} from 'react-native';

// here by this transition config funtion we can perform one of three typer of transition effect in react navigation zoom, translateX, and translateY bydefault the effect is translateX
// const transitionConfig = () => {
//   return {
//     swipeEnabled: false,
//     transitionSpec: {
//       duration: 300,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {
//       const {layout, position, scene} = sceneProps,
//         thisSceneParams = scene.route.params || {},
//         thisSceneIndex = scene.index,
//         width = layout.initWidth,
//         height = layout.initHeight,
//         translateX = position.interpolate({
//           inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//           outputRange: [width, 0, 0],
//         }),
//         translateY = position.interpolate({
//           inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//           outputRange: [height, 0, 0],
//         });
//       const scale = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//         outputRange: [0, 1, 1],
//       });
//       const opacity = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
//         outputRange: [0, 1, 1],
//       });
//       const scaleWithOpacity = {
//         opacity,
//         transform: [{scaleX: scale}, {scaleY: scale}],
//       };
//       if (thisSceneParams.bottom) {
//         return {transform: [{translateY}]};
//       } else if (thisSceneParams.zoom) {
//         return scaleWithOpacity;
//       } else {
//         return {transform: [{translateX}]};
//       }
//     },
//   };
// };

//here we create our stacknavigator
const AppNavigator = createStackNavigator(AuthRoutes, {
  initialRouteName: 'AuthLoading',
  headerMode: 'none',
  // transitionConfig
});

//here we are locked our drawer on specific component which we dont want to show (drawer or slider)
AppNavigator.navigationOptions = ({navigation}) => {
  let drawerLockMode = 'unlocked';
  let lockedRouteArray = [
    'Introduction',
    'Login',
    'Signup',
    'ReferralCode',
    'ForgotPass',
    'Verification',
    'ChangePass',
    'AllergiesRestriction',
    'OtherEllergiesRestrictions',
    'FitnessGoals',
    'ChildFitnessGoals',
  ];
  let routes = [...navigation.state.routes];

  let nRoute = null,
    lockedRoute = null;
  routes.forEach(key => {
    nRoute = key.routeName;
  });
  for (let i = 0; i < lockedRouteArray.length; i++) {
    lockedRoute = lockedRouteArray[i];
    if (lockedRoute == nRoute) {
      drawerLockMode = 'locked-closed';
    }
  }
  return {
    drawerLockMode,
  };
};

// this is for creating our sildebar component pass in drawer to use as a drawer
const Drawer = createDrawerNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
  },
  {
    contentComponent: props => <SideBar {...props} />,
  },
);

export default createAppContainer(Drawer);
