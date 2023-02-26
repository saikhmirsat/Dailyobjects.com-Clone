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
 console.log(payload);
    return axios
        .post("https://awful-pear-bedclothes.cyclic.app/api/cart/create",{payload}, {
            headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("userId")
      }
          }, )
        .then((r) => {
            return dispatch({ type: types.POST_CART_SUCCESS });
        })
        .catch((e) => {
            dispatch({ type: types.POST_CART_FAILURE });
        })
}

// const postData = async (payload) => {
//     await fetch(`https://awful-pear-bedclothes.cyclic.app/api/cart/create`, {
//         method: 'POST',
//         headers: {
//             "Authorization": localStorage.getItem('userId')
//         }
//     },payload)
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))

// }

export {getProduct,getSingleProduct,postCart};