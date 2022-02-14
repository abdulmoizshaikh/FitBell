// import { AsyncStorage } from 'react-native';
import {accountActions} from './index';
import {authActions} from '../../auth/duck';
import {snackbarActions} from '../../snackbar/duck';
import {orderActions} from '../../orders/duck';
import APIService from '../../../common/utils/api-service-instance';
import {AsyncStorage} from 'react-native';

// PROFILE

// in post man Auth/Update Profile
const getProfile = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getProfileRequest());
    }
    async function onSuccess(response) {
      let profile = {...response.data};
      delete profile.access_token;
      AsyncStorage.setItem('profile', JSON.stringify(profile));
      dispatch(accountActions.getProfileSuccess(profile));
      dispatch(authActions.loginSuccess(response));
      resolve(response);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getProfileFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/me',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// in post man Auth/Update Profile
const updateProfile = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.updateProfileRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.updateProfileSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.updateProfileFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'put',
      url: '/me',
      data: data.user,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// ALLERGIES

// in postman Ingredients/get ingredients
const getAllergies = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getAllergiesRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getAllergiesSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getAllergiesFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/ingredients',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// update my  other allergies
const updateMyOtherAllergies = data => dispatch => {
  return dispatch(accountActions.updateMyOtherAllergies(data));
};

// in post man Allergies/Update My Allergies
const updateMyAllergies = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.updateMyAllergiesRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.updateMyAllergiesSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.updateMyAllergiesFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'put',
      url: '/allergies/my',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// in postman allergies/get my allergies
const getMyAllergies = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getMyAllergiesRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getMyAllergiesSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getMyAllergiesFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/allergies/my',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// RESTRICTIONS

// in post man Restrictions/Get restrictions
const getRestrictions = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getRestrictionsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getRestrictionsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getRestrictionsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/restrictions',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// in postman Auth/Update profile
const updateMyRestrictions = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.updateMyRestrictionsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.updateMyRestrictionsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.updateMyRestrictionsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'put',
      url: '/me',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

//updateMyOtherRestrictions
const updateMyOtherRestrictions = data => dispatch => {
  dispatch(accountActions.updateMyOtherRestrictions(data));
};

// in postman Auth/get profile
const getMyRestrictions = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getMyRestrictionsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getMyRestrictionsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getMyRestrictionsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/me',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// Fitness

const getFitnessGoals = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getFitnessGoalsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getFitnessGoalsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getFitnessGoalsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/fitness-goals',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

const toggleGoal = goal => dispatch => {
  dispatch(accountActions.toggleGoal(goal));
};

// update myfitness goal
const updateMyFitnessGoal = data => dispatch => {
  dispatch(accountActions.updateMyFitnessGoal(data));
};

// in post man /me api
const updateFitnessGoal = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.updateFitnessGoalsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.updateFitnessGoalsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.updateFitnessGoalsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'put',
      url: '/me',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// SETTINGS

const setAllowNotification = data => dispatch => {
  dispatch(accountActions.setAllowNotification(data));
};

const setConfirmOrder = data => dispatch => {
  dispatch(accountActions.setConfirmOrder(data));
};

const setConfirmationType = data => dispatch => {
  dispatch(accountActions.setConfirmationType(data));
};

// DELIVERY

// for add delivery address
const addDeliveryAddress = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.addDeliveryAddressRequest());
    }
    async function onSuccess(response) {
      dispatch(
        snackbarActions.showSnackbar({
          message: response.message,
          type: 'success',
        }),
      );
      dispatch(accountActions.addDeliveryAddressSuccess(response.data));
      dispatch(orderActions.setLocationDetails(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.addDeliveryAddressFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'post',
      url: '/dropoffs',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// for get delivery address
const getDeliveryAddress = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getDeliveryAddressRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getDeliveryAddressSuccess(response.data));
      dispatch(orderActions.setLocationDetails(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getDeliveryAddressFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/dropoffs',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

const toggleDeliveryAddress = data => dispatch => {
  dispatch(accountActions.toggleDeliveryAddress(data));
};

const setDefaultLocationToUser = (location, token) => () => {
  return new Promise((resolve, reject) => {
    async function onSuccess(res) {
      resolve(res.data);
    }
    async function onError(err) {
      reject(err.response);
    }
    APIService.request({
      method: 'put',
      url: '/users/defaultSetting',
      data: location,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// PAYMENT

// for add payment method
const addPaymentMethod = data => dispatch => {
  //card token id in data
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.addPaymentMethodRequest());
    }
    async function onSuccess(response) {
      dispatch(
        snackbarActions.showSnackbar({
          message: response.message,
          type: 'success',
        }),
      );
      dispatch(accountActions.addPaymentMethodSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.addPaymentMethodFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'post',
      url: '/payment-methods',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// for get payment method
const getPaymentMethods = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getPaymentMethodsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getPaymentMethodsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getPaymentMethodsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/payment-methods',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// for setDefaultPaymentMethod
const setDefaultPaymentMethod = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.setDefaultPaymentMethodRequest());
    }
    async function onSuccess(response) {
      dispatch(
        snackbarActions.showSnackbar({
          message: response.message,
          type: 'success',
        }),
      );
      console.log('response.data', response.data);
      dispatch(accountActions.setDefaultPaymentMethodSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.setDefaultPaymentMethodFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'put',
      url: '/payment-methods/default',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// Subscriptions

// for get  Subscriptions
const getSubscriptions = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.getSubscriptionsRequest());
    }
    async function onSuccess(response) {
      dispatch(accountActions.getSubscriptionsSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      let errorResponse = err.response ? err.response.data : err;
      dispatch(
        snackbarActions.showSnackbar({
          message: errorResponse.message,
          type: 'danger',
        }),
      );
      dispatch(accountActions.getSubscriptionsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/subscription',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// in update subscriptions

const updateSubscription = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(accountActions.updateSubscriptionRequest());
    }
    async function onSuccess(response) {
      // console.log("response.date", response.data)
      dispatch(accountActions.updateSubscriptionSuccess(response.data));
      resolve(response.data);
    }
    async function onError(err) {
      // console.log("ERROR:", err)
      if (err.response.status === 424) {
        dispatch(accountActions.updateSubscriptionFailed());
        reject(err.response);
      } else {
        let errorResponse = err.response ? err.response.data : err;
        dispatch(
          snackbarActions.showSnackbar({
            message: errorResponse.message,
            type: 'danger',
          }),
        );
        dispatch(accountActions.updateSubscriptionFailed());
        reject(err.response);
      }
    }
    onRequest();
    APIService.request({
      method: 'put',
      url: '/purchaseSubscription',
      data: data, //here data replace with subscription id
    })
      .then(onSuccess)
      .catch(onError);
  });
};

export {
  getProfile,
  updateProfile,
  getAllergies,
  updateMyOtherAllergies,
  updateMyAllergies,
  getMyAllergies,
  getRestrictions,
  updateMyRestrictions,
  updateMyOtherRestrictions,
  getMyRestrictions,
  getFitnessGoals,
  updateMyFitnessGoal,
  toggleGoal,
  updateFitnessGoal,
  setAllowNotification,
  setConfirmOrder,
  setConfirmationType,
  addDeliveryAddress,
  getDeliveryAddress,
  toggleDeliveryAddress,
  setDefaultLocationToUser,
  addPaymentMethod,
  getPaymentMethods,
  setDefaultPaymentMethod,
  getSubscriptions,
  updateSubscription,
};
