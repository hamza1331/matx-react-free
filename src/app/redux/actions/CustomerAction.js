import api from '../../../axios'

export const INSERT_CUSTOMER = 'INSERT_CUSTOMER'
export const GET_CUSTOMER_LIST = 'GET_PRODUCT_LIST'
export const GET_SINGLE_CUSTOMER = 'GET_SINGLE_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'

export const insertCustomer = ( data) => (dispatch) => {
    api
        .post('/customer/insert-customer', {data })
        .then((res) => {
            dispatch({
                type: INSERT_CUSTOMER,

                payload: res.data,

            })
        })
}
export const getCustomerList = () => (dispatch) => {
    api.get('/customer/get-customers').then((res) => {
        dispatch({
            type: GET_CUSTOMER_LIST,
            payload: res.data,
        })
    })
}

export const getSingleCustomer = (uid, customerId) => (dispatch) => {
    api
        .get('/customer/get-customer/:customerId', { uid, customerId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_CUSTOMER,
                payload: res.data,
            })
        })
}

export const deleteCustomer = (uid, customerId) => (dispatch) => {
    api
        .delete('/customer/remove-customer/:customerId', { uid, customerId })
        .then((res) => {
            dispatch({
                type: DELETE_CUSTOMER,
                payload: res.data,
            })
        })
}

export const updateCustomer = (uid, customerId, data) => (dispatch) => {
    api
        .patch('/customer/patch-customer/:customerId', { uid, customerId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_CUSTOMER,
                payload: res.data,
            })
        })
}





// import axios from 'axios';
// const api = axios.create({
//     baseURL: 'http://localhost:3600'
// })



// api.get('/customer/get-customers').then(res => {
//     console.log(res.data)
// })
