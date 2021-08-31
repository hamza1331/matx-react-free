import api from '../../../axios'

export const INSERT_VENDOR = 'INSERT_VENDOR'
export const GET_VENDOR_LIST = 'GET_VENDOR_LIST'
export const GET_SINGLE_VENDOR = 'GET_SINGLE_VENDOR'
export const DELETE_VENDOR = 'DELETE_VENDOR'
export const UPDATE_VENDOR = 'UPDATE_VENDOR'

export const insertVendor = (uid, data) => (dispatch) => {
    api
        .patch('/supplier/insert-supplier', { uid, data })
        .then((res) => {
            dispatch({
                type: INSERT_VENDOR,
                payload: res.data,
            })
        })
}
export const getVendorList = () => (dispatch) => {
    api.get('/supplier/get-supplier').then((res) => {
        dispatch({
            type: GET_VENDOR_LIST,
            payload: res.data,
        })
    })
}

export const getSingleVendor = (uid, vendorId) => (dispatch) => {
    api
        .get('/supplier/get-supplier/:supplierId', { uid, vendorId })
        .then((res) => {
            dispatch({
                type: GET_SINGLE_VENDOR,
                payload: res.data,
            })
        })
}

export const deleteVendor = (uid, vendorId) => (dispatch) => {
    api
        .delete('/supplier/remove-supplier/:supplierId', { uid, vendorId })
        .then((res) => {
            dispatch({
                type: DELETE_VENDOR,
                payload: res.data,
            })
        })
}

export const updateVendor = (uid, vendorId, data) => (dispatch) => {
    api
        .patch('/supplier/patch-supplier/:supplierId', { uid, vendorId, data })
        .then((res) => {
            dispatch({
                type: UPDATE_VENDOR,
                payload: res.data,
            })
        })
}
