import { GET_USER_REQUEST, LOGIN_REQUEST, LOGOUT, REGISTER_REQUEST, 
    REGISTER_SUCCESS, LOGIN_SUCCESS, GET_USER_SUCCESS, REGISTER_FAILURE,
    LOGIN_FAILURE, GET_USER_FAILURE} from "./ActionType";  

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST || LOGIN_REQUEST || GET_USER_REQUEST:
            return {...state, isLoading: true, error: null}

        case REGISTER_SUCCESS || LOGIN_SUCCESS:
            return {...state, isLoading: false, jwt: action.payload}

        case GET_USER_SUCCESS:
            return {...state, isLoading: false, error: null, user: action.payload.user, jwt:action.payload.token}

        case REGISTER_FAILURE || LOGIN_FAILURE || GET_USER_FAILURE:
            return {...state, isLoading: false, error: action.payload}

        case LOGOUT:
            return {...initialState}
        
        default:
            return state
    } 
}