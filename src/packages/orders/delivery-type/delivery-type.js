import React from "react";
import { TouchableOpacity, AsyncStorage, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Text, Container, List, Icon, View, Spinner } from 'native-base';

import Styles from './style.js';
const styles = Styles;

//packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from "../../../common/components/header/header";

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { orderOperations } from "../duck";



class DeliveryType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seletedType: 'delivery',
            isLoading: true
        }
    }
    componentDidMount() {
        // console.log("userr ------", this.props.user.default)
        if (this.props.user && this.props.user.default) {
            this.props.navigation.navigate("ConfirmOrder", {
                isDefault: true,
                changeState: this.changeState
            })
        }
        else {
            this.setState({
                isLoading: false
            })
        }
    }

    changeState = () => {
        this.setState({
            isLoading: false
        })
    }


    setDeliverytypeHandler = (type, nextRoute) => {
        this.props.actions.setDeliveryType(type)
        this.props.navigation.navigate(nextRoute)
    }

    onHandleNext = () => {
        let type = this.state.seletedType,
            selectOption = type === 'pickup' ? 'PickUpLocations' : 'DeliveryAddress';
            this.setDeliverytypeHandler(type, selectOption)


        // if (selectOption === 'PickUpLocations') {
        //     alert('Hey user, currently pikup points near you are now in development, you can try our delivery service at cheapest rates')
        // } else {
        //     this.setDeliverytypeHandler(type, selectOption)
        // }
    }
    toggleSelection = (type) => {
        this.setState({
            seletedType: type
        })
    }

    render() {
        const { seletedType, isLoading } = this.state

        return (
            isLoading ? <Spinner /> :
                <Container>
                    <HeaderComponent
                        headerLeft={
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.goBack()}                            >
                                <Icon name="ios-arrow-back" style={[commonStyles.headerIconColor, commonStyles.padding10]} />
                            </TouchableWithoutFeedback>
                        }
                        headerRight={
                            <TouchableWithoutFeedback
                                onPress={() => this.onHandleNext()}>
                                <Text primary style={[commonStyles.padding10]}>Next</Text>
                            </TouchableWithoutFeedback>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.rootContainer}>

                        <Text style={styles.titleStyle}>{`How do you want \nto get the meals ?`}</Text>

                        <List>
                            <TouchableOpacity
                                onPress={() => this.toggleSelection('pickup')}
                                style={seletedType === 'pickup' ? [styles.ViewWrapper, styles.slected] : styles.ViewWrapper}
                            >
                                <Text>A Pickup location</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ flex: 0.7 }} note>You can select the pickup location close to you.</Text>
                                    <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <Text info style={{ marginHorizontal: 10 }}>Free</Text>
                                        <Icon
                                            style={seletedType === 'pickup' ? [styles.dot, styles.selectedDot] : styles.dot}
                                            type="FontAwesome"
                                            name={seletedType === 'pickup' ? "circle-o" : "circle"} />
                                    </View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity
                                onPress={() => this.toggleSelection('delivery')}
                                style={seletedType === 'delivery' ? [styles.ViewWrapper, styles.slected] : styles.ViewWrapper}
                            >
                                <Text>Delivery</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ flex: 0.7 }} note>
                                        We bring it to your door. Just tell us where you want us to bring it.
                                </Text>
                                    <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <Text info style={{ marginHorizontal: 10 }}>$3.00</Text>
                                        <Icon
                                            style={seletedType === 'delivery' ? [styles.dot, styles.selectedDot] : styles.dot}
                                            type="FontAwesome"
                                            name={seletedType === 'delivery' ? "circle-o" : "circle"} />
                                    </View>
                                </View>
                            </TouchableOpacity>


                        </List>
                    </ScrollView>
                </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.account.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            setDeliveryType: orderOperations.setDeliveryType
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryType);


