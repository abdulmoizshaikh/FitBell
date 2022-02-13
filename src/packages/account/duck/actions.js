import * as types from "./types";


// PROFILE



// action for getProfile
export const getProfileRequest = () => ({
    type: types.GET_PROFILE_REQUEST,
})

export const getProfileSuccess = (data) => ({
    type: types.GET_PROFILE_SUCCESS,
    payload: data
});

export const getProfileFailed = () => ({
    type: types.GET_PROFILE_FAILED,
});



// action for updateProfile
export const updateProfileRequest = () => ({
    type: types.UPDATE_PROFILE_REQUEST,
})

export const updateProfileSuccess = (data) => ({
    type: types.UPDATE_PROFILE_SUCCESS,
    payload: data
});

export const updateProfileFailed = () => ({
    type: types.UPDATE_PROFILE_FAILED,
});
















// ALLERGIES


// action for getAllergeis
export const getAllergiesRequest = () => ({
    type: types.GET_ALLERGIES_REQUEST,
})

export const getAllergiesSuccess = (data) => {
    return {
        type: types.GET_ALLERGIES_SUCCESS,
        payload: data
    }
};

export const getAllergiesFailed = () => ({
    type: types.GET_ALLERGIES_FAILED,
});



// update my other allergies
export const updateMyOtherAllergies = (data) => ({
    type: types.UPDATE_MY_OTHER_ALLERGIES,
    payload: data
})


// action for update my allergies
export const updateMyAllergiesRequest = () => ({
    type: types.UPDATE_MY_ALLERGIES_REQUEST,
})

export const updateMyAllergiesSuccess = (data) => ({
    type: types.UPDATE_MY_ALLERGIES_SUCCESS,
    payload: data
});

export const updateMyAllergiesFailed = () => ({
    type: types.UPDATE_MY_ALLERGIES_FAILED,
});




// action for get my allergies
export const getMyAllergiesRequest = () => ({
    type: types.GET_MY_ALLERGIES_REQUEST,
})

export const getMyAllergiesSuccess = (data) => ({
    type: types.GET_MY_ALLERGIES_SUCCESS,
    payload: data
});

export const getMyAllergiesFailed = () => ({
    type: types.GET_MY_ALLERGIES_FAILED,
});














// RESTRICTIONS


// action for getrestictions
export const getRestrictionsRequest = () => ({
    type: types.GET_RESTRICTIONS_REQUEST,
})

export const getRestrictionsSuccess = (data) => ({
    type: types.GET_RESTRICTIONS_SUCCESS,
    payload: data
});

export const getRestrictionsFailed = () => ({
    type: types.GET_RESTRICTIONS_FAILED,
});



// action for update my restrictions
export const updateMyRestrictionsRequest = () => ({
    type: types.UPDATE_MY_RESTRICTIONS_REQUEST,
})

export const updateMyRestrictionsSuccess = (data) => ({
    type: types.UPDATE_MY_RESTRICTIONS_SUCCESS,
    payload: data
});

export const updateMyRestrictionsFailed = () => ({
    type: types.UPDATE_MY_RESTRICTIONS_FAILED,
});


// action for  updateMyOtherRestrictions
export const updateMyOtherRestrictions = (data) => ({
    type: types.UPDATE_MY_OTHER_RESTRICTIONS,
    payload: data
})



// action for get my restrictions
export const getMyRestrictionsRequest = () => ({
    type: types.GET_MY_RESTRICTIONS_REQUEST,
})

export const getMyRestrictionsSuccess = (data) => ({
    type: types.GET_MY_RESTRICTIONS_SUCCESS,
    payload: data
});

export const getMyRestrictionsFailed = () => ({
    type: types.GET_MY_RESTRICTIONS_FAILED,
});
















// Fitness  Goals

export const getFitnessGoalsRequest = () => ({
    type: types.GET_FITNESS_GOALS_REQUEST
})


export const getFitnessGoalsSuccess = (data) => ({
    type: types.GET_FITNESS_GOALS_SUCCESS,
    payload: data
})

export const toggleGoal = (data) => ({
    type: types.TOGGLE_FITNESS_GOAL,
    payload: data
})

export const getFitnessGoalsFailed = () => ({
    type: types.GET_FITNESS_GOALS_FAILED
})





