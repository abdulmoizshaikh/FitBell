import React from "react";
import { FlatList, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import { Container, View, Text, Icon, Button, Title, Spinner, Toast } from 'native-base';

// Icons
import PlusIcon from 'react-native-vector-icons/FontAwesome';

// Packages
import DeliveryWithoutAddressComp from './delivery-without-address/delivery-without-address';
import AddressCardComponent from "../../../../common/components/address-card/address-card-component";

import HeaderComponent from "../../../../common/components/header/header";
import commonStyles from '../../../../common/components/commonStyles';

import Styles from './style';
const styles = Styles;

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from "../../duck";
import { orderOperations } from "../../../orders/duck";




class DeliveryAddressContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getDeliveryAddressHandler()
    }


    getDeliveryAddressHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        await this.props.actions.getDeliveryAddress(token);
    }


    toggleDeliveryAddress = (deliveryAddress) => {
        // console.log("deliveryAddress", deliveryAddress);
        this.props.actions.toggleDeliveryAddress(deliveryAddress)
    }

    editDeliveryAddress = (deliveryAddress) => {
        // console.log("editDeliveryAddress", deliveryAddress);

    }

    onSelectDeliveryAddress = async () => {
        let deliveryAddressData = [...this.props.deliveryAddress.data];
        deliveryAddressData = deliveryAddressData.find(address => {
            return address.is_active
        })
        if (deliveryAddressData) {
            await this.props.actions.setLocationDetails(deliveryAddressData)
            this.props.navigation.navigate("ConfirmOrder")
        } else {
            // console.log('deliveryAddressData', deliveryAddressData)
            Toast.show({
                text: "Your must select atleast one location ",
                buttonText: "Okay",
                duration: 3000
            })
        }
    }


    render() {
        const deliveryAddressData = [...this.props.deliveryAddress.data];
        // console.log("deliveryAddressData -----------", this.props.deliveryAddress.data);

        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>
                    }
                    headerBody={(<Title style={commonStyles.headerIconColor}>Delivery Address</Title>)}
                    headerRight={
                        <TouchableWithoutFeedback
                            onPress={() => { this.props.navigation.navigate("AddNewDeliveryAddress") }}>
                            <Text primary style={[commonStyles.padding10]}>Add</Text>
                        </TouchableWithoutFeedback>
                    }
                />



                {this.props.isFetching ? <Spinner /> :
                    (deliveryAddressData.length === 0 ?
                        <DeliveryWithoutAddressComp navigation={this.props.navigation} />
                        :
                        <View style={styles.cardsViewContainer}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                data={deliveryAddressData}
                                renderItem={({ item }) => <AddressCardComponent
                                    style={styles}
                                    item={item}
                                    // name={item.key}
                                    address={item.address}
                                    contact={item.contact}
                                    hrShow={true}
                                    onPress={this.toggleDeliveryAddress}
                                    onEdit={this.editDeliveryAddress}
                                    isActive={item.is_active}
                                />}
                            />
                            <Button onPress={() => this.onSelectDeliveryAddress(deliveryAddressData)} full style={{ elevation: 0, borderRadius: 5 }}><Text>Proceed</Text></Button>
                        </View>

                    )}

            </Container >
        )
    }
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        deliveryAddress: state.account.deliveryAddress,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getDeliveryAddress: accountOperations.getDeliveryAddress,
            setLocationDetails: orderOperations.setLocationDetails,
            toggleDeliveryAddress: accountOperations.toggleDeliveryAddress
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressContainer);

