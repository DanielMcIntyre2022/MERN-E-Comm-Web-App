import { getProductStart, getProductSuccess, 
    getProductFailure, deleteProductStart,
    deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess,
    updateProductFailure, createProductStart,
    createProductSuccess, createProductFailure
} from "./productRedux";
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

// UPDATE PRODUCT //

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        // update 
        dispatch(updateProductSuccess({id, product}))
    } catch (error) {
        dispatch(updateProductFailure())
    }
};

// CREATE/ADD PRODUCT //

export const addProduct = async (product, dispatch) => {
    dispatch(createProductStart());
    try {
        const response = await publicRequest.post(`/products`, product)
        dispatch(createProductSuccess(response.data))
    } catch (error) {
        dispatch(createProductFailure())
    }
};