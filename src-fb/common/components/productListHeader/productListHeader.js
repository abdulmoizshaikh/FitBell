import React, { Component } from 'react';
import { Text, View, Left, Right, Button } from "native-base";
import moment from "moment";

// stylesheet
import Styles from './style.js';
const styles = Styles;


class ProductsListHeader extends Component {

    dateAfterLastOrder = (date) => {
        return moment(new Date(date)).add(1, 'days').format().split("T")[0]
    }

    tomorrowDatePicker = () => {
        return moment(new Date()).add(1, 'days').format().split("T")[0]
    }




    render() {
        let { order, date, myOrdersData } = this.props;
        // console.log("order", order);
        // console.log("myOrdersData", myOrdersData)

        return (
            <View style={styles.titleView}>
                <Left>
                    {
                        order ?
                            order.date &&
                            <View>
                                {
                                    (new Date(order.date).toISOString().split("T")[0] === new Date().toISOString().split("T")[0]) ?
                                        <Text style={styles.leftTitle} > Today</Text> :
                                        // (order.date.substring(8, 10) == new Date().getDate() + 1) ?
                                        //     <View style={styles.leftView}>
                                        //         <Text style={styles.leftTitle}>Tomorrow </Text>
                                        //         <Text>{order.date.substring(0, 10)}</Text>
                                        //     </View> :
                                        // <Text style={styles.leftTitleNormal}>{order.date.substring(0, 10)}</Text>
                                        <Text style={styles.leftTitleNormal}>
                                            {console.log("order.date.substring(0, 10)", order.date.substring(0, 10), moment(new Date(order.date.substring(0, 10))).format("DD/MM/YYYY"))}
                                            {moment(new Date(order.date.substring(0, 10))).format("DD/MM/YYYY")}
                                        </Text>
                                }
                            </View>
                            :
                            (myOrdersData) ?
                                myOrdersData[myOrdersData.length - 1].date &&
                                    (this.dateAfterLastOrder(myOrdersData[myOrdersData.length - 1].date) === this.tomorrowDatePicker()) ?
                                    <View style={styles.leftView}>
                                        <Text style={styles.leftTitle}>Tomorrow </Text>
                                        <Text style={styles.leftTitleNormal}>
                                            {/* {this.dateAfterLastOrder(myOrdersData[myOrdersData.length - 1].date.substring(0, 10))} */}
                                            {moment(new Date(myOrdersData[myOrdersData.length - 1].date.substring(0, 10))).add(1, 'days').format('DD/MM/YYYY')}
                                        </Text>
                                    </View> :
                                    < Text style={styles.leftTitleNormal}>
                                        {moment(new Date(myOrdersData[myOrdersData.length - 1].date.substring(0, 10))).add(1, 'days').format('DD/MM/YYYY')}
                                        {/* {this.dateAfterLastOrder(myOrdersData[myOrdersData.length - 1].date.substring(0, 10))} */}
                                    </Text>
                                :
                                < View style={styles.leftView}>
                                    <Text style={styles.leftTitle}>Tomorrow </Text>
                                    <Text>{date}</Text>
                                </View>
                    }
                </Left>

                <Right>
                    <Button style={styles.rightConfirmBtn} >
                        <Text style={styles.confitmBtnText}>Confirm Day</Text>
                    </Button>
                </Right>
            </View >

        );
    }
}


export default ProductsListHeader;