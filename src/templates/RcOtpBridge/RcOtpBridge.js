import React, { useState,useEffect } from 'react';
import {Text, StyleSheet, TouchableOpacity, NativeModules } from 'react-native';

var RcOtp = NativeModules.RcOtp;

export default function RcOtpBridge() {
    const [deviceId, setDeviceId] = useState('');

    const verifyPhone = async () => {
        const id = await RcOtp.verifyPhoneNumber();
        console.log("This is the response from Phone Varification: ", id)
        setDeviceId(id);
    };
    

    return (
        <>
            <Text style={styles.titleText}>Hello, This is Native Bridge Testing</Text>
            <Text style={styles.baseText}>Device ID: {deviceId}</Text>

            <TouchableOpacity onPress={verifyPhone}>
                <Text>Show</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 20,
        fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 30,
      fontWeight: "bold"
    }
});


