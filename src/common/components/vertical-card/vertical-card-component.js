import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import { Card, Text, CardItem, Left, Right, Fab, Container, Content, Body, Item, Icon } from 'native-base';
import Iconstyles from './style.js';
// import myimage from '../../assets/imag.jpg';
// Icons
// import StarIcon from 'react-native-vector-icons/FontAwesome'
// import HeartIcon from 'react-native-vector-icons/FontAwesome'
import AntIcon from 'react-native-vector-icons/AntDesign';
import AddIcon from 'react-native-vector-icons/AntDesign'

// const styles = Styles;

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderOperations } from "../../../packages/orders/duck";




class VerticalCardComponent extends Component {

    addProductHandler = async (product) => {
        // console.log("product", product);
        await this.props.actions.setOrderedProductDetails(product);
        this.props.navigation.navigate("DeliveryType")
    }



    render() {
        const styles = { ...this.props.style };
        // console.log("this.props.item", this.props.item)


        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.onPress(this.props.item)}>
                <Card transparent style={styles.cardStyle}>
                    <CardItem bordered={false} cardBody style={[styles.cardItems, { justifyContent: 'center' }]}>
                        <ImageBackground source={this.props.image} imageStyle={{ borderRadius: 10 }} style={[styles.cardImage]}>
                            {
                                this.props.favouriteIcon !== false && (this.props.isFavourite ?
                                    <AntIcon name="like2" style={[Iconstyles.cardIcon]} />
                                    : <AntIcon name="dislike2" style={[Iconstyles.cardIcon, { backgroundColor: "#ea032f", paddingTop: 6 }]} />)
                            }
                        </ImageBackground>
                        {/* <Image source={{ uri: this.props.image }} style={styles.cardImage} /> */}
                    </CardItem>

                    <View style={[styles.cardRightTextView]}>
                        <Text style={[styles.cardTextTitle]}>{this.props.name}</Text>
                        <View style={{ borderTopColor: '#95ca31', marginTop: -4, borderTopWidth: 4, width: 68 }} />
                        {
                            this.props.description &&
                            <Text style={[styles.cardTextLastCaption]}>{this.props.description}</Text>
                        }
                        {
                            this.props.addedByText &&
                            <View style={styles.footerView}>
                                <Text info style={[styles.footerLastCaption]}>{this.props.footerText}</Text>
                            </View>
                        }
                        <View>
                            <Text style={styles.calorieText}>{this.props.calories}</Text>
                        </View>
                    </View>

                    {/* {
                        this.props.addMealIcon &&
                        <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableWithoutFeedback style={[styles.cardAddMealIcon]}
                                onPress={() => this.addProductHandler(this.props.item)} >
                                <Icon name="ios-add-circle-outline" type="Ionicons" style={styles.addMealIcon} />
                            </TouchableWithoutFeedback>
                        </View>

                        <TouchableWithoutFeedback style={styles.cardAddMealIcon} onPress={() => this.addProductHandler(this.props.item)} >
                            <AddIcon name="pluscircle" style={styles.addMealIcon} />
                        </TouchableWithoutFeedback>
                    } */}


                    {/* add icon */}
                    {
                        this.props.addMealIcon &&
                        <TouchableWithoutFeedback style={styles.cardAddMealIcon}
                            onPress={() => this.addProductHandler(this.props.item)} >
                            <AddIcon name="pluscircle" style={styles.addMealIcon} />
                        </TouchableWithoutFeedback>
                    }

                </Card>
            </TouchableWithoutFeedback>

        );
    }

}




const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setOrderedProductDetails: orderOperations.setOrderedProductDetails
        }, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(VerticalCardComponent);





{/* <View style={styles.footerRow}>
                            <Left style={styles.leftStarView}>
                                <StarIcon name="star" size={15} />
                                <StarIcon name="star" size={15} />
                                <StarIcon name="star" size={15} />
                                <StarIcon name="star" size={15} />
                            </Left>
                            <Body></Body>
                            <Right>
                                <Text style={[styles.calorieText, { fontSize: 12 }]}>{this.props.calories}</Text>
                            </Right>
                        </View> */}