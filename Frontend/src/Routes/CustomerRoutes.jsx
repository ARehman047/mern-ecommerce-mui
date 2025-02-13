import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navbar from '../customer/components/navigation/Navigation'
import Product from '../customer/components/Products/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Footer from '../customer/components/Footer/Footer'
import Checkout from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import OrderConfirmed from '../customer/components/Order/OrderConfirmed'

const CustomerRoutes = () => {
    return (
        <div>
           <div>
                <Navbar/>
           </div>

            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/login' element={<HomePage/>}></Route>
                <Route path='/register' element={<HomePage/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
                <Route path='/product/:productId' element={<ProductDetails/>}></Route>
                <Route path='/checkout' element={<Checkout/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
                <Route path='/checkout/orderConfirmed' element={<OrderConfirmed/>}></Route>
            </Routes>

           <div>
             <Footer/>
           </div>
        </div>
    )
}

export default CustomerRoutes