import React from "react";
import { Text, Container, Item, Input, Button, H2, Icon } from 'native-base';
import { ScrollView, View } from "react-native";
import { isValid } from "../../../common/utils/form-validator";
import Styles from './style.js';
import { refCodeFromValidators } from "./validator";

// packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";


const styles = Styles;

class ReferralCodeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refCode: '',
            errors: {
                refCode: false,
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
            errors: refCodeFromValidators(name, this.state)
        })
    }


    render() {

        return (
            <Container >
                <HeaderComponent
                    headerLeft={
                        (<Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={commonStyles.headerIconColor} />
                        </Button>)}
                    headerRight={
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]}>
                            <Text style={commonStyles.headerIconColor}>Skip</Text>
                        </Button>}
                />


                <ScrollView showsVerticalScrollIndicator={false}
                >
                    <View style={styles.Content}>
                        <H2>{`Enter \nyour referral code\n`}</H2>
                        <View style={styles.TextArea}>
                            <Item >
                                <Input name="refCode"
                                    placeholder='Referral code here...'
                                    onChangeText={(text) => this.onChangeHandler(text, "refCode")} />
                            </Item>
                        </View>
                        <Button success rounded block
                            disabled={!isValid(this.state.errors, this.state)}
                            onPress={() => { this.props.navigation.navigate("AllergiesRestriction") }}
                        >
                            <Text>Claim</Text>
                        </Button>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}



export default ReferralCodeContainer;