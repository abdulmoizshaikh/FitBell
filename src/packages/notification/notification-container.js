import React from 'react';
import {FlatList, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {
  Container,
  View,
  Icon,
  Text,
  Title,
  Button,
  List,
  ListItem,
  Thumbnail,
  Left,
  Right,
  Body,
} from 'native-base';
import {DrawerActions} from '@react-navigation/native';

// Packages
// import VerticalCardComponent from '../../common/components/vertical-card/vertical-card-component';
import commonStyles from '../../common/components/commonStyles';
import HeaderComponent from '../../common/components/header/header';
import {images} from '../../common/assets/images';

import Styles from './style';
const styles = Styles;

class NotificationContainer extends React.Component {
  render() {
    const data = [
      {divider: true, text: 'New'},
      {
        title: 'Danis have just added a new meal',
        text: '"Koginut Squash Bowl By Dan Barber" in your menu on 10/12/2018.',
      },
      {divider: true, text: 'Earlier'},
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
      {
        title: 'kikisu have just added a new meal',
        text: '"Curry Cauliflower" in your menu on 14/12/2018',
      },
    ];

    return (
      <Container>
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
            <Title style={commonStyles.headerIconColor}>Notification</Title>
          }
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <List
            dataArray={data}
            renderRow={item =>
              item.divider ? (
                <ListItem itemDivider>
                  <Text>{item.text}</Text>
                </ListItem>
              ) : (
                <ListItem avatar>
                  <Left>
                    <Thumbnail square source={images.miloLarge} />
                  </Left>
                  <Body>
                    <Text numberOfLines={1}>{item.title}</Text>
                    <Text numberOfLines={2} note>
                      {item.text}
                    </Text>
                  </Body>
                  <Right>
                    <Text note>{data.time}</Text>
                  </Right>
                </ListItem>
              )
            }></List>
        </ScrollView>
      </Container>
    );
  }
}

export default NotificationContainer;
