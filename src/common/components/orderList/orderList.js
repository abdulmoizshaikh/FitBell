import React, { Component } from 'react';
import { ScrollView } from "react-native";
import { View } from "native-base";

// packages
import ProductCard from "../productCard/productCard";
import ProductsListHeader from "../productListHeader/productListHeader";
import AddMealCard from "../addMealCard/addMealCard";

// stylesheet
import Styles from './style.js';
const styles = Styles;





class OrderList extends Component {

    onClick = (product) => {
        this.props.navigation.navigate('CardsOrders', { _id: product._id });
    }




    render() {
        return (
            // this loop is for specific date of orders array
            this.props.orders.map((order, index) => {
                return (
                    <View key={index.toString()} style={styles.MV10}>

                        {/* header of orders list */}
                        <ProductsListHeader order={order} />


                        <View style={styles.rowView}>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}>
                                {
                                    (new Date(order.date).toISOString().split("T")[0] !== new Date().toISOString().split("T")[0]) &&
                                    <AddMealCard
                                        navigation={this.props.navigation}
                                        _date={order.date.substring(0, 10)} />
                                }
                                {

                                    // render iteration of product on specific day
                                    order.orders.map((orderProduct, index) => {
                                        let orderCreater = "";
                                        if (order.user._id === orderProduct.created_by) { orderCreater = "You" }
                                        else if (order.user._id === undefined) { orderCreater = "" }
                                        else { orderCreater = "Trainer" }

                                        return (
                                            <ProductCard
                                                key={index.toString()}
                                                style={styles}
                                                cardsList={true}
                                                isTrainer={order.user._id !== orderProduct.created_by && orderProduct.status === 'waiting' ? true : false}
                                                image={{ uri: orderProduct.product.image }}
                                                footerTitle={orderProduct.product.name}
                                                footerText={`Added by ${orderCreater}`}
                                                onPressProp={() => this.onClick(orderProduct.product)}
                                            />)
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>)
            })
        );
    }
}


export default OrderList;