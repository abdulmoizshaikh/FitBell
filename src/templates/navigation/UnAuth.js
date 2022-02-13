import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CreateOrLogin from 'source/ui/auth/selection';
import CreateAs from 'source/ui/auth/selection/FanArtistSelection';
import CreateAccountUsing from 'source/ui/auth/createAccount';
import FanCreateAccount from 'source/ui/auth/createAccount/FanCreateAccount';
import ReLogin from 'source/ui/auth/login/Relogin';
import OTP from 'source/ui/auth/login/OTP';
import OTPVerified from 'source/ui/auth/login/OTPVerified';

const Stack = createStackNavigator();

export default function UnAuth() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false,}}>
            <Stack.Screen name="CreateOrLogin" component={CreateOrLogin} />
            <Stack.Screen name="CreateAs" component={CreateAs} />
            <Stack.Screen name="CreateAccountUsing" component={CreateAccountUsing} />
            <Stack.Screen name="FanCreateAccount" component={FanCreateAccount} />
            <Stack.Screen name="Login" component={ReLogin} />
            <Stack.Screen name="OTP" component={OTP} />
            <Stack.Screen name="OTPVerified" component={OTPVerified} />
        </Stack.Navigator>
    )
}
