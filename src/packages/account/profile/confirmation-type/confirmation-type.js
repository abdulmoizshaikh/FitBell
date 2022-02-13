import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { Text, Container, Left, Right, View, Button, Icon, Title } from "native-base";

import Styles from './style';
const styles = Styles;

//packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountOperations } from '../../duck';




class ConfirmationType extends Component {

    onSubmitHandler = async (props) => {
        await this.props.actions.setConfirmationType(props.confirmationType);
        const token = await AsyncStorage.getItem("access_token");
        const user = await this.props.user;
        await this.props.actions.updateProfile({ user, token })
    }




    render() {
        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        (<Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={commonStyles.headerIconColor} />
                        </Button>)}
                    headerBody={(<Title style={commonStyles.headerIconColor}>Daily Confirmation</Title>)}
                />

                <View style={styles.contentStyle}>
                    <Text style={styles.smallTextStyle}>ALLOW DAILY CONFIRMATION POPUP</Text>
                    <View style={styles.btnContainerStyle}>
                        <Button bordered dark onPress={() => this.onSubmitHandler({ confirmationType: "daily" })}>
                            <Left><Text style={styles.btnItemStyle}>Daily</Text></Left>
                            {this.props.user.confirmation_type === "daily" && <Right><Icon type="MaterialIcons" name="done" style={styles.btnItemStyle} /></Right>}
                        </Button>
                        <Button bordered dark onPress={() => this.onSubmitHandler({ confirmationType: "automation" })}>
                            <Left><Text style={styles.btnItemStyle}>Automation</Text></Left>
                            {this.props.user.confirmation_type === "automation" && <Right><Icon type="MaterialIcons" name="done" style={styles.btnItemStyle} /></Right>}
                        </Button>
                    </View>
                    <Text style={styles.smallTextStyle}>App explanation:"When you choose Automation that mean you agree with the meal the trainer and you added"</Text>
                </View>


            </Container >
        );
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.account.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            updateProfile: accountOperations.updateProfile,
            setConfirmationType: accountOperations.setConfirmationType

        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationType);



