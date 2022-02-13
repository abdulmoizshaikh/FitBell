import React from 'react';
import {TouchableWithoutFeedback, Image, ScrollView, Alert} from 'react-native';
import {
  Text,
  Container,
  Icon,
  Title,
  Spinner,
  View,
  Card,
  Right,
} from 'native-base';

// packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';
import {images} from '../../../common/assets/images';
// import image from "../../../common/assets/imag.jpg";
import SubscriptionPackage from '../../../common/components/subscription-package';

import Styles from './style';
const styles = Styles;

// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {accountOperations} from '../duck';

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.props.actions.getSubscriptions();
  }

  updateSubscriptionHandler = async subscriptionId => {
    console.log('subscriptionId', subscriptionId);
    try {
      let result = await this.props.actions.updateSubscription({
        subscription_id: subscriptionId,
      });
      if (result) {
        console.log('result in component', result);
      }
    } catch (err) {
      console.log('err', err.data);
      if (err.status && err.status === 424) {
        Alert.alert(
          'Alert',
          'Looks like you have not setup any payment method.! please add one to continue',
          [
            {
              text: 'OK',
              onPress: () =>
                this.props.navigation.navigate('PaymentMethod', {
                  fromComponent: true,
                }),
            },
          ],
          {cancelable: false},
        );
      }
    }
  };

  render() {
    // const data = [
    //     {
    //         points: '1100',
    //         number_of_meal: '11',
    //         price: '50',
    //         _id: '2'
    //     },
    //     {
    //         points: '2600',
    //         number_of_meal: '11',
    //         price: '120',
    //         _id: '3'
    //     },
    //     {
    //         points: '4200',
    //         number_of_meal: '11',
    //         price: '400',
    //         _id: '4'
    //     },

    // ]

    const {subscriptions} = this.props;
    // console.log("subscriptions", subscriptions)

    return (
      <Container>
        <HeaderComponent
          headerLeft={
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.goBack()}>
              <Icon
                name="ios-arrow-back"
                style={[commonStyles.headerIconColor, commonStyles.padding10]}
              />
            </TouchableWithoutFeedback>
          }
          headerBody={
            <Title style={commonStyles.headerIconColor}>Payment Method</Title>
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.H20} />

          {/* <View>
                        <View style={styles.sectionWrapper}>
                            <Text style={styles.headerTitle}>Payment individual for $10.00</Text>
                        </View>
                        <View style={styles.headerCardWrapper}>
                            <Card transparent style={styles.cardStyle}>
                                <View >
                                    <Image source={images.myimage} style={styles.cardImage} />
                                </View>
                                <View style={styles.bodyWrapper}>
                                    <Text style={styles.bodyTextTitle}>Lasagna Dome</Text>
                                    <View>
                                        <Text style={styles.calorieText}>525 Cal</Text>
                                    </View>
                                </View>
                                <Right>
                                    <Icon name="chevron-thin-right" type="Entypo" style={styles.rightArrow} />
                                </Right>
                            </Card>
                        </View>
                    </View> */}

          <View style={styles.H20} />

          <View style={styles.subPkgsTitleWrapper}>
            <Text style={styles.headerTitle}>
              Flexible subscription Options
            </Text>
          </View>

          {/*
           *rendering subscriptions packages
           */}

          {this.props.isFetching && subscriptions.length === 0 ? (
            <Spinner />
          ) : (
            subscriptions.map((item, index) => {
              return (
                <SubscriptionPackage
                  item={item}
                  key={index.toString()}
                  updateSubscriptionHandler={this.updateSubscriptionHandler}
                />
              );
            })
          )}

          <View style={styles.footerSectionWrapper}>
            <Text style={styles.footerText}>
              Flexible Subscription Options That Will Save You Money on Stuff
              You Actually Need. That will more sensible than you pay its
              individual payment.
            </Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.account.isFetching,
    subscriptions: state.account.subscriptions,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getSubscriptions: accountOperations.getSubscriptions,
        updateSubscription: accountOperations.updateSubscription,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscription);
