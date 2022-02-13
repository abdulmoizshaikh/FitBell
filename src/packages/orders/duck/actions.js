import * as types from "./types";




// PICKUP LOCATIONS

// action for  getpickup locations
export const getPickUpLocationsRequest = () => ({
    type: types.GET_PICKUP_LOCATIONS_REQUEST,
})

export const getPickUpLocationsSuccess = (data) => ({
    type: types.GET_PICKUP_LOCATIONS_SUCCESS,
    payload: data
});

export const getPickUpLocationsFailed = () => ({
    type: types.GET_PICKUP_LOCATIONS_FAILED,
});









// add product  details
export const setOrderedProductDetails = (data) => ({
    type: types.SET_ORDERED_PRODUCT_DETAILS,
    payload: data
})

// add location details
export const setOrderDate = (data) => ({
    type: types.SET_ORDER_DATE,
    payload: data
})

// add location details
export const setLocationDetails = (data) => ({
    type: types.SET_LOCATION_DETAILS,
    payload: data
})

// for setDeliverytype
export const setDeliveryType = (data) => ({
    type: types.SET_DELIVERY_TYPE,
    payload: data
})









// ADD ORDER /place order

export const addOrderRequest = () => ({
    type: types.ADD_ORDER_REQUEST,
})

export const addOrderSuccess = (data) => ({
    type: types.ADD_ORDER_SUCCESS,
    payload: data
});

export const addOrderFailed = () => ({
    type: types.ADD_ORDER_FAILED,
});







// GET MY ORDERS

export const getMyOrdersRequest = () => ({
    type: types.GET_MY_ORDERS_REQUEST,
})

export const getMyOrdersSuccess = (data) => ({
    type: types.GET_MY_ORDERS_SUCCESS,
    payload: data
});

export const getMyOrdersFailed = () => ({
    type: types.GET_MY_ORDERS_FAILED,
});









