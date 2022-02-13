import accountReducer from "./reducers";

// import * as duckSelectors from "./selectors";
import * as accountOperations from "./operations";
import * as accountActions from "./actions";
import * as accountTypes from "./types";

export {
    accountOperations,
    accountActions,
    accountTypes
};

export default accountReducer;