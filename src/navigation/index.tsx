import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {InitialStack, AuthStack, AccountStack} from './stack';
import {themeColors} from '../theme';
import {Variable} from '../constants';
import {Image, StyleSheet} from 'react-native';
import {NavigationService} from '../services';
import {AuthContext} from '../context';
import {images} from '../common/assets/images';

const RootStackScreen = ({userToken}: any) => {
  const {signOut} = React.useContext(AuthContext);
  const AuthenticationStack = [...InitialStack, ...AuthStack];
  const AppStack = [...AccountStack];

  const AuthStackNavigator = createStackNavigator();
  const AuthStackNavigatorScreen = () => (
    <AuthStackNavigator.Navigator
      initialRouteName={'Splash'}
      screenOptions={{headerShown: false}}>
      {AuthenticationStack.map((stack: any) => (
        <AuthStackNavigator.Screen {...stack} />
      ))}
    </AuthStackNavigator.Navigator>
  );

  const RenderDrawerIcon = () => (
    <Image source={images.paymentCard} style={styles.icon} />
  );

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        {Variable.DRAWER_LIST_ITEMS.map((item: any) => (
          <DrawerItem
            icon={() => item?.icon && <RenderDrawerIcon />}
            key={item?.id}
            labelStyle={styles?.drawerItemLabelStyle}
            label={item?.label}
            style={styles?.drawerItemStyle}
            onPress={() => {
              if (item?.label === 'Logout') {
                signOut();
              } else if (item?.label === '') {
                props?.navigation?.closeDrawer();
              } else {
                Boolean(item?.routeName) &&
                  NavigationService.navigate(item?.routeName);
              }
            }}
          />
        ))}
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
    );
  }

  const Drawer = createDrawerNavigator();
  const DrawerScreen = () => (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        // drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: themeColors.primary,
          width: 240,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {AppStack.map(stack => (
        <Drawer.Screen {...stack} />
      ))}
    </Drawer.Navigator>
  );

  // splash screen should be in both stacks auth and account or in general outside loop
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userToken ? (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{
            animationEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackNavigatorScreen}
          options={{
            animationEnabled: false,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootStackScreen;

const styles = StyleSheet.create({
  drawerItemStyle: {},
  drawerItemLabelStyle: {
    color: themeColors.white,
  },
  icon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
});
