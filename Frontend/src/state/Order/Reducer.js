import {
    CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE,
    GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE,
    GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_BY_ID_FAILURE
} from "./ActionType";

const initialState = {
    order: null,
    orders: [],
    isLoading: false,
    error: null
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST || GET_ORDER_HISTORY_REQUEST || GET_ORDER_BY_ID_REQUEST:
            return { ...state, isLoading: true, error: null };

        case CREATE_ORDER_SUCCESS:
            return { ...state, isLoading: false, order: action.payload };

        case GET_ORDER_HISTORY_SUCCESS:
            return { ...state, isLoading: false, orders: action.payload };

        case GET_ORDER_BY_ID_SUCCESS:
            return { ...state, isLoading: false, order: action.payload };

        case CREATE_ORDER_FAILURE || GET_ORDER_HISTORY_FAILURE || GET_ORDER_BY_ID_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
