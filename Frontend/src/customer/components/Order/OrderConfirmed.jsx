import React, { useEffect } from 'react'
import OrderConfirmedCard from './OrderConfirmedCard'
import OrderTracker from './OrderTracker'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getOrderById } from '../../../state/Order/Action';


const OrderConfirmed = () => {
    const { order } = useSelector(store => store)
    const dispatch = useDispatch()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const order_id = searchParams.get('order_id')

    useEffect(() => {
        dispatch(getOrderById(order_id))
    }, [order_id])

    const actual_order = order?.order?.order
    


    return (
        <div className="flex flex-col">
            <div className="flex bg-green-100 text-green-800 p-4 rounded-lg shadow-md w-[18rem] self-center">
                <CheckCircleIcon className="text-green-600 mr-2" />
                <div>
                    <h2 className="font-semibold text-lg">Payment Success</h2>
                    <p>Congratulations! Your order has been placed.</p>
                </div>
            </div>
            <div className="mt-20">
                <OrderTracker activeStep={1} />
            </div>
            <div className="mb-10 mt-10 md:mx-32">
                {actual_order?.orderItems?.map((item) => (
                    <>
                    <OrderConfirmedCard item={item}/>
                    </>
                ))}
            </div>
        </div>
    );
};

export default OrderConfirmed;