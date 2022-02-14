import React, {Component} from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  Container,
  List,
  ListItem,
  Left,
  Right,
  View,
  Thumbnail,
  Icon,
} from 'native-base';
import {StackActions, CommonActions} from '@react-navigation/native';

// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {authOperations} from '../../../packages/auth/duck';

// Image
import myimage from '../../assets/imag.jpg';

// components
// import DiamondIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import Styles from './style';
const styles = Styles;

class SideBar extends Component {
  onClickProfile = routeName => {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [CommonActions.navigate({routeName: routeName})],
      }),
    );
  };

  checkRoutesOnClickHandler = data => {
    if (data.value == '/') {
      return;
    } else if (data.value == 'ContactUs') {
      this.props.navigation.navigate('ContactUs');
    } else if (data.value === 'Logout') {
      this.onSubmitLogoutHandler();
    } else {
      this.props.navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [CommonActions.navigate({routeName: data.value})],
        }),
      );
    }
  };

  onSubmitLogoutHandler = async () => {
    console.log('=-----------calling logout func--------=');
    await this.props.actions.logout();

    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [CommonActions.navigate({routeName: 'Introduction'})],
      }),
    );
  };

  //render Icons and image Handler
  renderIcons = data => {
    {
      /*
      TODO: MAKE ONE COMPONENT FOR RENDERING SIDE BAR ITEM THE ONLY THING IS CHANGE IS ICON NAME AND TYPE WRITE 
      ICON NAME AND TYPE IN ROUTES ARRAY OBJECT AND MAKE ONE VIEW OF ALL ROUTES
    */
    }
    if (data.home) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon name="home" type="FontAwesome" style={styles.listItemsIcon} />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.menu) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon
              name="restaurant"
              type="MaterialIcons"
              style={styles.listItemsIcon}
            />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.notification) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon
              name="notifications"
              type="MaterialIcons"
              style={styles.listItemsIcon}
            />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.favourite) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon
              name="favorite"
              type="MaterialIcons"
              style={styles.listItemsIcon}
            />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.creditReward) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon
              name="credit-card-alt"
              type="FontAwesome"
              style={styles.listItemCreditIcon}
            />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.settings) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon
              name="settings"
              type="MaterialIcons"
              style={styles.listItemsIcon}
            />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.contactUs) {
      return (
        <View style={styles.listItemsContainer}>
          <View style={styles.listItemsIconContainer}>
            <Icon
              name="contacts"
              type="MaterialCommunityIcons"
              style={styles.listItemsIcon}
            />
          </View>
          <Text>{data.name}</Text>
        </View>
      );
    } else if (data.logout) {
      return (
        <View style={styles.listItemsLogout}>
          <View style={styles.listItemsIconContainer}>
            <Icon name="log-out" type="Entypo" style={styles.listItemsIcon} />
          </View>
          <Text>Log Out </Text>
        </View>
      );
    } else {
      return <Text>{data.name}</Text>;
    }
  };

  render() {
    //Router Array for navigation
    const routes = [
      // { fitblowl: true, value: "CardsList", },
      {name: 'Home', value: 'CardsList', home: true},
      {name: 'Restuarant Menu', value: 'Menu', menu: true},
      {name: 'Notification', value: 'Notification', notification: true},
      // { name: "Notification", value: "/", notification: true },
      // { name: 'Favourite', value: 'Favourite', favourite: true },
      {name: 'Credit + Rewards', value: 'CreditReward', creditReward: true},
      {name: 'Settings', value: 'Settings', settings: true},
      {name: 'Contact Us', value: 'ContactUs', contactUs: true},
      {name: 'Logout', value: 'Logout', logout: true},
    ];

    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.sidemenuHeaderContainer}>
            <View style={styles.sidemenuHeaderBackground} />

            <View style={styles.sidemenuTitleSectionWrapper}>
              <View style={styles.sidemenuTitleSectionContent}>
                <View style={styles.headerThumbnailWrapper}>
                  <Thumbnail
                    large
                    source={myimage}
                    style={styles.headerThumbnail1}
                  />
                </View>
                <View style={styles.sidemenuTitleRightSection}>
                  <Text style={styles.userName}>{this.props.user.name}</Text>
                  <View style={styles.ketoAndEditIconWrapper}>
                    <View style={styles.ketoIconWrapper}>
                      <Text style={styles.ketoTextColor}>Keto</Text>
                    </View>
                    <Icon
                      name="edit"
                      type="MaterialIcons"
                      style={styles.editIcon}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.sidemenuDetaisSection}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Thumbnail
                    small
                    source={myimage}
                    style={styles.headerThumbnail2}
                  />
                  <View style={styles.IconDescriptionContainer}>
                    <Text style={styles.IconDescriptionTitle}>Lucy Martha</Text>
                    <Text style={styles.IconDescriptionText}>Trainer</Text>
                  </View>
                </View>

                <View style={{flex: 1, alignItems: 'center'}}>
                  <Icon
                    name="diamond"
                    type="SimpleLineIcons"
                    style={styles.headerIcons}
                  />
                  <View style={styles.IconDescriptionContainer}>
                    <Text style={styles.IconDescriptionTitle}>1200 points</Text>
                    <Text style={styles.IconDescriptionText}>Total Points</Text>
                  </View>
                </View>

                <View style={{flex: 1, alignItems: 'center'}}>
                  <Icon
                    name="diamond"
                    type="SimpleLineIcons"
                    style={styles.headerIcons}
                  />
                  <View style={styles.IconDescriptionContainer}>
                    <Text style={styles.IconDescriptionTitle}>20</Text>
                    <Text style={styles.IconDescriptionText}>Total Orders</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  noBorder
                  button
                  onPress={() => {
                    this.checkRoutesOnClickHandler(data);
                  }}>
                  <Left>{this.renderIcons(data)}</Left>
                  <Right></Right>
                </ListItem>
              );
            }}
          />
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.account.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        logout: authOperations.logout,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
