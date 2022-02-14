import React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';
import {store} from '../../store';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: any = {}) {
  _navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}

//test start
function push(routeName: string, params: any) {
  _navigator.dispatch(
    StackActions.push(routeName, {
      params,
    }),
  );
}
//test end

function goBack() {
  _navigator.dispatch(CommonActions.goBack());
}

// function replace(routeName, params) {
//   _navigator.dispatch(
//     CommonActions.replace({
//       routeName,
//       params,
//     }),
//   );
// }

function reset_0(routeName: string) {
  _navigator.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: routeName}],
    }),
  );
}

export default {
  setTopLevelNavigator,
  navigate,
  // replace,
  goBack,
  reset_0,
  push,
};
