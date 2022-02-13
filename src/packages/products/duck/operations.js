import { productActions } from './index';
import { snackbarActions } from "../../snackbar/duck";
import APIService from "../../../common/utils/api-service-instance";

// Clear state when component will unmount execute
const onUnMountComponent = (data) => (dispatch) => {
    //here data is object with name  property of component
    dispatch(productActions.onUnMountComponent(data));
}


// EXPLORE

// in post man products/ products suggestion
const getExploreProducts = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(productActions.getExploreProductsRequest()) }
        async function onSuccess(response) {
            dispatch(productActions.getExploreProductsSuccess(response.data));
            resolve(response.data)
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(productActions.getExploreProductsFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'get', url: '/products/suggestion'
        }).then(onSuccess).catch(onError);
    })
}



// in post man products/ get product details
const getExploreProductDetails = (itemId) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(productActions.getExploreProductDetailsRequest()) }
        async function onSuccess(response) {
            dispatch(productActions.getExploreProductDetailsSuccess(response.data));
            resolve(response.data)
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(productActions.getExploreProductDetailsFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'get', url: `/products/${itemId}`
        }).then(onSuccess).catch(onError);
    })
}



// FAVOURITE

// getfavourite products in postman products/get favourite products
const getFavouriteProducts = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(productActions.getFavouriteProductsRequest()) }
        async function onSuccess(response) {
            dispatch(productActions.getFavouriteProductsSuccess(response.data));
            resolve(response.data)
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(productActions.getFavouriteProductsFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'get', url: '/products/favorite'
        }).then(onSuccess).catch(onError);
    })
}




// in post man products/products favourite
const addFavouriteProducts = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        async function onRequest() { dispatch(productActions.addFavouriteProductsRequest()) }
        async function onSuccess(response) {
            dispatch(productActions.addFavouriteProductsSuccess(response));
            resolve(response)
        }
        async function onError(err) {
            let errorResponse = err.response ? err.response.data : err;
            dispatch(snackbarActions.showSnackbar({ message: errorResponse.message, type: "danger" }))
            dispatch(productActions.addFavouriteProductsFailed());
            reject(err);
        }
        onRequest();
        APIService.request({
            method: 'post', url: '/products/favorite', data: { product_id: data.product._id }
        }).then(onSuccess).catch(onError);
    })
}




export {
    getExploreProducts,
    getExploreProductDetails,
    onUnMountComponent,
    getFavouriteProducts,
    addFavouriteProducts,
}