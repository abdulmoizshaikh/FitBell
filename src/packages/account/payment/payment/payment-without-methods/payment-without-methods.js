import React from 'react';
import { Image } from "react-native";
import { View, Text, Button } from 'native-base';

import Styles from './style';
const styles = Styles;


// icon
import { images } from "../../../../../common/assets/images";


const PaymentWithoutMethod = (props) => {
    const {openStripe} = props;
    return (

        <View style={styles.contentSection1}>
            <Image source={images.paymentCard} />
            <View style={styles.textContainerStyle}>
                <Text style={styles.titleStyle}>{`You haven’t set up any\n payment methods yet`}</Text>
            </View>

            <Button primary full style={styles.btnStyle} onPress={openStripe}>
                <Text uppercase={false} style={styles.btnText}>Add new</Text>
            </Button>
        </View>
    );
}


export default PaymentWithoutMethod;