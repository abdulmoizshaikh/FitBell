import React, {Component} from 'react';
import {
  View,
  FlatList,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import {Container, Spinner, Icon, Button, Title, DatePicker} from 'native-base';
import {DrawerActions} from '@react-navigation/native';
// Packages
import VerticalCardComponent from '../../../common/components/vertical-card/vertical-card-component';
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';
// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {productOperations} from '../duck';
import {orderOperations} from '../../orders/duck';

import Styles from './style.js';
const styles = Styles;

class ProductsMenuContainer extends Component {
  constructor(props) {
    super(props);
    this.getExploreProductsHandler();
  }

  getExploreProductsHandler = async () => {
    const token = await AsyncStorage.getItem('access_token');
    await this.props.actions.getExploreProducts(token);
  };

  onPressVerticalCardHandler = item => {
    this.props.navigation.navigate('CardsOrders', {_id: item._id});
  };

  tomorrowDatePicker = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  };

  setOrderDateHandler = async date => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const selectedDate = `${year}/${month}/${day}`;
    // console.log(" setDateHanlder selectedDate", selectedDate);
    // here we dispatch action with set orderdate in details in add order
    await this.props.actions.setOrderDate(selectedDate);
  };

  render() {
    const exploreProductsData = [...this.props.exploreProducts.data];
    const {params} = this.props.navigation.state;
    // console.log("params", params);
    let addMealIcon = false;
    if (params) {
      addMealIcon = params.addMealIcon;
    } else {
      addMealIcon = false;
    }

    // console.log("params", params)

    return (
      <Container>
        {params ? (
          <HeaderComponent
            isBordered
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
              <Title style={commonStyles.headerIconColor}>Menu</Title>
            }
            headerRight={
              <Icon
                name="ios-search"
                type="Ionicons"
                style={commonStyles.padding10}
              />
            }
          />
        ) : (
          <HeaderComponent
            headerLeft={
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.dispatch(DrawerActions.openDrawer())
                }>
                <Icon
                  name="align-left"
                  type="Feather"
                  style={[commonStyles.headerIconColor, commonStyles.padding10]}
                />
              </TouchableWithoutFeedback>
            }
            headerBody={
              <Title style={commonStyles.headerIconColor}>Menu</Title>
            }
          />
        )}

        <View style={styles.cardsViewContainer}>
          {this.props.isFetching && exploreProductsData.length === 0 ? (
            <Spinner />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              data={[...exploreProductsData]}
              renderItem={({item}) => {
                return (
                  <VerticalCardComponent
                    style={styles}
                    item={item}
                    image={{uri: item.image}}
                    name={item.name}
                    // description={item.description.substring(0, 40)}
                    isFavourite={item.is_favourite}
                    calories={`${(
                      4 * item.carbs +
                      9 * item.fat +
                      4 * item.protein
                    )
                      .toString()
                      .substring(0, 3)}  Cal`}
                    footer={true}
                    addMealIcon={addMealIcon}
                    navigation={this.props.navigation}
                    onPress={this.onPressVerticalCardHandler}
                    // onPress={() => this.props.navigation.navigate('CardsOrders', { _id: item._id })}
                  />
                );
              }}
            />
          )}
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.products.isFetching,
    exploreProducts: state.products.exploreProducts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getExploreProducts: productOperations.getExploreProducts,
        setOrderDate: orderOperations.setOrderDate,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsMenuContainer);
