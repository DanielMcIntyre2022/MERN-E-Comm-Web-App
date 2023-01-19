import { getProductStart, getProductSuccess, getProductFailure } from "./productRedux";
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