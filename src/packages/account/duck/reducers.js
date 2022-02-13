import * as types from "./types";
import subscription from "../subscription";

let initialState = {

    isFetching: false,
    // For Profile
    user: {},


    // For Allergies
    allergies: {
        ingredients: [],
        count: 0
    },
    myOtherAllergies: [],
    myAllergies: [],


    // For Restrictions
    restrictions: {
        count: 0,
        data: []
    },
    myOtherRestrictions: [],
    myRestrictions: [],


    // fitness goals
    fitnessGoals: {
        count: 0,
        data: [],
    },
    myFitnessGoal: "",
    fitnessGoal: '',



    // DELIVERY
    // for add delivery address temporary state after make new state for this
    deliveryAddress: {
        data: []
    }, //this is for both add and get delivery address



    // Payment 
    paymentMethods: {
        data: []
    },

    // subscriptions
    subscriptions: []
};


const accountReducer = (state = initialState, action) => { //this should be profile reducer
    switch (action.type) {




        // PROFILE

        // get profile 
        case types.GET_PROFILE_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_PROFILE_SUCCESS:

            return {
                ...state,
                isFetching: false,
                user: action.payload
            };

        case types.GET_PROFILE_FAILED:
            return {
                ...state,
                isFetching: false
            };


        // update profile 
        case types.UPDATE_PROFILE_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            };

        case types.UPDATE_PROFILE_FAILED:
            return {
                ...state,
                isFetching: false
            };













        // ALLERGIES

        // get allergies
        case types.GET_ALLERGIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_ALLERGIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                allergies: {
                    ...state.allergies,
                    ...action.payload,
                    ingredients: action.payload.data,
                    count: action.payload.count
                }
            };

        case types.GET_ALLERGIES_FAILED:
            return {
                ...state,
                isFetching: false
            };


        // update my allergies
        case types.UPDATE_MY_ALLERGIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.UPDATE_MY_ALLERGIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                myAllergies: action.payload.allergies
            };

        case types.UPDATE_MY_ALLERGIES_FAILED:
            return {
                ...state,
                isFetching: false
            };


        // update my  other allergies 
        case types.UPDATE_MY_OTHER_ALLERGIES:
            // console.log('other allergies in action.payload', action.payload);
            return {
                ...state,
                myOtherAllergies: action.payload
            }


        // get my allergies
        case types.GET_MY_ALLERGIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_MY_ALLERGIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                myAllergies: action.payload.allergies
            };

        case types.GET_MY_ALLERGIES_FAILED:
            return {
                ...state,
                isFetching: false
            };
















        // RESTRICTIONS



        // get restrictions
        case types.GET_RESTRICTIONS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_RESTRICTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                restrictions: {
                    ...state.restrictions,
                    ...action.payload,
                    count: action.payload.count,
                    data: action.payload.data
                }
            };

        case types.GET_RESTRICTIONS_FAILED:
            return {
                ...state,
                isFetching: false
            };






        // update my restrictions
        case types.UPDATE_MY_RESTRICTIONS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.UPDATE_MY_RESTRICTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                myRestrictions: action.payload.restrictions
            };

        case types.UPDATE_MY_RESTRICTIONS_FAILED:
            return {
                ...state,
                isFetching: false
            };



        // update my  other restrictions 
        case types.UPDATE_MY_OTHER_RESTRICTIONS:
            // console.log('other Restrictions in action.payload', action.payload);
            return {
                ...state,
                myOtherRestrictions: action.payload
            }



        // get my restrictions
        case types.GET_MY_RESTRICTIONS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_MY_RESTRICTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                myRestrictions: action.payload.restrictions
            };

        case types.GET_MY_RESTRICTIONS_FAILED:
            return {
                ...state,
                isFetching: false
            };












        // FITNESS GOALS



        // get Fitness goals
        case types.GET_FITNESS_GOALS_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.GET_FITNESS_GOALS_SUCCESS:

            fitnessGoals = action.payload.data;
            fitnessGoals = fitnessGoals.map((goal) => {
                children = goal.children.map((child) => {
                    return { ...child, isAdded: false }
                })
                return { ...goal, children: children, isParent: false }
            })
            return {
                ...state,
                isFetching: false,
                fitnessGoals: {
                    // ...action.payload,
                    data: [...fitnessGoals],
                    count: action.payload.count
                }
            }
        case types.TOGGLE_FITNESS_GOAL:
            fitnessGoals = [...state.fitnessGoals.data];
            fitnessGoals = fitnessGoals.map((goal) => {
                children = goal.children.map((child) => {
                    if (child._id === action.payload._id) {
                        return { ...child, isAdded: !child.isAdded }
                    }
                    return { ...child, isAdded: false };

                })
                return { ...goal, children: children }
            })
            return {
                ...state,
                isFetching: false,
                fitnessGoals: {
                    // ...action.payload,
                    data: [...fitnessGoals],
                    count: action.payload.count
                }
            }

        case types.GET_FITNESS_GOALS_FAILED:
            return {
                ...state,
                isFetching: false
            }


        // update my fitness goal
        case types.UPDATE_MY_FITNESS_GOAL: {
            return {
                ...state,
                myFitnessGoal: action.payload
            }
        }


        // updatefitnessgoal
        case types.UPDATE_FITNESS_GOALS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }

        case types.UPDATE_FITNESS_GOALS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                fitnessGoal: action.payload.fitness_goal._id  //here we  recieve an object in action . payloadwith key of fitness_goal and val is obj
            }

        case types.UPDATE_FITNESS_GOALS_FAILED:
            return {
                ...state,
                isFetching: false
            }










        // SETTINGS page

        case types.SET_ALLOW_NOTIFICATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    allow_notification: action.payload
                }
            }


        case types.SET_CONFIRM_ORDER:
            return {
                ...state,
                user: {
                    ...state.user,
                    confirm_order: action.payload
                }
            }


        case types.SET_CONFIRMATION_TYPE:
            return {
                ...state,
                user: {
                    ...state.user,
                    confirmation_type: action.payload
                }
            }














        // DELIVERY

        // /for add delivery address
        case types.ADD_DELIVERY_ADDRESS_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.ADD_DELIVERY_ADDRESS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                deliveryAddress: {
                    ...state.deliveryAddress,
                    data: [...state.deliveryAddress.data, action.payload]
                }
            }

        case types.ADD_DELIVERY_ADDRESS_FAILED:
            return {
                ...state,
                isFetching: false
            }



        // /for get delivery address
        case types.GET_DELIVERY_ADDRESS_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.GET_DELIVERY_ADDRESS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                deliveryAddress: {
                    ...state.deliveryAddress,
                    ...action.payload,
                    data: action.payload.data
                }
            }

        case types.TOGGLE_DELIVERY_ADDRESS:
            deliveryAddress = [...state.deliveryAddress.data];
            deliveryAddress = deliveryAddress.map((address) => {
                if (address._id === action.payload._id) {
                    // console.log("selected goal", child.isAdded)
                    return { ...address, is_active: !address.is_active }
                } else {
                    return { ...address, is_active: false }
                }
                // return address;
            })
            return {
                ...state,
                deliveryAddress: {
                    ...state.deliveryAddress,
                    data: [...deliveryAddress]
                }
            }
        case types.GET_DELIVERY_ADDRESS_FAILED:
            return {
                ...state,
                isFetching: false
            }









        // payment

        // /for add payment methods

        case types.ADD_PAYMENT_METHOD_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.ADD_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                paymentMethods: {
                    ...state.paymentMethods,
                    data: state.paymentMethods.data.concat(action.payload)
                }
                // deliveryAddress: {
                //     ...state.deliveryAddress,
                //     data: state.deliveryAddress.data.concat(action.payload)
                // }
            }

        case types.ADD_PAYMENT_METHOD_FAILED:
            return {
                ...state,
                isFetching: false
            }






        // /for get payment method

        case types.GET_PAYMENT_METHODS_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.GET_PAYMENT_METHODS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                paymentMethods: {
                    ...state.paymentMethods,
                    data: action.payload
                }
                // deliveryAddress: {
                //     ...state.deliveryAddress,
                //     ...action.payload,
                //     data: action.payload.data
                // }
            }


        case types.GET_PAYMENT_METHODS_FAILED:
            return {
                ...state,
                isFetching: false
            }





        // /for set default payment method

        case types.SET_DEFAULT_PAYMENT_METHOD_REQUEST:
            return {
                ...state,
                isFetching: true
            }

        case types.SET_DEFAULT_PAYMENT_METHOD_SUCCESS:
            return {
                ...state,
                isFetching: false,
                paymentMethods: {
                    ...state.paymentMethods,
                    data: action.payload
                }
            }

        case types.SET_DEFAULT_PAYMENT_METHOD_FAILED:
            return {
                ...state,
                isFetching: false
            }












        // Subscriptions




        // get subscriptions
        case types.GET_SUBSCRIPTIONS_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.GET_SUBSCRIPTIONS_SUCCESS:

            return {
                ...state,
                isFetching: false,
                subscriptions: action.payload
            };

        case types.GET_SUBSCRIPTIONS_FAILED:
            return {
                ...state,
                isFetching: false
            };



        // update subscriptions
        case types.UPDATE_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                isFetching: true
            };

        case types.UPDATE_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // subscriptions: action.payload
            };

        case types.UPDATE_SUBSCRIPTION_FAILED:
            return {
                ...state,
                isFetching: false
            };






        default: return state
    }
}

export default accountReducer;