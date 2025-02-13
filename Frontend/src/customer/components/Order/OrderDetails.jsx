import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import OrderDetailsCard from './OrderDetailsCard'

const OrderDetails = () => {
    return (
        <div className='p-5 m-5 mx-20 space-y-10'>
            <div className='p-5 shadow-md border'>
                <h1 className='font-bold text-lg mb-3'>Delivery Address</h1>
                <AdressCard />
            </div>

            <div className='p-5 shadow-md border'>
                <OrderTracker activeStep={3} />
            </div>

            {[1, 1, 1, 1].map((item) =>
                <div className='py-3 px-1 shadow-md border hover:shadow-lg'>
                    <OrderDetailsCard />
                </div>
            )}
        </div>
    )
}

export default OrderDetails