import React from "react";
import { View, ScrollView, AsyncStorage, TouchableWithoutFeedback } from 'react-native';
import { Text, Container, Item, Input, Button, Icon, Title, Form, Label } from 'native-base';
import { addNewAddressFromValidators } from './validator';
import { isValid } from '../../../../../common/utils/form-validator';

import Styles from './style.js';
const styles = Styles;

//packages
import commonStyles from '../../../../../common/components/commonStyles';
import HeaderComponent from "../../../../../common/components/header/header";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from "../../../duck";




class AddNewDeliveryAddressContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            number: null,
            errors: {
                name: false,
                address: false,
                number: false
            }
        }
        this.inputs = {};
    }


    onChangeHandler = (value, name) => {
        this.setState({
            [name]: value
        }, () => {
            this.handleFormValidation(name)
        });
    }

    handleFormValidation = (name) => {
        this.setState({
            errors: addNewAddressFromValidators(name, this.state)
        })
    }

    focusNextField = (id) => {
        this.inputs[id]._root.focus();
    }

    addDeliveryAddressHandler = async () => {
        const data = {
            name: this.state.name,
            address: this.state.address,
            contact: this.state.number
        }
        // console.log("data", data);
        const token = await AsyncStorage.getItem("access_token")
        let location = await this.props.actions.addDeliveryAddress(data, token)
        if (!location) {
            throw new Error('Something went wrong'); // Handle this however fits the flow of your app
        }
        
        // let result = await this.props.actions.setDefaultLocationToUser(locationDaa, token)
        if (!result) {
            throw new Error('Something went wrong in seting default user please try again'); // Handle this however fits the flow of your app
        }

        this.props.navigation.navigate("ConfirmOrder")

        // this.props.navigation.goBack();
    }

    render() {
        return (
            <Container >

                <HeaderComponent
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.goBack()}                            >
                            <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>
                    }
                    headerBody={(<Title style={commonStyles.headerIconColor}>Add new address</Title>)}
                />

                <ScrollView contentContainerStyle={styles.content}>
                    <View>
                        <Item stackedLabel>
                            <Label style={{ color: '#000' }}>Full Name</Label>
                            <Input placeholder="Enter your full name" onChangeText={(text) => { this.onChangeHandler(text, "name") }}
                                ref={inputRef => this.inputs['name'] = inputRef}
                                onSubmitEditing={() => this.focusNextField("address")}
                            />
                        </Item>
                        <Item stackedLabel style={{ marginTop: 20 }}>
                            <Label style={{ color: '#000' }}>Address</Label>
                            <Input placeholder="Enter your address" onChangeText={(text) => { this.onChangeHandler(text, "address") }}
                                ref={inputRef => this.inputs['address'] = inputRef}
                                onSubmitEditing={() => this.focusNextField("number")}
                            />
                        </Item>
                        <Item stackedLabel style={{ paddingTop: 20 }}>
                            <Label style={{ color: '#000' }}  >Phone Number</Label>
                            <Input keyboardType="numeric" placeholder="Add your phone number" onChangeText={(text) => { this.onChangeHandler(text, "number") }}
                                ref={inputRef => this.inputs['number'] = inputRef}
                            />
                        </Item>
                    </View>

                </ScrollView>

                <Button block
                    disabled={!isValid(this.state.errors, this.state)}
                    onPress={this.addDeliveryAddressHandler}>
                    <Text>Save</Text>
                </Button>
            </Container>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            addDeliveryAddress: accountOperations.addDeliveryAddress,
            setDefaultLocationToUser: accountOperations.setDefaultLocationToUser,
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeliveryAddressContainer);


