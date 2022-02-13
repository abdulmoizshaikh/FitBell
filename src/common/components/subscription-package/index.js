import React, { Component } from 'react';
import { TouchableOpacity } from "react-native";
import { Text, Icon, View } from 'native-base';

import Styles from "./style";
const styles = Styles;





class SubscriptionPackage extends Component {

    render() {
        const { item, updateSubscriptionHandler } = this.props;

        return (
            <TouchableOpacity onPress={() => updateSubscriptionHandler(item._id)}>
                <View style={styles.listItem}>
                    <View style={styles.leftIconWrapper}>
                        <Icon name="diamond" type="SimpleLineIcons" style={styles.iconStyle} />
                    </View>
                    <View style={styles.bodyWrapper}>
                        <View style={styles.bodyTitleWrapper}>
                            <Text style={styles.bodyText1}>{`${item.points} points `}</Text>
                            <Text style={styles.bodyText1}>{`(${item.number_of_meal} meals)`}</Text>
                        </View>
                        <Text style={styles.bodyText2}>{`$ ${item.price}.00`}</Text>
                    </View>
                    <View style={styles.rightIconWrapper}>
                        <Icon name="chevron-thin-right" type="Entypo" style={styles.rightArrow} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

export default SubscriptionPackage;