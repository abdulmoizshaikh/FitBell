import React from 'react';
import { Image, View, TouchableWithoutFeedback } from 'react-native';
import { Card, CardItem, Text, Icon, Button } from 'native-base';
import WarningIcon from 'react-native-vector-icons/AntDesign';
import Iconstyles from './style.js';
// import myimage from '../../assets/imag.jpg';




const ProductCard = (props) => {
    // console.log("ProductCard", props.isTrainer)

    const styles = { ...props.style };

    const CardListFooter = (
        <View style={styles.footerView}>
            <Text style={[styles.footerTitle]}>{props.footerTitle}</Text>
            <Text info style={[styles.footerLastCaption]}>{props.footerText}</Text>
        </View>);

    const CardsOrderFooter = (
        <View style={styles.footerView}>
            <Text style={[styles.footerTitle]}>{props.name}</Text>
        </View>);

    return (
        <TouchableWithoutFeedback
            onPress={props.onPressProp}
        >
            <Card style={styles.cardStyle}>
                <CardItem cardBody style={{ borderBottomWidth: 5, borderBottomColor: 'red', borderRadius: 0 }}>
                    <WarningIcon
                        style={Iconstyles.cardIcon}
                        name="warning" />

                    <Image source={props.image} style={styles.cardImage} />
                </CardItem>
                {props.cardsList ? CardListFooter : CardsOrderFooter}
                {props.isTrainer ?
                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        <Button style={{elevation:0, width: 62, height: 19, marginHorizontal: 10, backgroundColor: '#95ca31' }}>
                            <Text style={{fontSize: 8, width: '100%', paddingLeft: 0, paddingRight: 0, textAlign: 'center'}}>Confirm</Text>
                        </Button>
                        <Button style={{elevation:1, width: 62,height: 19,  marginHorizontal: 5, backgroundColor: '#fafafa'}}>
                            <Text style={{color: '#7ed321', fontSize: 8}}>Delete</Text>
                        </Button>
                    </View> : null}
            </Card>
        </TouchableWithoutFeedback >
    );
}



export default ProductCard;

