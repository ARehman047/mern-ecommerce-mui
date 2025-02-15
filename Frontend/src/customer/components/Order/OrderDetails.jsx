import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import OrderDetailsCard from './OrderDetailsCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../state/Order/Action'


const OrderDetails = () => {
    const params = useParams()
    const { order } = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrderById(params.orderId))
    }, [params.orderId])

    const steps = ['pending', 'confirmed', 'shipped', '', 'delivered']
    const actual_order = order?.order?.order


    return (
        <div className='p-5 m-5 mx-20 space-y-10'>
            <div className='p-5 shadow-md border'>
                <AdressCard address={actual_order?.shippingAddress} />
            </div>

            <div className="p-5 shadow-md border">
                {actual_order?.orderStatus !== "cancelled" ? (
                    <OrderTracker activeStep={steps.indexOf(actual_order?.orderStatus) + 1} />
                ) : (
                    <div className='flex justify-center text-red-700 font-extrabold text-2xl'>Cancelled</div>
                )}
            </div>

            {actual_order?.orderItems?.map((item) =>
                <div className='py-3 px-1 shadow-md border hover:shadow-lg'>
                    <OrderDetailsCard orderItem={item} />
                </div>
            )}
        </div>
    )
}

export default OrderDetails