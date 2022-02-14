import React from 'react';
import {
  TouchableWithoutFeedback,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {
  View,
  Text,
  Container,
  Icon,
  Title,
  ListItem,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';
// import MapView, {Marker} from 'react-native-maps';

//packages
import commonStyles from '../../common/components/commonStyles';
import HeaderComponent from '../../common/components/header/header';

import Styles from './style.js';
const styles = Styles;

let id = 0;

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        // initial region set to Bileto
        latitude: 50.0517273,
        longitude: 14.4286503,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers: [
        {
          coordinate: {
            latitude: 50.05802583405552,
            longitude: 14.467272832989694,
          },
          key: id,
          color: '#95ca31',
        },
      ],
    };
  }

  render() {
    return (
      <Container>
        <HeaderComponent
          rightFlex2={true}
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
            <Title style={commonStyles.headerIconColor}>Contacts</Title>
          }
          headerRight={
            <TouchableWithoutFeedback>
              <Text primary style={[commonStyles.padding10]}>
                Feedback
              </Text>
            </TouchableWithoutFeedback>
          }
        />

        {/* react native map wrapper*/}
        {/* <View style={styles.mapContainer}>
          <MapView style={styles.map} initialRegion={this.state.region}>
            {this.state.markers.map(marker => (
              <Marker
                key={marker.key}
                coordinate={marker.coordinate}
                pinColor={marker.color}
              />
            ))}
          </MapView>
        </View> */}

        {/* listItems Wrapper */}
        <View>
          <ListItem style={styles.listItem}>
            <View style={styles.leftIconWrapper}>
              <Icon
                name="location-on"
                type="MaterialIcons"
                style={styles.iconStyle}
              />
            </View>

            <TouchableOpacity
              style={styles.bodyTextWrapper}
              onPress={() => Linking.openURL('https://www.google.com/maps')}>
              <Text style={styles.bodyText}>07 Weimann Camp Apt. 242</Text>
            </TouchableOpacity>

            <View style={styles.rightIconWrapper}>
              <Icon
                name="chevron-thin-right"
                type="Entypo"
                style={styles.rightArrow}
              />
            </View>
          </ListItem>

          <ListItem style={styles.listItem}>
            <View style={styles.leftIconWrapper}>
              <Icon name="phone" type="FontAwesome" style={styles.iconStyle} />
            </View>
            <Body style={styles.bodyTextWrapper}>
              <Text style={styles.bodyText}>Phone</Text>
            </Body>
            <TouchableOpacity
              style={styles.rightTextWrapper}
              onPress={() => Linking.openURL('tel:+871 87 998 88 09')}>
              <Text>+871 87 998 88 09</Text>
            </TouchableOpacity>
          </ListItem>

          <ListItem style={styles.listItem}>
            <View style={styles.leftIconWrapper}>
              <Icon
                name="globe"
                type="SimpleLineIcons"
                style={styles.iconStyle}
              />
            </View>
            <Body style={styles.bodyTextWrapper}>
              <Text style={styles.bodyText}>Site</Text>
            </Body>
            <TouchableOpacity
              style={styles.rightTextWrapper}
              onPress={() => Linking.openURL('https://scheme.kkuistore.com/')}>
              <Text style={styles.rightText}>scheme.kkuistore.com</Text>
            </TouchableOpacity>
          </ListItem>

          <ListItem style={styles.listItem}>
            <View style={styles.leftIconWrapper}>
              <Icon
                name="email"
                type="MaterialIcons"
                style={styles.iconStyle}
              />
            </View>
            <Body style={styles.bodyTextWrapper}>
              <Text style={styles.bodyText}>E-mail</Text>
            </Body>
            <TouchableOpacity
              style={styles.rightTextWrapper}
              onPress={() => Linking.openURL('mailto:info@kkuistore.com')}>
              <Text style={styles.rightText}>info@kkuistore.com</Text>
            </TouchableOpacity>
          </ListItem>
        </View>

        <View style={styles.fbTwitterBtnsWrapper}>
          <Button
            iconRight
            block
            bordered
            style={styles.btnStyle}
            onPress={() => Linking.openURL('https://www.facebook.com/')}>
            <Text uppercase={false} style={styles.btnTextStyle}>
              Facebook
            </Text>
            <Icon name="facebook" type="Entypo" style={styles.btnIconColor} />
          </Button>
          <Button
            iconRight
            block
            bordered
            style={styles.btnStyle}
            onPress={() => Linking.openURL('https://twitter.com/')}>
            <Text uppercase={false} style={styles.btnTextStyle}>
              Twitter
            </Text>
            <Icon
              name="twitter"
              type="FontAwesome"
              style={styles.btnIconColor}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default ContactUs;
