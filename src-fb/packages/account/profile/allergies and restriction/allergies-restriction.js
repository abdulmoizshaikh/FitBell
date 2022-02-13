import React from "react";
import { ScrollView, AsyncStorage, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Text, Container, H2, View, Spinner, Icon, Button } from 'native-base';
import Styles from './style.js';
const styles = Styles;

// packages
import ButtonComponent from "../../../../common/components/button/button-component";
import HeaderComponent from "../../../../common/components/header/header";
import commonStyles from '../../../../common/components/commonStyles';

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from "../../duck";




class AllergiesRestrictionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allergies: [],
            restrictions: [],
        }
        this.getAllergiesHandler();
        this.getRestrictionsHandler();
        this.willFocusSubscription
    }



    willFocusSubscription = this.props.navigation.addListener(
        'willFocus',
        payload => {
            this.filterAllergiesAndMyOtherAllergies();
            this.filterRestrictionsAndMyOtherRestrictions();
        }
    );


    async componentWillMount() {
        const token = await AsyncStorage.getItem("access_token");
        if (token) {
            await this.props.actions.getProfile(token);
            if (this.props.restrictionsInUser || this.props.allergiesInUser) {
                const restrictionsInUser = this.props.restrictionsInUser.map(ele => ele._id);
                const allergiesInUser = this.props.allergiesInUser.map(ele => ele._id);
                this.setState({
                    allergies: allergiesInUser,
                    restrictions: restrictionsInUser
                })
            }
        }
    }

    getAllergiesHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        await this.props.actions.getAllergies(token)
    }


    getRestrictionsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token")
        await this.props.actions.getRestrictions(token)
    }


    onSelectAllergies = (item) => {
        const allergies = [...this.state.allergies];
        if (allergies.includes(item._id)) {
            allergies.filter(item => item !== item._id)
            const ind = allergies.indexOf(item._id);
            allergies.splice(ind, 1);
        } else {
            allergies.push(item._id);
        }
        this.setState({
            allergies: allergies
        })
    }


    onSelectRestrictions = (item) => {
        const restrictions = [...this.state.restrictions];
        if (restrictions.includes(item._id)) {
            restrictions.filter(item => item !== item._id)
            const ind = restrictions.indexOf(item._id);
            restrictions.splice(ind, 1);
        } else {
            restrictions.push(item._id);
        }
        this.setState({
            restrictions: restrictions
        })
    }

    filterAllergiesAndMyOtherAllergies = () => {
        const myOtherAllergiesObj = this.props.myOtherAllergies;
        //here converting myOtherAllergiesObj with name and id into myOtherAllergies array of id's
        const myOtherAllergies = myOtherAllergiesObj.map(ele => ele._id);
        const allergies = [...this.state.allergies];
        let allAllergies = allergies.concat(myOtherAllergies)
        for (let index = 0; index < allAllergies.length; index++) {
            if (allergies.includes(myOtherAllergies[index])) {
            } else {
                allergies.push(myOtherAllergies[index]);
            }
        }
        var filteredAllergies = allergies.filter(el => el != null);
        this.setState({
            allergies: filteredAllergies
        })
    }

    filterRestrictionsAndMyOtherRestrictions = () => {
        const myOtherRestrictionsObj = this.props.myOtherRestrictions;
        //here converting myOtherRestrictionsObj with name and id into myOtherRestrictions array of id's
        const myOtherRestrictions = myOtherRestrictionsObj.map(ele => ele._id);
        const restrictions = [...this.state.restrictions];
        let allRestrictions = restrictions.concat(myOtherRestrictions)
        for (let index = 0; index < allRestrictions.length; index++) {
            if (restrictions.includes(myOtherRestrictions[index])) {
            } else {
                restrictions.push(myOtherRestrictions[index]);
            }
        }
        var filteredRestrictions = restrictions.filter(el => el != null);
        this.setState({
            restrictions: filteredRestrictions
        })
    }

    onSubmitNextBtnHandler = async () => {
        const allergies = [...this.state.allergies];
        const restrictions = [...this.state.restrictions];
        // const token = await AsyncStorage.getItem("access_token");
        // await this.props.actions.updateMyAllergies({ allergies: allergies }, token);
        // await this.props.actions.updateMyRestrictions({ restrictions: restrictions }, token);
        this.props.navigation.navigate('FitnessGoals');
    }



    componentWillUnmount = () => {
        if (this.willFocusSubscription) {
            this.willFocusSubscription.remove()
        }
    }


    render() {
        const allergies = [...this.props.allergies.ingredients, ...[{ name: 'Other', type: 'other' }]];
        const restrictions = [...this.props.restrictions.data, ...[{ name: 'Other', type: 'other' }]];

        return (
            <Container>

                <HeaderComponent
                    headerLeft={
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.goBack()} >
                            <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                        </TouchableWithoutFeedback>
                    }

                    headerRight={
                        <TouchableWithoutFeedback
                            onPress={this.onSubmitNextBtnHandler}>
                            {
                                // (this.props.isFetching && this.props.allergies.ingredients.length !== 0) ?
                                //     <Spinner /> :
                                <Text primary style={[commonStyles.padding10]}>Next</Text>
                            }
                        </TouchableWithoutFeedback>
                    }
                />



                <View style={{ flex: 0.2, justifyContent: 'center' }}><H2 style={styles.H2Style}>{`Tell us \nabout your self\n`}</H2></View>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.rootContainer}>
                    <View style={styles.sectionViewContent}>

                        <Text style={styles.titleStyle}>What are you allergic to? ?</Text>
                        {
                            (this.props.isFetching && allergies.length <= 1) ? <Spinner /> :
                                <FlatList
                                    columnWrapperStyle={styles.colWrapStyle}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={3}
                                    horizontal={false}
                                    data={[...allergies]}
                                    renderItem={({ item, index }) => {

                                        if (item.type == "other") {
                                            return (
                                                <ButtonComponent
                                                    bordered={false}
                                                    light
                                                    // key={item._id}
                                                    style={[styles.btnCompStyle]}
                                                    itemName="Other"
                                                    onPress={() => {
                                                        this.props.navigation.navigate("OtherEllergiesRestrictions",
                                                            { isAllergic: true })
                                                    }}
                                                />
                                            )
                                        } else {
                                            return (
                                                <ButtonComponent
                                                    itemName={item.name}
                                                    key={item._id}
                                                    bordered={this.state.allergies.indexOf(item._id) >= 0}
                                                    light={this.state.allergies.indexOf(item._id) < 0}

                                                    style={styles.btnCompStyle}
                                                    onPress={() => this.onSelectAllergies(item)}
                                                />
                                            )
                                        }
                                    }}
                                />
                        }
                    </View>

                    <View style={styles.sectionViewContent}>
                        <Text style={styles.titleStyle}>Pick your dietary Restrictions </Text>
                        {
                            (this.props.isFetching && restrictions.length <= 2) ? <Spinner /> :
                                <FlatList
                                    columnWrapperStyle={styles.colWrapStyle}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    numColumns={3}
                                    horizontal={false}
                                    data={[...restrictions]}
                                    renderItem={({ item, index }) => {

                                        if (item.type == "other") {
                                            return (
                                                <ButtonComponent
                                                    itemName="Other"
                                                    bordered={false}
                                                    light={true}
                                                    // key={item._id}
                                                    style={styles.btnCompStyle}
                                                    onPress={() => {
                                                        this.props.navigation.navigate("OtherEllergiesRestrictions",
                                                            { isAllergic: false })
                                                    }}
                                                />
                                            )
                                        } else {
                                            return (
                                                <ButtonComponent
                                                    itemName={item.name}
                                                    // key={item._id}
                                                    style={styles.btnCompStyle}
                                                    onPress={() => this.onSelectRestrictions(item)}
                                                    // bordered={this.state.restrictions.indexOf(item._id) <= -1}
                                                    // dark={this.state.restrictions.indexOf(item._id) <= -1}
                                                    // danger={this.state.restrictions.indexOf(item._id) > -1}

                                                    bordered={this.state.restrictions.indexOf(item._id) >= 0}
                                                    light={this.state.restrictions.indexOf(item._id) < 0}
                                                />
                                            )
                                        }
                                    }}
                                />
                        }
                    </View>

                </ScrollView>
            </Container >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        allergies: state.account.allergies,
        myOtherAllergies: state.account.myOtherAllergies,

        restrictions: state.account.restrictions,
        myOtherRestrictions: state.account.myOtherRestrictions,

        restrictionsInUser: state.account.user.restrictions,
        allergiesInUser: state.account.user.allergies,



    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            // ALLERGIES
            getAllergies: accountOperations.getAllergies,
            updateMyAllergies: accountOperations.updateMyAllergies,
            // RESTRICTIONS
            getRestrictions: accountOperations.getRestrictions,
            updateMyRestrictions: accountOperations.updateMyRestrictions,
            // 
            getMyAllergies: accountOperations.getMyAllergies,
            getMyRestrictions: accountOperations.getMyRestrictions,
            // get Profile
            getProfile: accountOperations.getProfile
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllergiesRestrictionContainer);


