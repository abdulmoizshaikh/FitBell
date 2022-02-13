import React from 'react';
import { View, Image,  } from 'react-native';
import { Card, CardItem, Text } from 'native-base';
// Icons
// import StarIcon from 'react-native-vector-icons/FontAwesome'
// CardImage
// import myimage from '../../../common/assets//imag.jpg';


const CardInfoComponent = (props) => {
    const styles = { ...props.style };

    return (
        <Card style={styles.topCardStyle} transparent>

            <CardItem cardBody>
                <Image source={props.image} style={[styles.topCardImage]} />
            </CardItem>

            <View style={styles.topCardFooterView}>
                <Text uppercase={true} style={styles.topCardFooterTitle}>{props.name}</Text>

                <View style={styles.topCardfooterRow}>
                    <Text info>Italian </Text>
                    <Text info>-{props.calories} </Text>
                    <Text info >- {props.price}.00</Text>
                </View>
            </View>
        </Card>
    );
}

export default CardInfoComponent;