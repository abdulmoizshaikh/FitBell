import * as types from "./types";


// Clear state when component will unmount execute
export const onUnMountComponent = (data) => ({
    type: types.ON_UNMOUNT_COMPONENT,
    payload: data
})



// EXPLORE

// action for  getExploreProducts
export const getExploreProductsRequest = () => ({
    type: types.GET_EXPLORE_PRODUCTS_REQUEST,
})

export const getExploreProductsSuccess = (data) => ({
    type: types.GET_EXPLORE_PRODUCTS_SUCCESS,
    payload: data
});

export const getExploreProductsFailed = () => ({
    type: types.GET_EXPLORE_PRODUCTS_FAILED,
});







// action for getExploreProductDetails
export const getExploreProductDetailsRequest = () => ({
    type: types.GET_EXPLORE_PRODUCT_DETAILS_REQUEST,
})

export const getExploreProductDetailsSuccess = (data) => ({
    type: types.GET_EXPLORE_PRODUCT_DETAILS_SUCCESS,
    payload: data
});

export const getExploreProductDetailsFailed = () => ({
    type: types.GET_EXPLORE_PRODUCT_DETAILS_FAILED,
});










// FAVOURITE

// action for  get favourite products
export const getFavouriteProductsRequest = () => ({
    type: types.GET_FAVOURITE_PRODUCTS_REQUEST,
})

export const getFavouriteProductsSuccess = (data) => ({
    type: types.GET_FAVOURITE_PRODUCTS_SUCCESS,
    payload: data
});

export const getFavouriteProductsFailed = () => ({
    type: types.GET_FAVOURITE_PRODUCTS_FAILED,
});




// action for  ADD favourite products
export const addFavouriteProductsRequest = () => ({
    type: types.ADD_FAVOURITE_PRODUCTS_REQUEST,
})

export const addFavouriteProductsSuccess = (data) => ({
    type: types.ADD_FAVOURITE_PRODUCTS_SUCCESS,
    payload: data
});

export const addFavouriteProductsFailed = () => ({
    type: types.ADD_FAVOURITE_PRODUCTS_FAILED,
});

