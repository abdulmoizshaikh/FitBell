import React, { Component } from 'react';
import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { LoginManager, AccessToken } from "react-native-fbsdk";

import { AsyncStorage } from 'react-native';
import { StackActions, NavigationActions } from "react-navigation";
import { View, Text, Button, Icon } from 'native-base';

import { authOperations } from "../../../packages/auth/duck/index";

import styles from "./styles";
// import CommonStyles from "../../../common/styles/CommonStyles";


class FacebookButton extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    loginFacebook = async () => {

        const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw new Error('User cancelled request'); // Handle this however fits the flow of your app
        }

        // console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

        // get the access token
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }

        // console.log("data", data.accessToken)
        const fbResul = await this.props.actions.loginFacebook(data.accessToken)
        if (!fbResul) {
            throw new Error('Something went wrong obtaining the users access token'); // Handle this however fits the flow of your app
        }
        this.getProfileHandler();

    }
    getProfileHandler = async () => {
        // console.log("this.props", this.props)
        // console.log("this.props.navigation", this.props.navigation)
        const token = await AsyncStorage.getItem("access_token")
        // console.log("token", token)
        if (token) {

            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: "CardsList" })
                ]
            }))

        }
    }
    render() {
        return (
            <View style={styles.fbButonWrapper}>
                <Button iconLeft onPress={() => this.loginFacebook()} iconLeft block bordered style={{ elevation: 0, borderRadius: 5, height: 55, borderColor: this.props.borderColor }}>
                    <Icon type={this.props.iconType} style={{ color: this.props.iconColor }} name={this.props.iconName} />
                    <Text uppercase={false} style={{ fontSize: 17, fontWeight: '600', color: this.props.textColor }} >Facebook</Text>
                </Button>
            </View>
        );
    }
}

// function mapStateToProps(state) {
//     //pass the providers
//     return {
//         auth: state.auth
//     }
// }

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loginFacebook: authOperations.loginFacebook
        }, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(FacebookButton);
