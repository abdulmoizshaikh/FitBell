import React, {useState} from 'react';
// import PushNotification from 'react-native-push-notification';
import {store} from '../../store';
import {AuthActions} from '../../store/actions';
export var myToken = 'hello';

// PushNotification.configure({
//   // (optional) Called when Token is generated (iOS and Android)
//   onRegister: token => {
//     //store.dispatch(AuthActions.getToken(token));
//     myToken = token;
//     console.log('TOKEN:', myToken);
//   },
//   // (required) Called when a remote or local notification is opened or received
//   onNotification: function(notification) {
//     console.log('REMOTE NOTIFICATION ==>', notification);
//     PushNotification.presentLocalNotification(notification);
//     // process the notification here
//   },
//   // Android only: GCM or FCM Sender ID
//   senderID: '256218572662',
//   popInitialNotification: true,
//   requestPermissions: true,
// });
