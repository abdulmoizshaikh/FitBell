import React from "react";
import { ScrollView, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Text, Container, View, Item, Input, Button, H2, Spinner, Icon, Label, H1, Form } from 'native-base'
import { StackActions, NavigationActions } from "react-navigation";
import { isValid } from '../../../common/utils/form-validator';
import { SignupFormValidatorsOnBlur, SignupFormValidatorsOnChange } from "./validator.js";
import { authOperations } from '../duck';



import styles from '../styles/inputFormStyle.js';

// packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";
import FacebookButton from "../../../common/components/FacebookButon";

// redux packages
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


class SignupContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signupData: {
                username: '',
                email: '',
                password: '',
            },
            errors: {
                username: false,
                email: false,
                password: false
            },
            errorsMsgs: {
                username: '',
                email: '',
                password: ''
            },
            showPassword: true,
            usernameFieldStyle: {},
            emailFieldStyle: {},
            passwordFieldStyle: {},
        }
        this.inputs = {};
    }

    onChangeHandler = (value, name) => {
        this.setState({
            signupData: {
                ...this.state.signupData,
                [name]: value
            }
        }, () => {
            this.handleFormValidationOnChange(name)
        });
    }


    handleFormValidationOnChange = (name) => {
        let data = SignupFormValidatorsOnChange(name, this.state);
        this.setState({
            errors: data.errors,
            errorsMsgs: {
                ...this.state.errorsMsgs,
                [name]: ""
            }
        })
    }





    onBlurHandler = (props) => {
        let data = { ...this.state };
        this.handleFormValidationOnBlur(props.name, data);
        this.setState({
            [props.fieldStyle]: {},
        })
    }


    handleFormValidationOnBlur = (name, state) => {
        let data = SignupFormValidatorsOnBlur(name, state);
        this.setState({
            errorsMsgs: data.errorsMsgs
        })
    }




    onFocusHandler = (props) => {
        this.setState({
            [props.fieldStyle]: styles.fieldStyleOnFocus
        })
    }


    focusNextField = (id) => {
        this.inputs[id]._root.focus();
    }


    onSubmitHandler = async () => {
        const user = {
            name: this.state.signupData.username,
            email: this.state.signupData.email,
            password: this.state.signupData.password
        }

        await this.props.actions.signUp(user)
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: "AllergiesRestriction" })
            ]
        }))
    }


    toggleSwitch = () => {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    }





    render() {

        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.goBack()}                            >
                            <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>
                    }
                />


                <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewContent}>

                    {/* title Heading Wrapper */}
                    <View style={styles.titleWrapper}>
                        <Text style={styles.headingText}>{`Welcome,  \nSignup to get started.`}</Text>
                    </View>

                    <Form style={styles.formWrapper}>
                        <Item stackedLabel style={styles.item}>
                            <Label style={styles.label}>Username</Label>
                            <Input
                                placeholder='Enter your username'
                                onChangeText={(text) => this.onChangeHandler(text, "username")}
                                ref={inputRef => this.inputs['username'] = inputRef}
                                onSubmitEditing={() => this.focusNextField("email")}
                                autoFocus
                                style={[this.state.usernameFieldStyle, styles.inputTag, {paddingLeft: 0}]}
                                onFocus={this.onFocusHandler.bind(this, { fieldStyle: "usernameFieldStyle" })}
                                onBlur={this.onBlurHandler.bind(this, { name: 'username', type: "username", fieldStyle: "usernameFieldStyle" })}
                            />
                        </Item>
                        {
                            this.state.errorsMsgs.username !== "" &&
                            <Text style={styles.errorText}>{this.state.errorsMsgs.username}</Text>
                        }

                        <Item stackedLabel style={styles.item}>
                            <Label style={styles.label}>Email</Label>
                            <Input
                                placeholder='Enter your email address'
                                autoCapitalize="none"
                                onChangeText={(text) => this.onChangeHandler(text, "email")}
                                ref={inputRef => this.inputs['email'] = inputRef}
                                onSubmitEditing={() => this.focusNextField("password")}
                                // onfocus
                                style={[this.state.emailFieldStyle, styles.inputTag,{ paddingLeft: 0}]}
                                onFocus={this.onFocusHandler.bind(this, { fieldStyle: "emailFieldStyle" })}
                                onBlur={this.onBlurHandler.bind(this, { name: 'email', type: "email", fieldStyle: "emailFieldStyle" })}
                            />
                        </Item>
                        {
                            this.state.errorsMsgs.email !== "" &&
                            <Text style={styles.errorText}>{this.state.errorsMsgs.email}</Text>
                        }



                        <Item stackedLabel style={styles.item}>
                            <Label style={styles.label}>Password</Label>
                            <Input
                                placeholder='Enter your password'
                                secureTextEntry={this.state.showPassword}
                                onChangeText={(text) => this.onChangeHandler(text, "password")}
                                ref={inputRef => this.inputs['password'] = inputRef}
                                // onfocus
                                style={[this.state.passwordFieldStyle, styles.inputTag, {paddingLeft: 0}]}
                                onFocus={this.onFocusHandler.bind(this, { fieldStyle: "passwordFieldStyle" })}
                                onBlur={this.onBlurHandler.bind(this, { name: 'password', type: "password", fieldStyle: "passwordFieldStyle" })}
                            />
                            {/* <Text style={styles.toggleText} onPress={this.toggleSwitch}>{(this.state.showPassword) ? ("Show") : ("Hide")}</Text> */}
                        </Item>
                        {
                            this.state.errorsMsgs.password !== "" &&
                            <Text style={styles.errorText}>{this.state.errorsMsgs.password}</Text>
                        }
                        <Button primary full
                            style={styles.authButton}
                            disabled={!isValid(this.state.errors, this.state.signupData)}
                            onPress={this.onSubmitHandler}
                        >
                            {this.props.isFetching ? <Spinner color="#fff" /> : <Text style={{fontSize: 17, fontWeight: '600' }} uppercase={false}>Sign Up</Text>}
                        </Button>
                    </Form>




                    {/*facebook button wrapper */}
                    <View style={styles.fbBtnAndTextWrapper}>
                        <View style={styles.hrlineView}>
                            <View style={styles.hairline} />
                            <Text style={styles.loginButtonBelowText1}>OR CONNECT WITH</Text>
                            <View style={styles.hairline} />
                        </View>
                        <View style={styles.fbBtnWrapper}>
                            <FacebookButton navigation={this.props.navigation} iconName="facebook-with-circle" iconColor="#4267b2" iconType="Entypo" textColor="#000" borderColor="#A2A2A2" />
                        </View>
                        {/* </View> */}





                        {/* footer Wrapper */}
                        <View style={styles.footerWrapper}>
                            <Text style={styles.footerText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}
                                style={styles.footerTouchableText}>
                                <Text style={styles.fontWeightBold}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}






const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            signUp: authOperations.signUp
        }, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)












