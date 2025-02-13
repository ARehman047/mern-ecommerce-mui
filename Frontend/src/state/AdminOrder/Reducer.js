import {
    PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, PLACED_ORDER_FAILURE,
    DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE,
    CANCELLED_ORDER_REQUEST, CANCELLED_ORDER_SUCCESS, CANCELLED_ORDER_FAILURE,
    DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE,
    GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE,
    CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE,
    SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS, SHIP_ORDER_FAILURE
} from "./ActionType";

const initialState = {
    orders: [],
    isLoading: false,
    error: null
};

export const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLACED_ORDER_REQUEST || DELIVERED_ORDER_REQUEST || CANCELLED_ORDER_REQUEST ||
            DELETE_ORDER_REQUEST || GET_ORDERS_REQUEST || CONFIRMED_ORDER_REQUEST || SHIP_ORDER_REQUEST:
            return { ...state, isLoading: true, error: null };

        case PLACED_ORDER_SUCCESS:
            return { ...state, isLoading: false, placed: action.payload };

        case DELIVERED_ORDER_SUCCESS:
            return { ...state, isLoading: false, delivered: action.payload };

        case CANCELLED_ORDER_SUCCESS:
            return { ...state, isLoading: false, cancelled: action.payload };

        case DELETE_ORDER_SUCCESS:
            return { ...state, isLoading: false, deleted: action.payload };

        case GET_ORDERS_SUCCESS:
            return { ...state, isLoading: false, orders: action.payload };

        case CONFIRMED_ORDER_SUCCESS:
            return { ...state, isLoading: false, confirmed: action.payload };

        case SHIP_ORDER_SUCCESS:
            return { ...state, isLoading: false, shipped: action.payload };

        case PLACED_ORDER_FAILURE || DELIVERED_ORDER_FAILURE || CANCELLED_ORDER_FAILURE ||
            DELETE_ORDER_FAILURE || GET_ORDERS_FAILURE || CONFIRMED_ORDER_FAILURE || SHIP_ORDER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
