import React from "react";
import { ScrollView, TouchableWithoutFeedback } from "react-native";
import { Container, Text, Item, Input, Content, Button, H2, Icon, Spinner, H1, View, Label } from 'native-base';
import { forgotPassFromValidators } from "./validator";
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


class ForgotPassContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            errors: {
                email: false,
            }
        }
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
            errors: forgotPassFromValidators(name, this.state)
        })
    }

    onSubmitHandler = async () => {
        const data = {
            email: this.state.email
        }
        await this.props.actions.forgotPassword(data);
        this.props.navigation.navigate('Verification', { email: data.email })
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



                <View style={styles.content}>

                    {/* content wrapper */}
                    <View style={styles.contentWrapper}>
                        <Text style={styles.headingText}>Forgot password</Text>
                        <Item style={styles.item} stackedLabel>
                            <Label style={styles.label}>Email</Label>
                            <Input placeholder='Enter your email address'
                                autoCapitalize="none"
                                style={{paddingLeft: 0}}
                                onChangeText={(text) => this.onChangeHandler(text, "email")}
                            />
                        </Item>
                        <Button primary block
                            disabled={!isValid(this.state.errors, this.state)}
                            onPress={this.onSubmitHandler}
                            style={styles.submitBtn}
                        >
                            {this.props.isFetching ? <Spinner color="#fff" /> : <Text>Continue</Text>}
                        </Button>
                    </View>
                </View>


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
            forgotPassword: authOperations.forgotPassword
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassContainer);