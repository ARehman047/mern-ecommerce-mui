import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/Order/Action'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const OrderSummary = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { order } = useSelector(store => store)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const order_id = searchParams.get('order_id')

    useEffect(() => {
        dispatch(getOrderById(order_id))
    }, [order_id])


    const actual_order = order?.order?.order

    const handleCheckout = () => {
        navigate(`/checkout/orderConfirmed?order_id=${order_id}`)
    }

    return (
        <div>
            <div className='p-5 shadow-lg border rounded-lg'>
                <AdressCard address={actual_order?.shippingAddress} />
            </div>
            <div>
                <div className='lg:grid grid-cols-3'>
                    <div className='col-span-2'>
                        {actual_order?.orderItems?.map((item) => (
                            <div>
                                <CartItem item={item} />
                            </div>
                        ))}
                    </div>
                    <div className='sticky h-[100vh] top-0'>
                        <div className='border p-5 rounded-lg my-5 shadow-lg'>
                            <p className='font-semibold opacity-60 text-md pb-3'>PRICE DETAILS</p>
                            <hr />
                            <div className='flex flex-col space-y-5 pt-3'>
                                <div className='flex justify-between'>
                                    <p>Price</p>
                                    <p >${actual_order?.totalPrice}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Discount</p>
                                    <p className='text-green-700'>-${actual_order?.discount}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Delivery Charges</p>
                                    <p className='text-green-700'>Free</p>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <p className='text-lg font-semibold'>Total Amount</p>
                                    <p className='text-lg font-semibold text-green-700'>${actual_order?.totalDiscountedPrice}</p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 w-full"
                                onClick={() => handleCheckout()}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary