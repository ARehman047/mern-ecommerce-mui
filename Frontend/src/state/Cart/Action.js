import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, 
    REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } 
    from "./ActionType"

const getCartRequest = () => ({ type: GET_CART_REQUEST })
const getcartSuccess = (cart) => ({ type: GET_CART_SUCCESS, payload: cart })
const getCartFailure = (error) => ({ type: GET_CART_FAILURE, payload: error })

const addItemToCartRequest = () => ({ type: ADD_ITEM_TO_CART_REQUEST })
const addItemToCartSuccess = (item) => ({ type: ADD_ITEM_TO_CART_SUCCESS, payload: item })
const addItemToCartFailure = (error) => ({ type: ADD_ITEM_TO_CART_FAILURE, payload: error })

const removeCartItemRequest = () => ({type: REMOVE_CART_ITEM_REQUEST})
const removeCartItemSuccess = (item) => ({type: REMOVE_CART_ITEM_SUCCESS, payload: item })
const removeCartItemFailure = (error) => ({type: REMOVE_CART_ITEM_FAILURE, payload: error})

const updateCartItemRequest = () => ({type: UPDATE_CART_ITEM_REQUEST})
const updateCartItemSuccess = (item) => ({type: UPDATE_CART_ITEM_SUCCESS, payload: item })
const updateCartItemFailure = (error) => ({type: UPDATE_CART_ITEM_FAILURE, payload: error})

export const addItemToCart = (reqData) => async (dispatch) => {
    dispatch(addItemToCartRequest())
    try {
        const data = await api.put(`api/cart/add`, reqData)
        
    } catch (error) {
        dispatch(addItemToCartFailure(error.message))
    }
}

export const getCart = () => async (dispatch) => {
    dispatch(getCartRequest())
    try {
        const data = await api.get(`api/cart`)
        dispatch(getcartSuccess(data.data))
    } catch (error) {
        dispatch(getCartFailure(error.message))
    }
}

export const updateCartItem = (reqData) => async (dispatch) => {
    dispatch(updateCartItemRequest())
    try {
        const {data} = await api.put(`api/cart_items/${reqData.cartItemId}`, reqData.data)
        
        dispatch(updateCartItemSuccess(data))
    } catch (error) {
        dispatch(updateCartItemFailure(error.message))
    }
}

export const removeCartItem = (reqData) => async (dispatch) => {
    dispatch(removeCartItemRequest())
    try {
        const {data} = await api.delete(`api/cart_items/${reqData}`)
        dispatch(removeCartItemSuccess(reqData))
    } catch (error) {
        dispatch(removeCartItemFailure(error.message))
    }
}