import { api } from "../../config/apiConfig";
import {
    CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE,
    GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_HISTORY_FAILURE,
    GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_BY_ID_FAILURE
} from "./ActionType";

const createOrderRequest = () => ({ type: CREATE_ORDER_REQUEST });
const createOrderSuccess = (order) => ({ type: CREATE_ORDER_SUCCESS, payload: order });
const createOrderFailure = (error) => ({ type: CREATE_ORDER_FAILURE, payload: error });

const getOrderHistoryRequest = () => ({ type: GET_ORDER_HISTORY_REQUEST });
const getOrderHistorySuccess = (orders) => ({ type: GET_ORDER_HISTORY_SUCCESS, payload: orders });
const getOrderHistoryFailure = (error) => ({ type: GET_ORDER_HISTORY_FAILURE, payload: error });

const getOrderByIdRequest = () => ({ type: GET_ORDER_BY_ID_REQUEST });
const getOrderByIdSuccess = (order) => ({ type: GET_ORDER_BY_ID_SUCCESS, payload: order });
const getOrderByIdFailure = (error) => ({ type: GET_ORDER_BY_ID_FAILURE, payload: error });


export const createOrder = ({ allData, navigate }) => async (dispatch) => {

    dispatch(createOrderRequest());
    try {

        const { data } = await api.post(`api/orders`, allData);

        if (data._id) {

            navigate({ search: `step=3&order_id=${data._id}` })
        }
        dispatch(createOrderSuccess(data));
    } catch (error) {
        dispatch(createOrderFailure(error.message));
    }
};

export const getOrderHistory = () => async (dispatch) => {
    dispatch(getOrderHistoryRequest());
    try {
        const { data } = await api.get(`api/orders/user`);
        dispatch(getOrderHistorySuccess(data));
    } catch (error) {
        dispatch(getOrderHistoryFailure(error.message));
    }
};

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch(getOrderByIdRequest());
    try {
        const { data } = await api.get(`api/orders/${orderId}`);
        console.log(data);

        dispatch(getOrderByIdSuccess(data));
    } catch (error) {
        dispatch(getOrderByIdFailure(error.message));
    }
};
