import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../state/Cart/Action'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {cart} = useSelector(store => store)

    useEffect(() => {
        dispatch(getCart())
    }, [cart.updateCartItem, cart.removeCartItem])
    
    const actual_cart = cart?.cart
    
    return (
        <div>
            <div className='lg:grid grid-cols-3'>
                <div className='col-span-2'>
                    {actual_cart?.cartItems?.map((item) => (
                        <CartItem item={item}/>
                    ))}
                </div>
                <div className='sticky h-[100vh] top-0'>
                    <div className='border p-5 rounded-lg m-5 shadow-lg'>
                        <p className='font-semibold opacity-60 text-md pb-3'>PRICE DETAILS</p>
                        <hr />
                        <div className='flex flex-col space-y-5 pt-3'>
                            <div className='flex justify-between'>
                                <p>Price</p>
                                <p >${actual_cart?.totalPrice}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Discount</p>
                                <p className='text-green-700'>-${actual_cart?.discount}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Delivery Charges</p>
                                <p className='text-green-700'>Free</p>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <p className='text-lg font-semibold'>Total Amount</p>
                                <p className='text-lg font-semibold text-green-700'>${actual_cart?.totalDiscountedPrice}</p>
                            </div>
                        </div>

                        <button
                            onClick={()=>navigate('/checkout?step=2')}
                            type="submit"
                            className="mt-8 flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
