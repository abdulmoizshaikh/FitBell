/**
 * @format
 */
import {AppRegistry, LogBox} from 'react-native';
import {name as appName} from './app.json';
import {startNetworkLogging} from 'react-native-network-logger';
import {Variable} from './src/constants';
import {ENV} from './src/constants/config/env';
import Root from './src/Root';
import 'react-native-gesture-handler';

// Starts network logging
if (ENV.BUILD_ENV !== Variable.PRODUCTION) {
  startNetworkLogging();
}

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

AppRegistry.registerComponent(appName, () => Root);
