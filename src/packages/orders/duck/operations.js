import {orderActions} from './index';
import {snackbarActions} from '../../snackbar/duck';
import APIService from '../../../common/utils/api-service-instance';

// ORDER

// PICKUP LOCATIONS

// in post man STORES/ GET STORES
const getPickUpLocations = () => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(orderActions.getPickUpLocationsRequest());
    }
    async function onSuccess(response) {
      dispatch(orderActions.getPickUpLocationsSuccess(response.data));
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
      dispatch(orderActions.getPickUpLocationsFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/stores',
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// FOR SET PRODUCTdetails IN REDUX
const setOrderedProductDetails = data => dispatch => {
  dispatch(orderActions.setOrderedProductDetails(data));
};

const setOrderDate = data => dispatch => {
  dispatch(orderActions.setOrderDate(data));
};

// SET LOCATIONS DETAILS IN REDUX
const setLocationDetails = data => dispatch => {
  dispatch(orderActions.setLocationDetails(data));
};

const setDeliveryType = data => dispatch => {
  dispatch(orderActions.setDeliveryType(data));
};

//  ADD ORDER

// in post man Ordes/add order
const addOrder = data => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(orderActions.addOrderRequest());
    }
    async function onSuccess(response) {
      dispatch(orderActions.addOrderSuccess(response.data));
      resolve(response);
    }
    async function onError(err) {
      if (err.response.status === 417) {
        reject(err.response);
        dispatch(orderActions.addOrderFailed());
      } else {
        let errorResponse = err.response ? err.response.data : err;
        dispatch(
          snackbarActions.showSnackbar({
            message: errorResponse.message,
            type: 'danger',
          }),
        );
        dispatch(orderActions.addOrderFailed());
        reject(errorResponse);
      }
    }
    onRequest();
    APIService.request({
      method: 'post',
      url: '/orders',
      data: data,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

// for getMyOrders orders/getmyorders not admin
const getMyOrders = (token, params) => dispatch => {
  return new Promise((resolve, reject) => {
    async function onRequest() {
      dispatch(orderActions.getMyOrdersRequest());
    }
    async function onSuccess(response) {
      dispatch(orderActions.getMyOrdersSuccess(response.data));
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
      dispatch(orderActions.getMyOrdersFailed());
      reject(err);
    }
    onRequest();
    APIService.request({
      method: 'get',
      url: '/orders/my',
      params: params,
    })
      .then(onSuccess)
      .catch(onError);
  });
};

export {
  getPickUpLocations,
  setOrderedProductDetails,
  setOrderDate,
  setDeliveryType,
  setLocationDetails,
  addOrder,
  getMyOrders,
};
