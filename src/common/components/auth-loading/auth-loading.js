import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Spinner} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {authOperations} from '../../../packages/auth/duck';
import {accountOperations} from '../../../packages/account/duck';
import APIService from '../../utils/api-service-instance';
import NotificationManager from '../notification-manager/notification-manager';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#F5F5F5',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.appInitialize();
  }

  appInitialize = () => {
    this.checkAuthenticatedUser();
  };

  checkAuthenticatedUser = async () => {
    try {
      const userToken = await this.props.actions.getToken();
      if (userToken) {
        APIService.addDefaultHeaders({Authorization: userToken});
        if (!(this.props.user && this.props.user._id)) {
          await this.props.actions.getProfile();
        }
        this.props.navigation.replace('CardsList');
      } else {
        this.props.navigation.replace('Introduction');
      }
    } catch (err) {
      console.log('err', err);
      this.clearLocalData();
      this.props.navigation.replace('Introduction');
    }
  };

  clearLocalData = () => {
    this.props.actions.unauthorize();
  };

  render() {
    return (
      <View style={styles.root}>
        <StatusBar backgroundColor="#8C9599" barStyle="light-content" />
        <Spinner />
        <NotificationManager />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.account.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getToken: authOperations.getToken,
        getProfile: accountOperations.getProfile,
        unauthorize: authOperations.unauthorize,
      },
      dispatch,
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
