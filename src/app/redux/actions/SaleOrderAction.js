import axios from 'axios'

export const GET_SALEORDER_LIST = 'GET_SALEORDER_LIST'
export const INSERT_SALEORDER = 'INSERT_SALEORDER'
export const GET_SINGLE_SALEORDER = 'GET_SINGLE_SALEORDER'
export const CONVERT_SALEORDER_TO_INVOICE = 'CONVERT_SALEORDER_TO_BILL'
export const DELETE_SALEORDER = 'DELETE_SALEORDER'
export const UPDATE_SALEORDER = 'UPDATE_SALEORDER'

export const addSaleOrder = (uid, data) => (dispatch) => {
    console.log(uid, data)
    axios
        .patch('/sale-order/insert-SO', { uid, data })
        .then((res) => {
            dispatch({
                type: INSERT_SALEORDER,
                payload: res.data,
            })
        })
}


export const getSaleOrderList = () => (dispatch) => {
    axios.get('/sale-order/list-SO').then((res) => {
        dispatch({
            type: GET_SALEORDER_LIST,
            payload: res.data,
        })
    })
}

export const ConvertToInvoice = (uid, SaleOrderId) => (dispatch) => {
    axios
        .get('/sale-order/convert-to-invoice/:SOId', { uid, SaleOrderId })
        .then((res) => {
            dispatch({
                type: CONVERT_SALEORDER_TO_INVOICE,
                payload: res.data,
            })
        })
}

export const getSingleSaleOrder = (uid, SaleOrderId) => (dispatch) => {
    axios
        .get('/sale-order/get-SO/:POId', { uid, SaleOrderId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_SALEORDER,
                payload: res.data,
            })
        })
}

export const deleteSaleOrder = (uid, SaleOrderId) => (dispatch) => {
    axios
        .delete('/sale-order/remove-SO/:SOId', { uid, SaleOrderId })
        .then((res) => {
            dispatch({
                type: DELETE_SALEORDER,
                payload: res.data,
            })
        })
}

export const updatePurchaseOrder = (uid, SaleOrderId, data) => (dispatch) => {
    console.log(uid, SaleOrderId, data)
    axios
        .patch('/sale-order/update-SO/:SOId', { uid, SaleOrderId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_SALEORDER,
                payload: res.data,
            })
        })
}
