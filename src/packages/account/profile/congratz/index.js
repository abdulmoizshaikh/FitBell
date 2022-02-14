import React, {Component} from 'react';
import {
  AsyncStorage,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Text, Container, View, Button, Icon, Spinner} from 'native-base';
import {StackActions, CommonActions} from '@react-navigation/native';
// import Video from 'react-native-video';

import styles from './styles';

//packages
import commonStyles from '../../../../common/components/commonStyles';
import HeaderComponent from '../../../../common/components/header/header';
import VideoTutorials from '../../../../common/components/Tutorials/VideoTutorialComponent';

// redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {accountOperations} from '../../duck';

class CongratzScreen extends Component {
  onSubmitHandler = async props => {
    // await this.props.actions.setConfirmationType(props.confirmationType);
    const token = await AsyncStorage.getItem('access_token');
    const user = await this.props.user;
    await this.props.actions.updateProfile({user, token});
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [CommonActions.navigate({routeName: 'CardsList'})],
      }),
    );
  };

  render() {
    return (
      <Container style={styles.containerStyle}>
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
        />

        <View
          style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
          <Text dark style={{fontSize: 28, fontWeight: 'bold'}}>
            You’re all set!
          </Text>
          <Text
            info
            style={{
              textAlign: 'center',
            }}>{`Thanks for registering \nyour account`}</Text>
        </View>
        <VideoTutorials />
        <View
          style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
          <Text dark style={{fontSize: 28, fontWeight: 'bold'}}>
            Quick Tutorials
          </Text>
          <Text info style={{textAlign: 'center'}}>
            Get started and learn about fitbowl.
          </Text>
        </View>
        <Button
          primary
          full
          style={{borderRadius: 5, marginHorizontal: 20, elevation: 0}}
          onPress={() => this.onSubmitHandler()}>
          {this.props.isFetching ? (
            <Spinner color="#fff" />
          ) : (
            <Text uppercase={false}>Start Explore</Text>
          )}
        </Button>
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
        updateProfile: accountOperations.updateProfile,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CongratzScreen);
