import React from 'react';
import { Text, Button } from 'native-base';

import Styles from './style.js';
const styles = Styles;



const BlockBtnComponent = (props) => {
    return (
        <Button rounded block
            style={styles.btnStyle}
            bordered={props.bordered}
            dark={props.dark}
            danger={props.danger}
            onPress={() => props.onPress(props.item)}
        >
            <Text>{props.text}</Text>
        </Button>
    );
}

export default BlockBtnComponent;