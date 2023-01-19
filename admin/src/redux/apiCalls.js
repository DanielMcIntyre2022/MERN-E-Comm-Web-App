import { getProductStart, getProductSuccess, getProductFailure, deleteProductStart,
    deleteProductSuccess, deleteProductFailure } from "./productRedux";
import { publicRequest } from '../requestMethods';

// GET PRODUCTS //

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const response = await publicRequest.get('/products')
        dispatch(getProductSuccess(response.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
};

// DELETE PRODUCT //

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const response = await publicRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
};