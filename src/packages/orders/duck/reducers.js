import * as types from "./types";

let initialState = {
    isFetching: false,

    // for pickup locations
    pickUpLocations: {
        data: []
    },

    // for order
    orderDetails: {
        orderedProductDetails: {},
        orderDate: "",
        locationDetails: {},
        deliveryType: ""
    },
    //from getmyorders api
    myOrders: {
        data: []
    }
}


const orderReducer = (state = initialState, action) => {
    switch (action.type) {



        // PICKUP LOCATIONS

        // get pickup locations 
        case types.GET_PICKUP_LOCATIONS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_PICKUP_LOCATIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                pickUpLocations: {
                    ...state.pickUpLocations,
                    ...action.payload,
                    data: action.payload.data
                }
            };

        case types.GET_PICKUP_LOCATIONS_FAILED:
            return {
                ...state,
                isFetching: false
            };










        // add product
        case types.SET_ORDERED_PRODUCT_DETAILS:
            return {
                ...state,
                orderDetails: {
                    ...state.orderDetails,
                    orderedProductDetails: action.payload,
                }
            };

        // SET_ORDER_DATE
        case types.SET_ORDER_DATE:
            return {
                ...state,
                orderDetails: {
                    ...state.orderDetails,
                    orderDate: action.payload,
                }
            };


        // add LOCATION ID
        case types.SET_LOCATION_DETAILS:
            return {
                ...state,
                orderDetails: {
                    ...state.orderDetails,
                    locationDetails: action.payload,
                }
            };


        //  SET_DELIVERY_TYPE
        case types.SET_DELIVERY_TYPE:
            return {
                ...state,
                orderDetails: {
                    ...state.orderDetails,
                    deliveryType: action.payload
                }
            };

       




        // ADD_ORDER || PLACE ORDER

        case types.ADD_ORDER_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.ADD_ORDER_SUCCESS:
            return {
                ...state,
                isFetching: false,
            };

        case types.ADD_ORDER_FAILED:
            return {
                ...state,
                isFetching: false
            };



        // ADD_ORDER || PLACE ORDER

        case types.GET_MY_ORDERS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_MY_ORDERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                myOrders: {
                    ...state.myOrders,
                    ...action.payload,
                    data: action.payload.data
                }
            };

        case types.GET_MY_ORDERS_FAILED:
            return {
                ...state,
                isFetching: false
            };





        default: return state
    }
}
























export default orderReducer;