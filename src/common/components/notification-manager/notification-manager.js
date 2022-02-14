import React from 'react';
// import OneSignal from 'react-native-onesignal';
import configs from '../../config';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {withNavigation} from '@react-navigation/native';
import * as authOperations from '../../../packages/auth/duck/operations';

class NotificationManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalForOneSignalConfigure: null,
    };
  }

  componentDidMount() {
    this.configure();
  }

  configure = () => {
    // OneSignal.init(configs.ONESIGNAL_APPID);
    // OneSignal.addEventListener('received', this.onReceived);
    // OneSignal.addEventListener('opened', this.onOpened);
    // OneSignal.addEventListener('ids', this.onIds);
    // this.setState({
    //   intervalForOneSignalConfigure: setInterval(() => {
    //     OneSignal.configure();
    //   }, 1000),
    // });
  };

  onIds = device => {
    if (device.userId) {
      this.props.actions.saveDeviceId(device.userId);
      clearInterval(this.state.intervalForOneSignalConfigure);
    }
  };

  onReceived = notification => {};

  onOpened = openResult => {
    let data = openResult.notification.payload.additionalData;
    // console.log(data)
  };

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        saveDeviceId: authOperations.saveDeviceId,
      },
      dispatch,
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(NotificationManager));
