import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Icon, View } from 'native-base';

import Styles from './style';
const styles = Styles;

// redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { accountOperations } from "../../../duck";
import { setDefaultPaymentMethod } from '../../../duck/operations';

class PaymentWithMethod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seletedType: false
        }
    }


    toggleSelection = async (card_id) => {
        console.log("card_id", card_id)
        let result = await this.props.actions.setDefaultPaymentMethod({ card_id: card_id })
        if (result) {
            this.props.navigation.navigate("Subscription").
                this.setState({
                    seletedType: true
                })
        }

    }



    render() {
        // const { seletedType } = this.state;
        const { item } = this.props;
        // console.log("item", item)

        return (


            <TouchableOpacity
                onPress={() => this.toggleSelection(item.card_id)}
                style={item.default_source ? [styles.ViewWrapper, styles.slected] : styles.ViewWrapper}
            >
                <View style={styles.titleTextIconWrapper}>
                    <Text style={styles.titleText}>{`${item.brand}****${item.last4}`}</Text>
                    <Icon name="cc-visa" type="FontAwesome" />
                </View>


                {/* <View style={styles.descriptionWrapper}> */}

                <View style={styles.descriptionIconWrapper}>
                    <Icon
                        style={item.default_source ? [styles.dot, styles.selectedDot] : styles.dot}
                        type="FontAwesome"
                        name={item.default_source ? "circle-o" : "circle"}
                    />
                </View>


                <Text style={styles.descriptionText} note>Expiry Date:{` ${item.exp_month}/${item.exp_year}`}</Text>
                {/* </View> */}

                {/* <Text note></Text> */}
            </TouchableOpacity>

        );
    }
}




const mapStateToProps = (state) => {
    return {
        isFetching: state.account.isFetching,
        // paymentMethods: state.account.paymentMethods
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            // addPaymentMethod: accountOperations.addPaymentMethod,
            // getPaymentMethods: accountOperations.getPaymentMethods,
            setDefaultPaymentMethod: accountOperations.setDefaultPaymentMethod
        }, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PaymentWithMethod);

