import React, { Component } from "react";
import { ScrollView, Switch, AsyncStorage, TouchableWithoutFeedback } from "react-native";
import { DrawerActions } from 'react-navigation';
import { Text, Container, List, ListItem, Left, Right, View, Thumbnail, Item, Button, Icon, Title } from "native-base";
import { StackActions, NavigationActions } from 'react-navigation';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { accountOperations } from "../../../../packages/account/duck";

import Styles from './style';
const styles = Styles;

// packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from "../../../../common/components/header/header";




class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmationType: "",
            routes: [
                { divider: true },
                { name: 'Daily Confirmation', value: 'DailyConfirmation', DailyConfirmation: true },
                { name: 'Confirm Order from trainer', value: '/', Switch: true, val: 'setConfirmOrder', state: this.props.user.confirm_order },
                { name: 'Notifications', value: '/', Switch: true, val: 'setAllowNotification', state: this.props.user.allow_notification },
                { divider: true },
                { divider: true, name: "ACCOUNT" },
                { name: 'Edit Profile', value: 'Profile' },
                { name: 'Change password', value: 'ChangePass' },
                { name: 'Diet Preferences + Goals', value: 'DietGoals' },
                { name: 'Delivery address', value: 'DeliveryAddress' },
                { name: 'Payment method', value: 'PaymentMethod' },
                { divider: true },
                { divider: true, name: "GENERAL" },
                { name: 'Review This App', value: '/' },
                { name: 'Refer a Friend', value: '/' },
                { name: 'Contacts', value: '/' },
                { name: 'FAQs', value: '/' },
                { name: 'About', value: '/' },
            ],
            listKey: new Date().getTime()
        }
    }



    onClickProfile = (routeName) => {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: routeName })
            ],
        }))
    }



    checkRoutesOnClickHandler = (data) => {
        if (data.value == "/") {
            return;
        }
        else {
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: data.value })
                ],
            }))
        }
    }



    onSubmitToggleHandler = async (props) => {
        const token = await AsyncStorage.getItem("access_token");
        let updatedRoutes = this.state.routes.map((item) => {
            if (item && item.val) {
                if (item.val === props.val) {
                    item.state = !item.state
                    this.props.actions[props.val](item.state);
                }
            }
            return item;
        })

        this.setState({
            routes: updatedRoutes,
            listKey: new Date().getTime()
        }, () => {
            const user = this.props.user;
            this.props.actions.updateProfile({ user, token })
        })
    }



    render() {
        return (
            <Container>
                < ScrollView showsVerticalScrollIndicator={false} >
                    <HeaderComponent
                        headerLeft={
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                <Icon name="align-left" type="Feather" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                            </TouchableWithoutFeedback>
                        }
                        headerBody={(<Title style={commonStyles.headerIconColor}>Settings</Title>)}
                    />


                    <List
                        dataArray={this.state.routes}
                        key={this.state.listKey}
                        renderRow={data => {
                            return (
                                (data.divider) ?
                                    <ListItem itemDivider>
                                        <Text style={styles.itemDividerName}>{data.name}</Text>
                                    </ListItem>
                                    : (<ListItem
                                        button
                                        onPress={() => { this.checkRoutesOnClickHandler(data) }}>
                                        <Left>
                                            <Text style={styles.listItemName}>{data.name}</Text>
                                        </Left>
                                        <Right>
                                            {data.Switch ?
                                                <Switch
                                                    style={styles.switchStyle}
                                                    thumbColor="#fff"
                                                    trackColor={{ true: '#95ca31', false: '#c4cacc' }}
                                                    value={data.state}
                                                    onValueChange={() => this.onSubmitToggleHandler({ val: data.val })}
                                                />
                                                : (data.DailyConfirmation ?
                                                    <View style={styles.DailyConfirmationRightView}>
                                                        <Text style={styles.DailyConfirmationRightText}>Mannual</Text>
                                                        <Icon name="chevron-thin-right" type="Entypo" style={styles.DailyConfirmationRightIcon} />
                                                    </View> :
                                                    <Icon name="chevron-thin-right" type="Entypo" style={styles.rightArrow} />
                                                )}
                                        </Right>
                                    </ListItem>))
                        }}
                    />

                    <View style={styles.height100} />

                </ScrollView >
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
            // SETTING PAGE
            setAllowNotification: accountOperations.setAllowNotification,
            // confirm order from trainer
            setConfirmOrder: accountOperations.setConfirmOrder,
            // daily or automation
            setConfirmationType: accountOperations.setConfirmationType

        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
