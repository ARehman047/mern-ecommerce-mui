import { api } from "../../config/apiConfig";
import {
    FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE
} from "./ActionType";

const findProductByIdRequest = () => ({ type: FIND_PRODUCT_BY_ID_REQUEST })
const findProductByIdSuccess = (product) => ({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: product })
const findProductByIdFailure = (error) => ({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error })

const findProductsRequest = () => ({ type: FIND_PRODUCTS_REQUEST })
const findProductsSuccess = (data) => ({ type: FIND_PRODUCTS_SUCCESS, payload: data })
const findProductsFailure = (error) => ({ type: FIND_PRODUCTS_FAILURE, payload: error })

const deleteProductRequest = () => ({ type: DELETE_PRODUCT_REQUEST })
const deleteProductSuccess = (data) => ({ type: DELETE_PRODUCT_SUCCESS, payload: data })
const deleteProductFailure = (error) => ({ type: DELETE_PRODUCT_FAILURE, payload: error })

const createProductRequest = () => ({ type: CREATE_PRODUCT_REQUEST })
const createProductSuccess = (data) => ({ type: CREATE_PRODUCT_SUCCESS, payload: data })
const createProductFailure = (error) => ({ type: CREATE_PRODUCT_FAILURE, payload: error })

export const productById = (reqData) => async (dispatch) => {
    dispatch(findProductByIdRequest())
    const productId = reqData;
    try {
        const {data} = await api.get(`/api/products/id/${productId}`)
        
        if (data) {
            dispatch(findProductByIdSuccess(data))
        }
    } catch (error) {
        dispatch(findProductByIdFailure(error.message))
    }
}

export const findProducts = (reqData) => async (dispatch) => {
    dispatch(findProductsRequest())

    const { category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqData;
    
    try {
        const { data } = await api.get(`/api/products?color=${color}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        
        dispatch(findProductsSuccess(data.product))
    } catch (error) {
        dispatch(findProductsFailure(error.message))
    }
}

export const deleteProduct = (reqData) => async(dispatch) => {
    dispatch(deleteProductRequest())
    try {
        const data = await api.delete(`/api/admin/products/${reqData}`)
        
        dispatch(deleteProductSuccess(data))
    } catch (error) {
        dispatch(deleteProductFailure(error.message))
    }
}

export const createProduct = (reqData) => async(dispatch) => {
    dispatch(createProductRequest())
    
    try {
        const {data} = await api.post(`/api/admin/products`, reqData)
        
        dispatch(createProductSuccess(data.product))
    } catch (error) {
        dispatch(createProductFailure(error.message))
    }
}