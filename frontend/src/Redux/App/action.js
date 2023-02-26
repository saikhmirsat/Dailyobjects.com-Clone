import axios from "axios";
import * as types from "./actionTypes";


const getProduct = (term,value,min) => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    return axios
        .get(`https://awful-pear-bedclothes.cyclic.app/api/products?${term}&price[gte]=${value}&price[lte]=${min}`)
        .then((r) => {
            let {data}=r;

           return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_PRODUCTS_FAILURE});
        })
}

const getSingleProduct = (payload) => (dispatch) => {
    dispatch({ type: types.GET_SINGLE_REQUEST });
    console.log(payload)
    return axios
        .get(`https://awful-pear-bedclothes.cyclic.app/api/product/${payload}`)
        .then((r) => {
           return dispatch({ type: types.GET_SINGLE_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_SINGLE_FAILURE});
        })
}
const postCart = (payload) => (dispatch) => {
    dispatch({ type: types.POST_CART_REQUEST });
    return axios
        .post("https://awful-pear-bedclothes.cyclic.app/api/product/cart", payload)
        .then((r) => {
            return dispatch({ type: types.POST_CART_SUCCESS });
        })
        .catch((e) => {
            dispatch({ type: types.POST_CART_FAILURE });
        })
}

export {getProduct,getSingleProduct,postCart};