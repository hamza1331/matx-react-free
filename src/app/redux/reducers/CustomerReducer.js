import {
    
 GET_CUSTOMER_LIST,
 GET_SINGLE_CUSTOMER ,
DELETE_CUSTOMER ,
UPDATE_CUSTOMER,
} from '../actions/CustomerAction'

const initialState = {
    customerList: [],
}

const CustomerReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_CUSTOMER_LIST: {
            return {
                ...state,
                customerList: [...action.payload],
            }
        }
        case GET_SINGLE_CUSTOMER: {
            return {
                ...state,
                customerList: [...action.payload],
            }
        }
        case DELETE_CUSTOMER: {
            return {
                ...state,
                customerList: [...action.payload],
            }
        }
        case UPDATE_CUSTOMER: {
            return {
                ...state,
                customerList: [...action.payload],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default CustomerReducer
