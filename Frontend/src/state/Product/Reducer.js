import {
    FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCTS_FAILURE, DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE
} from './ActionType.js'

const initialState = {
    products: [],
    error: null,
    product: null,
    isLoading: false
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_PRODUCT_BY_ID_REQUEST || FIND_PRODUCTS_REQUEST || DELETE_PRODUCT_REQUEST || CREATE_PRODUCT_REQUEST:
            return { ...state, isLoading: true, error: null }

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return { ...state, isLoading: false, product: action.payload }

        case FIND_PRODUCTS_SUCCESS:
            return { ...state, isLoading: false, error: null, products: action.payload.content }

        case DELETE_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, error: null, removeProduct: action.payload}

        case CREATE_PRODUCT_SUCCESS:
            return {...state, isLoading: false, error: null, products: [...state.products, action.payload]}

        case FIND_PRODUCTS_FAILURE || FIND_PRODUCT_BY_ID_FAILURE || DELETE_PRODUCT_FAILURE || CREATE_PRODUCT_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        default:
            return state;
    }
}