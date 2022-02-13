import React from "react";
import { FlatList, ScrollView, AsyncStorage, TouchableWithoutFeedback, BackHandler, Alert } from 'react-native';
import { Container, View, Text, Button, Title, DatePicker, Icon, Right, Spinner } from 'native-base';
import { StackActions, NavigationActions } from "react-navigation";
import Styles from './style';
const styles = Styles;
// Icons
import EmptyCardIcon from 'react-native-vector-icons/FontAwesome';
import CheckIcon from 'react-native-vector-icons/FontAwesome';
// packages
import AddressCardComponent from '../../../common/components/address-card/address-card-component';
// import VerticalCardComponent from "../../../common/components/vertical-card/vertical-card-component";
import CardInfoComponent from '../../../common/components/card-info/card-info-component';
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";
// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { productOperations } from "../../products/duck";
import { orderOperations } from "../duck";
import { accountOperations } from "../../account/duck";

import StylesCard from '../../products/card-details/style';


class ConfirmOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            orderDetails: {
                product_id: this.props.orderDetails.orderedProductDetails._id,
                location_id: this.props.orderDetails.locationDetails._id,
                delivery_type: this.props.orderDetails.deliveryType,
                date: this.props.orderDetails.orderDate
            }
        }
    }


    componentDidMount = async () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        // await this.props.actions.setOrderDate(this.tomorrowDatePicker())
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        this.onChangeLocaion();
        return true;
    }

    tomorrowDatePicker = () => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        const day = currentDate.getDate()
        const month = currentDate.getMonth() + 1
        const year = currentDate.getFullYear()
        const formattedDate = `${year}/${month}/${day}`;
        return formattedDate;
    }


    onDateChangeHandler = async (date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const selectedDate = `${year}/${month}/${day}`;
        // console.log("selectedDate", selectedDate);
        // here we dispatch action with set orderdate in details in add order 
        await this.props.actions.setOrderDate(selectedDate);
        this.setState({
            orderDetails: {
                ...this.state.orderDetails,
                date: selectedDate
            }
        }, () => {
            // console.log("this.state.orderDetails", this.state.orderDetails)
        })
    }



    confirmOrder = async () => {
        this.setState({ isLoading: true })
        // this.props.navigation.navigate("Subscription")

        /**
         * First we will check if the user exist susbscription then directly purchase the meal
         * otherwise we will redirect to subscription and ask user to purchase meal
         */
        try {
            const isDefault = this.props.navigation.getParam('isDefault', 'NO-ID');
            const orderDetails = {
                product_id: this.props.orderDetails.orderedProductDetails._id,
                location_id: isDefault && this.props.user.default ? this.props.user.default.delivery_address : this.props.orderDetails.locationDetails._id,
                delivery_type: isDefault && this.props.user.default ? this.props.user.default.delivery_type : this.props.orderDetails.deliveryType,
                date: this.props.orderDetails.orderDate
            }
            // console.log("data00000000000000", orderDetails)
            const token = await AsyncStorage.getItem("access_token");
            let result = await this.props.actions.addOrder(orderDetails, token)

            console.log("result", result);
            if (result.success) {
                let locationDaa = {
                    delivery_type: result.data.delivery_type,
                    delivery_address: result.data.location_id
                }
                await this.props.actions.setDefaultLocationToUser(locationDaa, token)
                this.getProfileHandler(token);

            } else {
                this.setState({ isLoading: false })
                this.props.navigation.navigate("Subscription")
            }

        } catch (error) {
            this.setState({ isLoading: false })
            console.log("error-----------------", error);
            if (error.status && error.status === 417) {
                Alert.alert(
                    'Alert',
                    error.data.message,
                    [
                        { text: 'OK', onPress: () => this.props.navigation.navigate("Subscription") },
                    ],
                    { cancelable: false },
                )
            }
            // this.props.navigation.navigate("Subscription")

        }

    }

    onReqestConfirm = () => {
        Alert.alert(
            'Alert',
            'Confirm order',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.confirmOrder() },
            ],
            { cancelable: false },
        )
    }


    getProfileHandler = async (token) => {
        if (token) {
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: "CardsList" })
                ]
            }))
            this.setState({ isLoading: false })
            // const restrictionsInUser = [...this.props.restrictionsInUser], allergiesInUser = [...this.props.allergiesInUser], fitnessGoalInUser = { ...this.props.fitnessGoalInUser };
            // // console.log(restrictionsInUser, allergiesInUser, fitnessGoalInUser)
            // // console.log(`restrictionsInUser =${restrictionsInUser} \n allergiesInUser =${allergiesInUser} \n fitnessGoalInUser=${fitnessGoalInUser}`)
            // if (restrictionsInUser.length === 0 || allergiesInUser.length === 0) {
            //     this.props.navigation.dispatch(StackActions.reset({
            //         index: 0,
            //         actions: [
            //             NavigationActions.navigate({ routeName: "AllergiesRestriction" })
            //         ]
            //     }))
            // } else if (Object.keys(fitnessGoalInUser).length === 0 || fitnessGoalInUser === "") {
            //     this.props.navigation.dispatch(StackActions.reset({
            //         index: 0,
            //         actions: [
            //             NavigationActions.navigate({ routeName: "FitnessGoals" })
            //         ]
            //     }))
            // } else {
            //     this.props.navigation.dispatch(StackActions.reset({
            //         index: 0,
            //         actions: [
            //             NavigationActions.navigate({ routeName: "CardsList" })
            //         ]
            //     }))
            // }
        }
    }


    onChangeLocaion = async () => {
        const { state } = this.props.navigation;
        const params = state.params || {};
        if (params.isDefault) {
            await params.changeState();
            this.props.navigation.navigate('DeliveryType')
        } else {
            this.props.navigation.navigate('DeliveryType')

        }
    }



    render() {
        const orderDetails = { ...this.props.orderDetails }
        const orderedProductDetails = { ...orderDetails.orderedProductDetails }
        const locationDetails = { ...orderDetails.locationDetails };
        const orderDate = orderDetails.orderDate;
        const isDefault = this.props.navigation.getParam('isDefault', 'NO-ID');
        const { isLoading } = this.state;
        // console.log("orderDate", orderDate)

        return (
            isLoading ? <Spinner style={{flex: 1, alignItems: 'center'}} /> :
                <Container>

                    <HeaderComponent
                        headerLeft={
                            <TouchableWithoutFeedback
                                onPress={() => isDefault ? this.props.navigation.navigate("Menu") : this.props.navigation.goBack()} >
                                <Icon name="close-circle" type="MaterialCommunityIcons"
                                    style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                            </TouchableWithoutFeedback>
                        }
                        headerBody={(
                            // <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            // {/* <Title style={commonStyles.headerIconColor}>Tomorrow</Title> */}
                            <DatePicker
                                textStyle={{ fontSize: 16 }}
                                minimumDate={new Date()}
                                maximumDate={new Date('2019/11/30')}
                                locale={"en"}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                defaultDate={new Date(orderDate)}
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                onDateChange={(date) => this.onDateChangeHandler(date)}
                            />
                            // </View>
                        )}
                    />


                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 10 }}>

                        {/* <Text style={styles.creditText}>List of Meals</Text> */}
                        {(this.props.isFetching && Object.keys(orderedProductDetails).length <= 1) ? <Spinner /> :
                            <View style={StylesCard.IndividualSection}>
                                <CardInfoComponent
                                    style={StylesCard}
                                    name={orderedProductDetails.name}
                                    image={{ uri: orderedProductDetails.image }}
                                    calories={`${(4 * orderedProductDetails.carbs + 9 * orderedProductDetails.fat + 4 * orderedProductDetails.protein).toString().substring(0, 3)}  Cal`}
                                    price={`$${orderedProductDetails.price}`}

                                />
                            </View>
                        }
                        <View style={{ borderBottomWidth: 1, marginHorizontal: 10, borderBottomColor: 'rgba(196,202,204, 0.5)' }} />



                        <View style={styles.cardsViewContainer}>
                            <View style={{ flexDirection: 'row', paddingHorizontal: 5 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', flex: 0.7 }}>Selected Location</Text>
                                <Button onPress={() => this.onChangeLocaion()} transparent style={{ flex: 0.3, alignItems: 'flex-start', justifyContent: 'flex-end', }}>
                                    <Text info uppercase={false}>Change</Text>
                                </Button>
                            </View>
                            <AddressCardComponent
                                item=""
                                name={locationDetails.name}
                                address={locationDetails.address}
                                contact={locationDetails.contact}
                                isActive={true}
                                isPickup={this.props.navigation.getParam('isPickup')}
                                onPress={() => { null }}
                                onEdit={() => this.props.navigation.navigate('DeliveryAddress')}
                            />

                        </View>



                        {/* <Text style={styles.creditText}>Payment Method</Text>
                    <View style={styles.cardsViewContainer}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                            <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <EmptyCardIcon name="credit-card" size={25} color="#000" />
                                <Text>123**************</Text>
                            </View>
                            <Icon name="angle-right" type="FontAwesome" style={{ color: "#000" }} />
                        </View>
                    </View> */}



                    </ScrollView>
                    <Button block onPress={this.onReqestConfirm}>
                        <Text>Confirm Order</Text>
                    </Button>
                </Container >
        )
    }
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.order.isFetching,
        orderDetails: state.order.orderDetails,
        // getProfile
        restrictionsInUser: state.account.user.restrictions,
        allergiesInUser: state.account.user.allergies,
        fitnessGoalInUser: state.account.user.fitness_goal,
        // get deliverytype from order details
        deliveryType: state.order.orderDetails.deliveryType,
        user: state.account.user,

    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            addOrder: orderOperations.addOrder,
            setOrderDate: orderOperations.setOrderDate,
            setDefaultLocationToUser: accountOperations.setDefaultLocationToUser,
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOrder);