// update my fitness goal
export const updateMyFitnessGoal = (data) => ({
    type: types.UPDATE_MY_FITNESS_GOAL,
    payload: data
})





//update Fitness  Goals
export const updateFitnessGoalsRequest = () => ({
    type: types.UPDATE_FITNESS_GOALS_REQUEST
})


export const updateFitnessGoalsSuccess = (data) => ({
    type: types.UPDATE_FITNESS_GOALS_SUCCESS,
    payload: data
})


export const updateFitnessGoalsFailed = () => ({
    type: types.UPDATE_FITNESS_GOALS_FAILED
})













// Settings

export const setAllowNotification = (data) => ({
    type: types.SET_ALLOW_NOTIFICATION,
    payload: data
})


export const setConfirmOrder = (data) => ({
    type: types.SET_CONFIRM_ORDER,
    payload: data
})


export const setConfirmationType = (data) => ({
    type: types.SET_CONFIRMATION_TYPE,
    payload: data
})















// DELIVERY



// add delivery address

export const addDeliveryAddressRequest = () => ({
    type: types.ADD_DELIVERY_ADDRESS_REQUEST,
})

export const addDeliveryAddressSuccess = (data) => ({
    type: types.ADD_DELIVERY_ADDRESS_SUCCESS,
    payload: data
})

export const addDeliveryAddressFailed = () => ({
    type: types.ADD_DELIVERY_ADDRESS_FAILED,
})






// action for GET_DELIVERY_ADDRESS
export const getDeliveryAddressRequest = () => ({
    type: types.GET_DELIVERY_ADDRESS_REQUEST,
})

export const getDeliveryAddressSuccess = (data) => ({
    type: types.GET_DELIVERY_ADDRESS_SUCCESS,
    payload: data
});

export const getDeliveryAddressFailed = () => ({
    type: types.GET_DELIVERY_ADDRESS_FAILED,
});

export const toggleDeliveryAddress = (data) => ({
    type: types.TOGGLE_DELIVERY_ADDRESS,
    payload: data
})












// PAYMENT



// add payment method

export const addPaymentMethodRequest = () => ({
    type: types.ADD_PAYMENT_METHOD_REQUEST,
})

export const addPaymentMethodSuccess = (data) => ({
    type: types.ADD_PAYMENT_METHOD_SUCCESS,
    payload: data
})

export const addPaymentMethodFailed = () => ({
    type: types.ADD_PAYMENT_METHOD_FAILED,
})






// action for get all payment method

export const getPaymentMethodsRequest = () => ({
    type: types.GET_PAYMENT_METHODS_REQUEST,
})

export const getPaymentMethodsSuccess = (data) => ({
    type: types.GET_PAYMENT_METHODS_SUCCESS,
    payload: data
});

export const getPaymentMethodsFailed = () => ({
    type: types.GET_PAYMENT_METHODS_FAILED,
});





// action for set default payment method

export const setDefaultPaymentMethodRequest = () => ({
    type: types.SET_DEFAULT_PAYMENT_METHOD_REQUEST,
})

export const setDefaultPaymentMethodSuccess = (data) => ({
    type: types.SET_DEFAULT_PAYMENT_METHOD_SUCCESS,
    payload: data
});

export const setDefaultPaymentMethodFailed = () => ({
    type: types.SET_DEFAULT_PAYMENT_METHOD_FAILED,
});










// Subscriptions



// action for get Subscriptions
export const getSubscriptionsRequest = () => ({
    type: types.GET_SUBSCRIPTIONS_REQUEST,
})

export const getSubscriptionsSuccess = (data) => ({
    type: types.GET_SUBSCRIPTIONS_SUCCESS,
    payload: data
});

export const getSubscriptionsFailed = () => ({
    type: types.GET_SUBSCRIPTIONS_FAILED,
});






// action for update Subscriptions
export const updateSubscriptionRequest = () => ({
    type: types.UPDATE_SUBSCRIPTION_REQUEST,
})

export const updateSubscriptionSuccess = (data) => ({
    type: types.UPDATE_SUBSCRIPTION_SUCCESS,
    payload: data
});

export const updateSubscriptionFailed = () => ({
    type: types.UPDATE_SUBSCRIPTION_FAILED,
});

