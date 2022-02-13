import React from "react";
import { FlatList, AsyncStorage, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Text, Container, H2, Item, Input, Icon, Right, Spinner, Button, View } from 'native-base';

import Styles from './style.js';
const styles = Styles;

//packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";
import AnimatedView from "../../../../common/components/Animations/FadeInView"

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from "../../duck";



class FitnessContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetails: false
        }
        this.getFitnessGoalsHandler()
    }

    getFitnessGoalsHandler = async () => {
        const token = await AsyncStorage.getItem("access_token");
        await this.props.actions.getFitnessGoals(token);
    }
    onSelectGoals = (selectedGoal) => {
        this.props.actions.toggleGoal(selectedGoal)
    }
    signUpSubmit = () => {
        let active_goal = [...this.props.fitnessGoals.data]
        this.props.navigation.navigate('CongratzScreen');

    }
    handleClose = () => {
        this.setState({
            showDetails: false,
        });
    }
    render() {
        const { showDetails } = this.state
        const fitnessGoalsData = [...this.props.fitnessGoals.data];

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
                            onPress={() => this.signUpSubmit()} >
                            {
                                // (this.props.isFetching && fitnessGoalsData.length !== 0) ? <Spinner /> : 
                                <Text style={commonStyles.padding10} primary>Save</Text>
                            }
                        </TouchableWithoutFeedback>
                    }
                />

                <H2 style={styles.H2Style}>{`Tell us about \nyour goals\n`}</H2>

                {/* search View */}
                {/* <Item style={{marginLeft: 30, marginRight: 30, backgroundColor: 'rgb(244,246,246)', borderBottomWidth: 0, borderRadius: 10}}>
                    <Input placeholder='Categogries and Name' placeholderStyle={{ color: "rgb(196,202,204)" }} />
                    <Icon active name='search' />
                </Item> */}

                {
                    (this.props.isFetching && fitnessGoalsData.length === 0) ? <Spinner /> :

                        <ScrollView horizontal={true}
                            contentContainerStyle={[styles.rootContainer]}
                        >
                            {
                                fitnessGoalsData.map((parentItem) => {
                                    // console.log("parent", parentItem, parentItem.children)
                                    return (
                                        <FlatList
                                            keyExtractor={(item, index) => index.toString()}
                                            data={parentItem.children}
                                            showsVerticalScrollIndicator={false}
                                            renderItem={(item, index) => {
                                                // console.log("child item", item, item.item.name)
                                                return (
                                                    <View
                                                        // style={item.isAdded ? [ {styles.btnContainer} : {styles.btnContainer styles.activeBtnContainer}]}
                                                        style={item.item.isAdded ? [styles.btnContainer, styles.activeBtnContainer] : styles.btnContainer}
                                                        key={index}
                                                    >
                                                        <TouchableOpacity onPress={() => this.onSelectGoals(item.item)}>
                                                            <TouchableOpacity onPress={() => this.setState({
                                                                detailPopup: {
                                                                    childData: item.item,
                                                                    parentData: parentItem
                                                                },
                                                                showDetails: !showDetails
                                                            })}>
                                                                <Icon name="info"
                                                                    type="SimpleLineIcons"
                                                                    style={item.item.isAdded ? [styles.btnIconStyle, styles.btnSelectedText] : styles.btnIconStyle}
                                                                />
                                                            </TouchableOpacity>

                                                            <Text style={item.item.isAdded ? [styles.btnTitleText, styles.btnSelectedText] : styles.btnTitleText}>
                                                                {item.item.name}
                                                            </Text>
                                                            <Text
                                                                style={item.item.isAdded ? [styles.btnFootertext, styles.btnSelectedText] : styles.btnFootertext}
                                                            >
                                                                {parentItem.name}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                            }}
                                        />
                                    )
                                })
                            }
                        </ScrollView>
                }
                {/* <Text>Swipe Right to loade More..</Text> */}

                {showDetails && this.state.detailPopup ? <AnimatedView
                >
                    <TouchableOpacity style={{ flex: 0.15 }} onPress={() => this.handleClose()} />
                    <View style={{ backgroundColor: '#fff', flex: 0.9, borderRadius: 15, marginBottom: -10 }}>
                        <Button style={{ elevation: 0, alignSelf: 'flex-end', backgroundColor: 'transparent' }} onPress={() => this.handleClose()}>
                            <Icon name="close-circle" style={{ fontSize: 34, marginTop: 20, color: 'rgb(196,202,204)' }} />
                        </Button>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{this.state.detailPopup.parentData.name.toUpperCase()}</Text>
                            <Text style={{ color: 'grey', marginBottom: 20 }}>{this.state.detailPopup.childData.name}</Text>
                            <Text>{this.state.detailPopup.childData.description}</Text>
                        </View>
                    </View>
                </AnimatedView> : null}

            </Container >
        )
    }
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        fitnessGoals: state.account.fitnessGoals
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            getFitnessGoals: accountOperations.getFitnessGoals,
            toggleGoal: accountOperations.toggleGoal
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FitnessContainer);


