import React, {Component} from 'react';
import {Container, Icon, Tabs, Tab, View, Button, Title} from 'native-base';
import {DrawerActions} from '@react-navigation/native';

import Styles from './style';
const styles = Styles;

// Packages
import TabOne from './your-build-container';

import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';

class BasicTab extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent
          headerLeft={
            <Button
              style={[
                commonStyles.transparentBackgroundColor,
                commonStyles.elevation0,
              ]}
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }>
              <Icon name="menu" style={commonStyles.headerIconColor} />
            </Button>
          }
          headerBody={
            <Title style={commonStyles.headerIconColor}>Your Build</Title>
          }
        />

        <Tabs
          tabContainerStyle={{elevation: 0}}
          tabBarUnderlineStyle={{
            borderBottomColor: 'green',
            borderBottomWidth: 1,
          }}>
          <Tab
            activeTextStyle={{color: 'green', fontWeight: 'normal'}}
            activeTabStyle={{backgroundColor: '#FFF'}}
            textStyle={{color: '#000'}}
            tabStyle={{backgroundColor: '#FFF'}}
            heading="Upcoming">
            <TabOne navigate={this.props.navigation.navigate} />
          </Tab>

          <Tab
            activeTextStyle={{color: 'green'}}
            activeTabStyle={{backgroundColor: '#FFF'}}
            textStyle={{color: '#000'}}
            tabStyle={{backgroundColor: '#FFF'}}
            heading="Past">
            <TabOne navigate={this.props.navigation.navigate} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
