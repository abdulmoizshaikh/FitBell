import React from 'react';
import { View, Text, Button, Thumbnail } from 'native-base';

import Styles from './style';
const styles = Styles;

// Icons
// import AddressCardIcon from 'react-native-vector-icons/FontAwesome';
import { images } from '../../../../../common/assets/images';

const DeliveryWithoutAddressComp = (props) => {
    return (
        <View style={styles.contentSection1}>
            <Thumbnail square large style={styles.emptyCardIcon} source={images.mapIcon} />
            <View style={styles.textContainerStyle}>
                <Text style={styles.titleStyle}>You haven’t set up any shipping address yet</Text>
            </View>

            <Button block style={styles.btnStyle}
                onPress={() => { props.navigation.navigate("AddNewDeliveryAddress") }}
            >
                <Text>Add New</Text>
            </Button>
        </View>
    );
}


export default DeliveryWithoutAddressComp;