import React, {Component} from 'react';
import {
  AsyncStorage,
  FlatList,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import {
  View,
  Button,
  Container,
  Icon,
  Title,
  Spinner,
  Thumbnail,
  Text,
} from 'native-base';
// import {
//   Animated,
//   ProviderPropType,
//   Marker,
//   AnimatedRegion,
// } from 'react-native-maps';
// import OpenAppSettings from 'react-native-app-settings';

import Styles from './style';
import CustomStyle from './mapCustomStyle';
const styles = Styles;
const screen = Dimensions.get('window');

// packages
import HeaderComponent from '../../../common/components/header/header';
import commonStyles from '../../../common/components/commonStyles';
// import AddressCardComponent from '../../../common/components/address-card/address-card-component';
import {images} from '../../../common/assets/images';
import AnimatedView from '../../../common/components/Animations/FadeInView';
import {calculateDistance} from '../../../common/utils/helper.methods';

// redux
import {orderOperations} from '../duck';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {snackbarOperations} from '../../snackbar/duck';

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.5;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class PickUpLocationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LATITUDE: null,
      LONGITUDE: null,
      markers: [],
      showDetails: false,
    };
    this.getPickUpLocationsHandler();
    this.getLocation();
  }

  onMapPress(e) {
    const {coordinate} = this.state;
    if (e.nativeEvent.coordinate) {
      const newCoordinate = {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      };
      if (Platform.OS === 'android') {
        if (this.marker) {
          this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
        }
      } else {
        coordinate.timing(newCoordinate).start();
      }
    }
  }
  onClicMarkLocation = async (lat1, lon1, lat2, lon2, markerData) => {
    let distance = await calculateDistance(lat1, lon1, lat2, lon2);
    // console.log("distace", distance)
    this.setState({
      detailPopup: {
        selectedLocation: markerData,
        distanceFromPin: distance,
      },
      showDetails: !this.state.showDetails,
    });
  };
  getPickUpLocationsHandler = async () => {
    const token = await AsyncStorage.getItem('access_token');
    await this.props.actions.getPickUpLocations(token);
  };

  onSelectPickUpLocation = async location => {
    // console.log("location", location);
    await this.props.actions.setLocationDetails(location);
    this.props.navigation.navigate('ConfirmOrder', {
      isPickup: true,
    });
  };

  getLocation = async () => {
    // console.log("-----componentDidMount--------", navigator.geolocation)

    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          position => {
            // console.log("-----position--------", position.coords)
            this.setState({
              LATITUDE: position.coords.latitude,
              LONGITUDE: position.coords.longitude,
            });
          },
          err => {
            // console.log("errrr----", err);
            alert('Fetching the Position failed, try reenabling your location');
            // OpenAppSettings.open();
            this.props.navigation.goBack();
          },
        );
      } else {
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  handleClose = () => {
    this.setState({
      showDetails: false,
    });
  };

  render() {
    const pickUpLocationsData = [...this.props.pickUpLocations.data];
    const {LATITUDE, LONGITUDE, showDetails} = this.state;
    return (
      <Container style={styles.container}>
        <HeaderComponent
          bodyFlex4={true}
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
            <Title style={commonStyles.headerIconColor}>
              Available pickup locations
            </Title>
          }
        />

        {/* {LATITUDE && LONGITUDE ? (
          // <Animated
          //   showUserLocation
          //   provider={this.props.provider}
          //   style={styles.map}
          //   initialRegion={{
          //     latitude: LATITUDE,
          //     longitude: LONGITUDE,
          //     latitudeDelta: LATITUDE_DELTA,
          //     longitudeDelta: LONGITUDE_DELTA,
          //   }}
          //   customMapStyle={CustomStyle}
          //   // onPress={(e) => this.onMapPress(e)}
          // >
           */}

        {/* {pickUpLocationsData.map(marker => (
          <Marker
            key={marker._id}
            // coordinate={marker.location}
            coordinate={{
              longitude: marker.location.lng,
              latitude: marker.location.lat,
            }}
            // image={images.appLogo}
            // onPress={() => this.setState({
            //     detailPopup: {
            //         selectedLocation: marker
            //     },
            //     showDetails: !showDetails
            // })}
            onPress={() =>
              this.onClicMarkLocation(
                LATITUDE,
                LONGITUDE,
                marker.location.lat,
                marker.location.lng,
                marker,
              )
            }
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
            }}>
            <Thumbnail
              circle
              style={{width: 50, height: 50}}
              source={images.appLogo}
            />
          </Marker>
        ))} */}
        {/* //   </Animated> 
        // ) : (
          //   <Spinner />
        // )}
        */}

        {showDetails && this.state.detailPopup ? (
          <AnimatedView>
            <TouchableOpacity
              style={{flex: 0.6}}
              onPress={() => this.handleClose()}
            />
            <View
              style={{
                backgroundColor: '#fff',
                flex: 0.4,
                borderRadius: 15,
                marginBottom: -10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 0.2,
                  borderBottomWidth: 1,
                  borderBottomColor: '#dfe6e9',
                }}>
                <Button
                  style={{
                    alignSelf: 'center',
                    elevation: 0,
                    backgroundColor: 'transparent',
                    flex: 0.5,
                  }}
                  onPress={() => this.handleClose()}>
                  <Icon name="close" style={{fontSize: 34, color: '#000'}} />
                </Button>
                <Text style={{alignSelf: 'center', fontSize: 18}}>Pickup</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flex: 0.6,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {this.state.detailPopup.selectedLocation.address}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{marginRight: 15}}>
                    {this.state.detailPopup.selectedLocation.name}
                  </Text>
                  <Text>{this.state.detailPopup.distanceFromPin}</Text>
                </View>
              </View>
              <Button
                onPress={() =>
                  this.onSelectPickUpLocation(
                    this.state.detailPopup.selectedLocation,
                  )
                }
                full
                style={{elevation: 0, marginHorizontal: 30, borderRadius: 5}}>
                <Text uppercase={false}>Pickup from this location</Text>
              </Button>
            </View>
          </AnimatedView>
        ) : null}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.order.isFetching,
    pickUpLocations: state.order.pickUpLocations,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPickUpLocations: orderOperations.getPickUpLocations,
        // showSnackbar: snackbarOperations.showSnackbar,
        setLocationDetails: orderOperations.setLocationDetails,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickUpLocationsContainer);
