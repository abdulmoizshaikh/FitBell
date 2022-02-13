import React from "react";
import { FlatList, AsyncStorage } from 'react-native';
import { Text, Container, H2, Icon, Button, Spinner } from 'native-base';

import Styles from './style.js';
const styles = Styles;

// packages
import BlockBtnComponent from "../../../../../common/components/block-button/block-button-comp";
import commonStyles from '../../../../../common/components/commonStyles';
import HeaderComponent from "../../../../../common/components/header/header";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from "../../../duck";





class ChildFitnessGoalsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myFitnessGoal: ""
        }
    }



    onSelectFitnessGoals = async (item) => {
        await this.props.actions.updateMyFitnessGoal(item._id);
        this.setState({
            myFitnessGoal: this.props.myFitnessGoal
        })
    }


    // fitness_goal
    onSubmitHandler = async () => {
        const token = await AsyncStorage.getItem("access_token");
        await this.props.actions.updateFitnessGoal({ fitness_goal: this.props.myFitnessGoal }, token);
        this.props.navigation.navigate('Menu');
    }


    render() {
        const { params } = this.props.navigation.state;
        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        (<Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" style={commonStyles.headerIconColor} />
                        </Button>)}
                    headerRight={
                        <Button style={[commonStyles.transparentBackgroundColor, commonStyles.elevation0]} onPress={this.onSubmitHandler}>
                            {(this.props.isFetching && this.props.myFitnessGoal !== "") ?
                                <Spinner /> : <Text style={commonStyles.headerIconColor}>Next</Text>}
                        </Button>}
                />



                <H2 style={styles.H2Style}>{`Tell us \nabout your self\n`}</H2>
                <Text style={styles.titleStyle}>What are your {params.name} {'\n'} goals?{'\n'}</Text>
                <FlatList
                    style={styles.rootContainer}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    data={[...params.children]}
                    renderItem={item => {
                        return (
                            <BlockBtnComponent
                                item={item.item}
                                text={item.item.name}
                                bordered={this.state.myFitnessGoal !== item.item._id}
                                dark={this.state.myFitnessGoal !== item.item._id}
                                danger={this.state.myFitnessGoal === item.item._id}
                                onPress={this.onSelectFitnessGoals}

                            />
                        )
                    }}
                />
            </Container>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        myFitnessGoal: state.account.myFitnessGoal
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getFitnessGoals: accountOperations.getFitnessGoals,
            updateMyFitnessGoal: accountOperations.updateMyFitnessGoal,
            updateFitnessGoal: accountOperations.updateFitnessGoal
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChildFitnessGoalsContainer);


