import React from "react";
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Text, Container, Input, Button, H2, Icon, Spinner, View } from 'native-base';
import { verificationFromValidators } from './validator';
import { isValid } from '../../../common/utils/form-validator';
import Styles from './style.js';
const styles = Styles;


// packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";


// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authOperations } from "../duck";
import { verificationCode } from "../duck/operations";




class VerificationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                inputField1: '',
                inputField2: '',
                inputField3: '',
                inputField4: '',
            },
            errors: {
                inputField1: '',
                inputField2: '',
                inputField3: '',
                inputField4: ''
            },
        }
        this.inputs = {};
    }


    onChangeHandler = (name, value, nextField) => {
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        }, () => {
            this.handleFormValidation(name)
        });
        if (name !== "inputField4" && value !== "") { this.focusNextField(nextField) }
    }


    handleFormValidation = (name) => {
        this.setState({
            errors: verificationFromValidators(name, this.state.data)
        })
    }

    focusNextField = (id) => {
        this.inputs[id]._root.focus();
    }


    onSubmitHandler = async () => {
        // let verificationCode = this.state.data.inputField1 + this.state.data.inputField2 + this.state.data.inputField3 + this.state.data.inputField4;
        const code = { token: verificationCode }
        // console.log("verificaton code", code.token);
        await this.props.actions.verificationCode(code.token)
        await this.props.actions.validateVerificationCode(code);
        this.props.navigation.navigate('ChangePass')
    }



    render() {
        const { params } = this.props.navigation.state;
        let verificationCode = this.state.data.inputField1 + this.state.data.inputField2 + this.state.data.inputField3 + this.state.data.inputField4;
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

                <ScrollView>
                    <View style={styles.content}>

                        {/* content wrapper */}
                        <View style={styles.contentWrapper}>
                            <Text style={styles.headingText}>Verification</Text>
                            <Text style={styles.headingDescription}>we have a verification code to {params.email}, please check</Text>

                            {/* input box wrapper */}
                            <View style={styles.inputBoxWrapper}>
                                <Input
                                    keyboardType="numeric"
                                    ref={inputRef => this.inputs['inputField1'] = inputRef}
                                    style={styles.inputField}
                                    maxLength={1}
                                    value={this.state.data.inputField1}
                                    onChangeText={(text) => this.onChangeHandler('inputField1', text, 'inputField2')}
                                />
                                <Input
                                    keyboardType='numeric'
                                    ref={inputRef => this.inputs['inputField2'] = inputRef}
                                    style={styles.inputField}
                                    maxLength={1}
                                    value={this.state.data.inputField2}
                                    onChangeText={(text) => this.onChangeHandler('inputField2', text, "inputField3")}
                                />
                                <Input
                                    keyboardType='numeric'
                                    ref={inputRef => this.inputs['inputField3'] = inputRef}
                                    style={styles.inputField}
                                    maxLength={1}
                                    value={this.state.data.inputField3}
                                    onChangeText={(text) => this.onChangeHandler('inputField3', text, "inputField4")}
                                />
                                <Input
                                    keyboardType='numeric'
                                    ref={inputRef => this.inputs['inputField4'] = inputRef}
                                    style={styles.lastInputField}
                                    maxLength={1}
                                    value={this.state.data.inputField4}
                                    onChangeText={(text) => this.onChangeHandler('inputField4', text)}
                                />
                            </View>

                            <Button primary block
                                disabled={!isValid(this.state.errors, this.state.data)}
                                onPress={this.onSubmitHandler}
                                style={styles.submitBtn}
                            >
                                {this.props.isFetching && verificationCode.length !== 0 ? <Spinner color="#fff" /> : <Text uppercase={false}>Send</Text>}
                            </Button>
                        </View>
                    </View>
                </ScrollView>

            </Container>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        isFetching: state.auth.isFetching,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            validateVerificationCode: authOperations.validateVerificationCode,
            verificationCode: authOperations.verificationCode
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationContainer);
