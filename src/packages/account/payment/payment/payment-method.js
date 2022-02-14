import React from 'react';
import {TouchableWithoutFeedback, ScrollView} from 'react-native';
import {Text, Container, Icon, Title, List, Spinner} from 'native-base';
import {DrawerActions} from '@react-navigation/native';

// packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from '../../../../common/components/header/header';
import PaymentWithMethod from './payment-with-methods/payment-with-methods';
import PaymentWithoutMethod from './payment-without-methods/payment-without-methods';
// import stripe from 'tipsi-stripe';

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {accountOperations} from '../../duck';

import Styles from './style';
const styles = Styles;

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // }
    this.getPaymentMethods();
  }
  // componentWillMount() {
  //     const { params } = this.props.navigation.state;
  //     console.log("params", params)
  // }
  getPaymentMethods = async () => {
    await this.props.actions.getPaymentMethods();
  };

  openStripeCard = async () => {
    try {
      //   const card = await stripe.paymentRequestWithCardForm();
      console.log(card); //here action for post to be exe with tokenId of user added paycard
      await this.props.actions.addPaymentMethod({source: card.tokenId});
    } catch (error) {
      this.setState({get_in_process: false}, () => {
        console.log(error);
      });
    }
  };

  render() {
    // const { paymentMethod } = this.props;
    // console.log("paymentMethod", paymentMethod)
    const {params} = this.props.navigation.state;

    const paymentMethods = [...this.props.paymentMethods.data];
    // console.log("paymentMethods", paymentMethods)

    return (
      <Container>
        <HeaderComponent
          headerLeft={
            <TouchableWithoutFeedback
              onPress={() =>
                params.fromComponent
                  ? this.props.navigation.goBack()
                  : this.props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <Icon
                name={params.fromComponent ? 'ios-arrow-back' : 'align-left'}
                type={params.fromComponent ? 'Ionicons' : 'Feather'}
                style={[commonStyles.headerIconColor, commonStyles.padding10]}
              />
            </TouchableWithoutFeedback>
          }
          headerBody={
            <Title style={commonStyles.headerIconColor}>Payment Info</Title>
          }
          headerRight={
            <TouchableWithoutFeedback onPress={() => this.openStripeCard()}>
              <Text primary style={[commonStyles.padding10]}>
                Add
              </Text>
            </TouchableWithoutFeedback>
          }
        />
        {/* TODO: NoPaymentMethod */}

        {paymentMethods.length === 0 ? (
          <PaymentWithoutMethod openStripe={this.openStripeCard} />
        ) : this.props.isFetching ? (
          <Spinner />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.rootContainer}>
            <List>
              {paymentMethods.map((item, index) => {
                return (
                  <PaymentWithMethod
                    // TOOD: PaymentMethodCard
                    item={item}
                    key={index.toString()}
                    navigation={this.props.navigation}
                  />
                );
              })}
            </List>
          </ScrollView>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.account.isFetching,
    paymentMethods: state.account.paymentMethods,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        addPaymentMethod: accountOperations.addPaymentMethod,
        getPaymentMethods: accountOperations.getPaymentMethods,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);
