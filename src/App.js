import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RootStackScreen from './navigation';
import {NavigationService} from './services';
import {Provider} from 'react-redux';
import {store} from './root-store';
import {NativeBaseProvider} from 'native-base';
import {NetworkLoggerWidget} from './common/components/NetworkLoggerWidget';
import {Variable} from './constants';
// import {ENV} from './constants/config/env';
// global styles init
import './theme/styles/globalStyles';
import {AuthContext} from './context';
import {nativeBaseExtendedTheme} from '../native-base-extended-theme';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  React.useEffect(() => {
    NavigationService.setTopLevelNavigator(navigationRef);
  }, []);

  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setUserToken('asdf');
      },
      signUp: () => {
        setUserToken('asdf');
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NativeBaseProvider theme={nativeBaseExtendedTheme}>
        <Provider store={store}>
          <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
            <NavigationContainer ref={navigationRef}>
              <RootStackScreen userToken={userToken} />
              {process.env.BUILD_ENV === Variable.PRODUCTION ? (
                false
              ) : (
                <NetworkLoggerWidget />
              )}
            </NavigationContainer>
          </KeyboardAvoidingView>
        </Provider>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
};

export default App;
