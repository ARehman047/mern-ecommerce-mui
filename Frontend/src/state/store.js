import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './Auth/Reducer'
import { productReducer } from './Product/Reducer'
import { cartReducer } from './Cart/Reducer'
import { orderReducer } from './Order/Reducer'
import { adminOrderReducer } from './AdminOrder/Reducer'


export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        cart: cartReducer,
        order: orderReducer,
        adminOrder: adminOrderReducer
    }
})

