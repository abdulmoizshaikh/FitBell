import React from "react";
import { ScrollView, AsyncStorage } from 'react-native';
import { Container, Button } from 'native-base';
// import ExclimationIcon from 'react-native-vector-icons/FontAwesome5';
import CloseIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './style.js';
const styles = Styles;

//packeges
import OtherAllergiesComponent from "./other-allergies-restriction-component/other-allergies";
import OtherRestricitonsComponent from "./other-allergies-restriction-component/other-restrictions";

import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { accountOperations } from "../../duck";
import * as types from "../../duck/types";


class OtherEllergiesRestrictionsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.getAllergiesHandler();
        this.getRestrictionsHandler();
    }


    getAllergiesHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        // console.log("access token get ingredients  ", token);
        await this.props.actions.getAllergies(token)
    }


    getRestrictionsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        // console.log("access token  getRestrictionsHandler  ", token);
        await this.props.actions.getRestrictions(token)
    }


    render() {
        const { isAllergic } = this.props.navigation.state.params;
        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.goBack()}>
                            <CloseIcon name="close-circle" size={30} style={[commonStyles.headerIconColor, commonStyles.padding10]} ></CloseIcon>
                        </Button>}
                />


                <ScrollView contentContainerStyle={styles.rootContainer}>
                    {/* <Icon name="exclamation-circle" size={30} color="#900" style={styles.exclimationIcon} ></Icon> */}
                    {
                        isAllergic ?
                            <OtherAllergiesComponent
                                navigation={this.props.navigation} /> :
                            <OtherRestricitonsComponent
                                navigation={this.props.navigation} />
                    }
                </ScrollView>
            </Container >
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        updateMyOtherAllergies: (data) => { dispatch({ type: types.UPDATE_MY_OTHER_ALLERGIES, payload: data }) },
        updateMyOtherRestrictions: (data) => { dispatch({ type: types.UPDATE_MY_OTHER_RESTRICTIONS, payload: data }) },
        actions: bindActionCreators({
            getAllergies: accountOperations.getAllergies,
            getRestrictions: accountOperations.getRestrictions,
        }, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(OtherEllergiesRestrictionsContainer);






