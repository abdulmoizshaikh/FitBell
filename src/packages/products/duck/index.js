import productReducer from "./reducers";

// import * as duckSelectors from "./selectors";
import * as productOperations from "./operations";
import * as productActions from "./actions";
import * as productTypes from "./types";

export {
    productOperations,
    productActions,
    productTypes
};

export default productReducer;