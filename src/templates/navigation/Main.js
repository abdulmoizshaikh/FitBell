import React from 'react'
import { StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Animated from 'react-native-reanimated';

import MORE_ICON from 'source/assets/more.png';

import Dashboard from 'source/ui/dashboard';
import Profile from 'source/ui/profile';

const Stack = createStackNavigator();

export default function Main({ navigation, style }) {
    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                screenOptions={{
                    headerTransparent: true,
                    headerTitle: null,
                    headerLeft: null,
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
                <Stack.Screen name="Profile">{props => <Profile {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    )
}

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
    moreIcon: {
      width: 25,
      height: 25,
      marginTop: 15,
      marginRight: 13
    }
})