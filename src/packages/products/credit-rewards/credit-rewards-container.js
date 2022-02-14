import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {Container, Icon, View, Text, Button, Title} from 'native-base';
import Styles from './style';
const styles = Styles;

//packages
import commonStyles from '../../../common/components/commonStyles';
import HeaderComponent from '../../../common/components/header/header';

class CreditRewardContainer extends React.Component {
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
            <Title style={commonStyles.headerIconColor}>Credit + Rewards</Title>
          }
        />

        <Text style={styles.creditText}>Credit</Text>
        <View style={styles.touchViewContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate('CreditHistory');
            }}>
            <View style={styles.textViewContainer}>
              <Text style={[styles.textStyle, styles.titletext]}>7 Meals</Text>
              <Text style={styles.textStyle}>VIEW CREDIT</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <Button rounded success block style={styles.btnStyle}>
          <Text>Enter a promo / Gift Code</Text>
        </Button>
      </Container>
    );
  }
}

export default CreditRewardContainer;
