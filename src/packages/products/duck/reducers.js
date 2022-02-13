import * as types from "./types";


let initialState = {
    isFetching: false,

    // // For Explore
    exploreProducts: {
        count: 0,
        data: [],
    },

    // For Explore product details
    exploreProductDetails: {
        ingredients: []
    },

    // For Favourite products
    favouriteProducts: {
        data: []
    },
    // myFavouriteProduct: ""
};


const productsReducer = (state = initialState, action) => {
    let products = [];
    let productDetails = {};
    let favouriteProductsData = [];

    switch (action.type) {

        // Clear state when component will unmount execute
        case types.ON_UNMOUNT_COMPONENT:
            switch (action.payload.name) {
                case "CardDetailsContainer":
                    return {
                        ...state,
                        // clear meal details
                        exploreProductDetails: {
                            ingredients: []
                        }
                    }
                default:
                    return {
                        ...state
                    }
            }



        // EXPLORE

        // get explore products 
        case types.GET_EXPLORE_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_EXPLORE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                exploreProducts: {
                    ...state.exploreProducts,
                    ...action.payload,
                    count: action.payload.count,
                    data: action.payload.data
                },
            };

        case types.GET_EXPLORE_PRODUCTS_FAILED:
            return {
                ...state,
                isFetching: false
            };






        // get explore product details

        case types.GET_EXPLORE_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_EXPLORE_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                exploreProductDetails: {
                    ...state.exploreProductDetails,
                    ...action.payload,
                    ingredients: action.payload.ingredients
                }
            };

        case types.GET_EXPLORE_PRODUCT_DETAILS_FAILED:
            return {
                ...state,
                isFetching: false
            };









        // FAVOURITE


        // get  favouriteProducts 
        case types.GET_FAVOURITE_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_FAVOURITE_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                favouriteProducts: {
                    ...state.favouriteProducts,
                    ...action.payload,
                    data: action.payload.data
                }
            };

        case types.GET_FAVOURITE_PRODUCTS_FAILED:
            return {
                ...state,
                isFetching: false
            };



        // add to  favouriteProducts 
        case types.ADD_FAVOURITE_PRODUCTS_REQUEST:
            return {
                ...state,
                isFetching: true
            };


        case types.ADD_FAVOURITE_PRODUCTS_SUCCESS:

            products = state.exploreProducts.data;
            products = products.map(product => {
                if (product._id === action.payload.product._id) {
                    return { ...product, is_favourite: !product.is_favourite }
                }
                return product;
            })

            // For Favourite
            productDetails = { ...state.exploreProductDetails };       //obj
            favouriteProductsData = [...state.favouriteProducts.data]; //array
            if (productDetails.is_favourite) {
                favouriteProductsData = favouriteProductsData.filter(favouriteProduct => favouriteProduct._id !== productDetails._id)
            } else {
                productDetails.is_favourite = !productDetails.is_favourite
                favouriteProductsData = favouriteProductsData.concat(productDetails);
            }
            // console.log('favouriteProductsData', favouriteProductsData)

            return {
                ...state,
                isFetching: false,
                exploreProductDetails: {
                    ...state.exploreProductDetails,
                    is_favourite: !state.exploreProductDetails.is_favourite
                },
                exploreProducts: {
                    ...state.exploreProducts,
                    data: products,
                },
                favouriteProducts: {
                    ...state.favouriteProducts,
                    data: favouriteProductsData
                },
            };



        case types.ADD_FAVOURITE_PRODUCTS_FAILED:
            return {
                ...state,
                isFetching: false
            };







        default: return state
    }
}

export default productsReducer;