import { api} from "../../config/apiConfig";
import { GET_USER_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS ,
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_SUCCESS, GET_USER_FAILURE, LOGOUT
} from "./ActionType";


const registerRequest = () => ({type:REGISTER_REQUEST})
const registerSuccess = (user) => ({type:REGISTER_SUCCESS, payload:user})
const registerFailure = (error) => ({type:REGISTER_FAILURE, payload:error})

const loginRequest = () => ({type:LOGIN_REQUEST})
const loginSuccess = (user) => ({type:LOGIN_SUCCESS, payload:user})
const loginFailure = (error) => ({type:LOGIN_FAILURE, payload:error})

const getUserRequest = () => ({type:GET_USER_REQUEST})
const getUserSuccess = (user, token) => ({type:GET_USER_SUCCESS, payload:{user, token}})
const getUserFailure = (error) => ({type:GET_USER_FAILURE, payload:error})

export const register = (userData) => async(dispatch) => {

    dispatch(registerRequest()) 

    try {
        const response = await api.post(`/auth/signup`, userData);
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt", user.jwt)
        }
        dispatch(registerSuccess(user.jwt))
        window.location.reload()
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

export const login = (userData) => async(dispatch) => {
    dispatch(loginRequest())
    try {
        const response = await api.post(`/auth/signin`, userData);
        const user = response.data;
        if(user.jwt){
            localStorage.setItem("jwt", user.jwt)
        }

        dispatch(loginSuccess(user.jwt))
        window.location.reload()
    } catch (error) {
        dispatch(loginFailure(error.message))
    }
}

export const getUser = (jwt) => async(dispatch) => {

    dispatch(getUserRequest())

    try {
        const response = await api.get("/api/users/profile");
        const user = response.data;

        dispatch(getUserSuccess(user, jwt))

    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}

export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch({type:LOGOUT, payload: null})
}