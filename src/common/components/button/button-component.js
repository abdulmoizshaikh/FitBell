import React from 'react';
import { Text, Button, Icon } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
const screen = Dimensions.get('window');

import Styles from './style.js';
const styles = Styles;



const ButtonComponent = (props) => {
    return (
        <Button
            iconRight
            bordered={props.bordered}
            // dark={props.dark}
            style={[styles.btnStyle, props.style]}
            light={props.light}
            onPress={() => props.onPress(props.item)}

        >
            <Text
                adjustsFontSizeToFit
                allowFontScaling
                dark
                style={[styles.btnTextStyle]}>
                {props.itemName.length > 8 ? props.itemName.substr(0, 8)+'...' : props.itemName }
                </Text>
            <Icon
                style={props.bordered ? { color: 'rgb(149, 202, 49)'} : { color: 'rgb(196,202,204)'} }
                type="FontAwesome"
                name={props.bordered ? 'check-circle' : 'circle' } />
        </Button>
    );
}


export default ButtonComponent;