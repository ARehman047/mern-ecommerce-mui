import { api } from "../../config/apiConfig";
import {
    PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, PLACED_ORDER_FAILURE,
    DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE,
    CANCELLED_ORDER_REQUEST, CANCELLED_ORDER_SUCCESS, CANCELLED_ORDER_FAILURE,
    DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE,
    GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE,
    CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE,
    SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS, SHIP_ORDER_FAILURE
} from "./ActionType";

// Action Creators
const placedOrderRequest = () => ({ type: PLACED_ORDER_REQUEST });
const placedOrderSuccess = (order) => ({ type: PLACED_ORDER_SUCCESS, payload: order });
const placedOrderFailure = (error) => ({ type: PLACED_ORDER_FAILURE, payload: error });

const deliveredOrderRequest = () => ({ type: DELIVERED_ORDER_REQUEST });
const deliveredOrderSuccess = (order) => ({ type: DELIVERED_ORDER_SUCCESS, payload: order });
const deliveredOrderFailure = (error) => ({ type: DELIVERED_ORDER_FAILURE, payload: error });

const cancelledOrderRequest = () => ({ type: CANCELLED_ORDER_REQUEST });
const cancelledOrderSuccess = (order) => ({ type: CANCELLED_ORDER_SUCCESS, payload: order });
const cancelledOrderFailure = (error) => ({ type: CANCELLED_ORDER_FAILURE, payload: error });

const deleteOrderRequest = () => ({ type: DELETE_ORDER_REQUEST });
const deleteOrderSuccess = (orderId) => ({ type: DELETE_ORDER_SUCCESS, payload: orderId });
const deleteOrderFailure = (error) => ({ type: DELETE_ORDER_FAILURE, payload: error });

const getOrdersRequest = () => ({ type: GET_ORDERS_REQUEST });
const getOrdersSuccess = (orders) => ({ type: GET_ORDERS_SUCCESS, payload: orders });
const getOrdersFailure = (error) => ({ type: GET_ORDERS_FAILURE, payload: error });

const confirmedOrderRequest = () => ({ type: CONFIRMED_ORDER_REQUEST });
const confirmedOrderSuccess = (order) => ({ type: CONFIRMED_ORDER_SUCCESS, payload: order });
const confirmedOrderFailure = (error) => ({ type: CONFIRMED_ORDER_FAILURE, payload: error });

const shipOrderRequest = () => ({ type: SHIP_ORDER_REQUEST });
const shipOrderSuccess = (order) => ({ type: SHIP_ORDER_SUCCESS, payload: order });
const shipOrderFailure = (error) => ({ type: SHIP_ORDER_FAILURE, payload: error });

// Async Actions

export const placeOrder = (orderData) => async (dispatch) => {
    dispatch(placedOrderRequest());
    try {
        const { data } = await api.post(`/api/orders/place`, orderData);
        dispatch(placedOrderSuccess(data));
    } catch (error) {
        dispatch(placedOrderFailure(error.message));
    }
};

export const deliveredOrder = (orderId) => async (dispatch) => {
    dispatch(deliveredOrderRequest());
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/delivered`);
        dispatch(deliveredOrderSuccess(data));
    } catch (error) {
        dispatch(deliveredOrderFailure(error.message));
    }
};

export const cancelOrder = (orderId) => async (dispatch) => {
    dispatch(cancelledOrderRequest());
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/cancelled`);
        dispatch(cancelledOrderSuccess(data));
    } catch (error) {
        dispatch(cancelledOrderFailure(error.message));
    }
};

export const deleteOrder = (orderId) => async (dispatch) => {
    dispatch(deleteOrderRequest());
    try {
        await api.delete(`/api/admin/orders/${orderId}/delete`);
        dispatch(deleteOrderSuccess(orderId));
    } catch (error) {
        dispatch(deleteOrderFailure(error.message));
    }
};

export const getOrders = () => async (dispatch) => {
    dispatch(getOrdersRequest());
    try {
        const {data} = await api.get(`/api/admin/orders`);
        dispatch(getOrdersSuccess(data));
    } catch (error) {
        dispatch(getOrdersFailure(error.message));
    }
};

export const confirmOrder = (orderId) => async (dispatch) => {
    dispatch(confirmedOrderRequest());
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        dispatch(confirmedOrderSuccess(data));
    } catch (error) {
        dispatch(confirmedOrderFailure(error.message));
    }
};

export const shipOrder = (orderId) => async (dispatch) => {
    dispatch(shipOrderRequest());
    try {
        const { data } = await api.put(`/api/admin/orders/${orderId}/shipped`);
        dispatch(shipOrderSuccess(data));
    } catch (error) {
        dispatch(shipOrderFailure(error.message));
    }
};
