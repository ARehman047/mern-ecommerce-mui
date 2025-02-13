import {
    ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
    GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST,
    REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
}
    from "./ActionType"

const initialState = {
    cart: null,
    isLoading: false,
    error: null,
    cartItems: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM_TO_CART_REQUEST || UPDATE_CART_ITEM_REQUEST || REMOVE_CART_ITEM_REQUEST || GET_CART_REQUEST:
            return { ...state, isLoading: true, error: null }

        case ADD_ITEM_TO_CART_SUCCESS:
            return { ...state, isLoading: false, cartItems: [...cartItems, action.payload] }

        case GET_CART_SUCCESS:
            return { ...state, isLoading: false, cart: action.payload , cartItems: action.payload.cartItems}

        case REMOVE_CART_ITEM_SUCCESS:
            return { ...state, isLoading: false , removeCartItem: action.payload}

        case UPDATE_CART_ITEM_SUCCESS:
            return { ...state, isLoading: false, updateCartItem: action.payload}

        case ADD_ITEM_TO_CART_FAILURE || REMOVE_CART_ITEM_FAILURE || UPDATE_CART_ITEM_FAILURE || GET_CART_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        default:
            return state
    }
}