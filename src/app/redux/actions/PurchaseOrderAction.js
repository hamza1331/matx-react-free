import api from '../../../axios'

export const GET_PURCHASEORDER_LIST = 'GET_PURCHASEORDER_LIST'
export const INSERT_PURCHASEORDER = 'INSERT_PURCHASEORDER'
export const GET_SINGLE_PURCHASEORDER = 'GET_SINGLE_PURCHASEORDER'
export const CONVERT_PURCHASEORDER_TO_BILL = 'CONVERT_PURCHASEORDER_TO_BILL'
export const DELETE_PURCHASEORDER = 'DELETE_PURCHASEORDER'
export const UPDATE_PURCHASEORDER = 'UPDATE_PURCHASEORDER'

export const addPurchaseOrder = (uid, data) => (dispatch) => {
    api
        .patch('/purchase-order/insert-PO', { uid, data })
        .then((res) => {
            dispatch({
                type: INSERT_PURCHASEORDER,
                payload: res.data,
            })
        })
}


export const getPurchaseOrderList = () => (dispatch) => {
    api.get('/purchase-order/list-PO').then((res) => {
        dispatch({
            type: GET_PURCHASEORDER_LIST,
            payload: res.data,
        })
    })
}

export const ConvertToBill = (uid, PurchaseOrderId) => (dispatch) => {
    api
        .get('/purchase-order/convert-to-bill/:POId', { uid, PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: CONVERT_PURCHASEORDER_TO_BILL,
                payload: res.data,
            })
        })
}

export const getSinglePurchaseOrder = (uid, PurchaseOrderId) => (dispatch) => {
    api
        .get('/purchase-order/:POId', { uid, PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_PURCHASEORDER,
                payload: res.data,
            })
        })
}

export const deletePurchaseOrder = (uid, PurchaseOrderId) => (dispatch) => {
    api
        .delete('/purchase-order/remove-PO/:POId', { uid, PurchaseOrderId })
        .then((res) => {
            dispatch({
                type: DELETE_PURCHASEORDER,
                payload: res.data,
            })
        })
}

export const updatePurchaseOrder = (uid, PurchaseOrderId, data) => (dispatch) => {
    api
        .patch('/purchase-order/update-PO/:POId', { uid, PurchaseOrderId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_PURCHASEORDER,
                payload: res.data,
            })
        })
}
