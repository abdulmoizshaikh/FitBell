import React, { Component } from 'react';
import { View, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Icon, Fab, Container, Button, Spinner } from 'native-base';
import { DrawerActions } from 'react-navigation';
// packages
import VerticalCardComponent from '../../../common/components/vertical-card/vertical-card-component';
import CalenderComponent from '../../../common/components/calender/calender';
import FitbowlLogoComponent from '../../../common/components/fitbowl-logo/fitbowl-logo-component';
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderOperations } from "../duck";
// stylesheet
import Styles from './style.js';
const styles = Styles;





class CalenderCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date().toISOString().split('T')[0]
        };
    }


    currentDatePicker = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate());
        const day = currentDate.getDate()
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        const formattedDate = `${year}/${month}/${day}`;
        return formattedDate;
    }


    onDayPress = async (day) => {
        this.setState({
            selectedDate: day.dateString
        });
        await this.props.actions.setOrderDate(day.dateString);
    }





    render() {
        const myOrdersData = [...this.props.myOrders.data];
        let { selectedDate } = this.state;
        // console.log('myOrdersData', myOrdersData);

        const myMarkedDatesOnly = myOrdersData.map(order => order.date.substring(0, 10))

        const myMarkedDates = myMarkedDatesOnly.map(date => {
            let obj = {};
            obj[date] = { marked: true, selected: date === selectedDate }
            return obj
        })

        const myMarkedDatesObject = myMarkedDates.reduce(function (result, item) {
            var key = Object.keys(item)[0]; //first property: a, b, c
            result[key] = item[key];
            return result;
        }, {});

        if (selectedDate) {
            myMarkedDatesObject[selectedDate] = { ...myMarkedDatesObject[selectedDate], selected: true }
        }


        // console.log("myMarkedDatesObject", myMarkedDatesObject)

        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Icon name="align-left" type="Feather" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>
                    }
                    headerBody={<FitbowlLogoComponent />}
                    headerRight={
                        <View style={styles.headerRightView}>
                            <Icon name="grid" type="Feather" style={styles.headerGridIconStyle}
                                onPress={() => this.props.navigation.navigate('CardsList')} />
                            <Icon name="message-circle" type="Feather"
                                style={styles.headerCommentsIconStyle}
                                onPress={() => this.props.navigation.navigate('ChatScreen')} />
                        </View>}
                />


                <ScrollView >
                    <CalenderComponent
                        onDayPress={this.onDayPress}
                        markedDates={myMarkedDatesObject}
                    // markedDates={{ [this.state.selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' } }}
                    />


                    {this.props.isFetching && myOrdersData.length === 0 ? <Spinner /> :
                        myOrdersData.map((order, index) => {
                            // console.log("order.date.substring(0, 10), this.state.selectedDate", order.date.substring(0, 10), this.state.selectedDate)
                            // console.log("order.date.substring(0, 10) == this.state.selectedDate", order.date.substring(0, 10) == this.state.selectedDate);
                            if (order.date.substring(0, 10) == this.state.selectedDate) {
                                return (
                                    <View style={styles.cardsViewContainer} key={index.toString()}>
                                        <FlatList
                                            keyExtractor={(item, index) => index.toString()}
                                            showsVerticalScrollIndicator={false}
                                            data={order.orders}
                                            renderItem={({ item }) => {
                                                // console.log(order.user._id, item.created_by);
                                                let orderCreater = "";
                                                if (order.user._id === item.created_by) { orderCreater = "You" }
                                                else if (order.user._id === undefined) { orderCreater = "" }
                                                else { orderCreater = item.trainer.name }
                                                // console.log("orderCreater", orderCreater)
                                                return (
                                                    <VerticalCardComponent
                                                        item=""
                                                        style={styles}
                                                        name={item.product.name}
                                                        description={item.text}
                                                        image={{ uri: item.product.image }}
                                                        favouriteIcon={false}
                                                        footer={true}
                                                        addedByText={true}
                                                        footerText={`Added by ${orderCreater}`}
                                                        onPress={() => { return }}
                                                    />)
                                            }}
                                        />
                                    </View>)
                            }
                        })
                    }

                </ScrollView>

                <Fab
                    active={true}
                    direction="up"
                    style={{ backgroundColor: '#fff' }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate("Menu",
                        { addMealIcon: true, _date: this.state.selectedDate })
                    }
                >
                    <Icon name="ios-add-circle" type="Ionicons" style={styles.addMealIcon} />
                </Fab>
            </Container >

        );
    }

}




const mapStateToProps = (state) => {
    return {
        isFetching: state.order.isFetching,
        myOrders: state.order.myOrders,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getMyOrders: orderOperations.getMyOrders,
            setOrderDate: orderOperations.setOrderDate,
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CalenderCardContainer);


