import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountOperations } from '../../packages/account/duck';
import { snackbarOperations } from '../../packages/snackbar/duck';

// this code is not in running form 

class getInitialRoute extends Component {


    getProfileHandler = async () => {
        // checking access_token in AsyncStorage if true then call /me API
        const token = await AsyncStorage.getItem("access_token")
        // console.log("token", token)
        if (token) {
            await this.props.actions.getProfile(token)
            const restrictionsInUser = [...this.props.restrictionsInUser], allergiesInUser = [...this.props.allergiesInUser], fitnessGoalInUser = { ...this.props.fitnessGoalInUser };
            // console.log(`restrictionsInUser =${restrictionsInUser} \n allergiesInUser =${allergiesInUser} \n fitnessGoalInUser=${fitnessGoalInUser}`)
            if (restrictionsInUser.length === 0 || allergiesInUser.length === 0) {
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: "AllergiesRestriction" })
                    ]
                }))
            } else if (Object.keys(fitnessGoalInUser).length === 0 || fitnessGoalInUser === "") {
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: "FitnessGoals" })
                    ]
                }))
            } else {
                this.props.navigation.dispatch(StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({ routeName: "Menu" })
                    ]
                }))
            }
        }
    }


    render() {
        return;

    }
}




const mapStateToProps = (state) => {
    return {
        restrictionsInUser: state.account.user.restrictions,
        allergiesInUser: state.account.user.allergies,
        fitnessGoalInUser: state.account.user.fitness_goal
    }
}




function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getProfile: accountOperations.getProfile,
            showSnackbar: snackbarOperations.showSnackbar,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(getInitialRoute);

