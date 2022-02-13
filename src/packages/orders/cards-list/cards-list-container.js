import React from 'react';
import {
  ScrollView,
  FlatList,
  AsyncStorage,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  View,
  Container,
  Icon,
  Left,
  Right,
  Text,
  Button,
  Card,
  CardItem,
  Spinner,
  Thumbnail,
} from 'native-base';
import {DrawerActions} from 'react-navigation';
import {accountOperations} from '../../account/duck';

//packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';
import ToturialsComponent from './tutorialsSection';
import MealAddIcon from 'react-native-vector-icons/SimpleLineIcons';
import {images} from '../../../common/assets/images';
import moment from 'moment';
// import ProductCard from '../../../common/components/productCard/productCard';
import ProductsList from '../../../common/components/ProductsList/ProductsList';
import OrderList from '../../../common/components/orderList/orderList';
import ProductsListHeader from '../../../common/components/productListHeader/productListHeader';
import AddMealCard from '../../../common/components/addMealCard/addMealCard';

// stylesheet
import Styles from './style.js';
const styles = Styles;
// redux
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {orderOperations} from '../duck';

class CardsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTutorials: true,
      todaysOrder: true,
    };
    this.getMyOrdersHandler();
  }

  dateAfterLastOrder = date => {
    return moment(new Date(date)).add(1, 'days').format().split('T')[0];
  };

  tomorrowDatePicker = () => {
    return moment(new Date()).add(1, 'days').format().split('T')[0];
  };

  getMyOrdersHandler = async () => {
    const token = await AsyncStorage.getItem('access_token');
    await this.props.actions.getProfile(token);
    const currentDate = moment(new Date()).format().split('T')[0];
    await this.props.actions.getMyOrders(token, {start_date: currentDate});
  };

  onCloseTutorials = () => {
    this.setState({
      showTutorials: false,
    });
  };

  render() {
    let myOrdersData = [...this.props.myOrders.data];
    const {showTutorials} = this.state;

    let noOrderFortoday = true;
    myOrdersData.map(order => {
      if (
        new Date(order.date).toISOString().split('T')[0] ===
        new Date().toISOString().split('T')[0]
      ) {
        noOrderFortoday = false;
        return;
      }
    });

    return (
      <Container>
        <HeaderComponent
          isBordered
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
          headerRight={
            <View style={styles.headerRightView}>
              <Icon
                name="map"
                type="Feather"
                style={styles.headerCalenderIconStyle}
              />
              <Icon
                name="calendar"
                type="Feather"
                style={styles.headerCalenderIconStyle}
                onPress={() =>
                  this.props.navigation.navigate('CalenderCardsScreen')
                }
              />
              <Icon
                name="message-circle"
                type="Feather"
                style={styles.headerCommentsIconStyle}
                onPress={() => this.props.navigation.navigate('ChatScreen')}
              />
            </View>
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* video tutorial */}
          {showTutorials ? (
            <ToturialsComponent onClose={this.onCloseTutorials} />
          ) : null}

          {/* {console.log("noOrderFortoday  myOrdersData.length === 0", noOrderFortoday, myOrdersData.length === 0)} */}

          {/* it show when there is no order for today */}
          {this.props.isFetching
            ? null
            : (noOrderFortoday || myOrdersData.length === 0) && (
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: 'bold',
                      marginVertical: 10,
                    }}>
                    Today
                  </Text>
                  <Thumbnail
                    square
                    large
                    style={styles.noMealIcon}
                    source={images.noMealIcon}
                  />
                  <Text
                    info
                    style={{marginHorizontal: 50, textAlign: 'center'}}>
                    Looks like you dont have any meal for today
                  </Text>
                </View>
              )}

          {/* all list of orders render here */}
          {this.props.isFetching && myOrdersData.length == 0 ? (
            <Spinner />
          ) : (
            <OrderList
              orders={myOrdersData}
              navigation={this.props.navigation}
            />
          )}

          {
            // this will add last add meal card at the end of the orders with last order date plus one date
            myOrdersData.length !== 0 && (
              <View style={styles.MV10}>
                <ProductsListHeader myOrdersData={myOrdersData} />
                <View style={styles.rowView}>
                  <AddMealCard
                    navigation={this.props.navigation}
                    _date={this.dateAfterLastOrder(
                      myOrdersData[myOrdersData.length - 1].date.substring(
                        0,
                        10,
                      ),
                    )}
                  />
                </View>
              </View>
            )
          }

          {/* // this will add last add meal card at the end of the orders with tomorrow date when there is no order */}
          {this.props.isFetching
            ? null
            : myOrdersData.length === 0 && (
                <View style={styles.MV10}>
                  {/* header of orders list with tomorrow date*/}
                  <ProductsListHeader
                    date={moment(new Date())
                      .add(1, 'days')
                      .format('DD/MM/YYYY')}
                  />
                  {/* Add Meal Card show for tomorrow when there is no order */}
                  <View style={styles.rowView}>
                    <AddMealCard
                      navigation={this.props.navigation}
                      _date={this.tomorrowDatePicker()}
                    />
                  </View>
                </View>
              )}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.order.isFetching,
    myOrders: state.order.myOrders,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        getMyOrders: orderOperations.getMyOrders,
        getProfile: accountOperations.getProfile,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsListContainer);
