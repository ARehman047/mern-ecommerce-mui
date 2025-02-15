import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import OrderCard from './OrderCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderHistory } from '../../../state/Order/Action';

const orderStatus = () => [
    { label: "Pending", value: "pending" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Shipped", value: "shipped" },
    { label: "Delivered", value: "delivered" },
    { label: "Cancelled", value: "cancelled" },
];

const Order = () => {
    const {order} = useSelector(store => store)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getOrderHistory())
    }, [])
    const actual_order = order.orders.allOrders
    console.log(actual_order);
    
    
  return (
    <div>
        <Grid container justifyContent={'space-between'}>
            <Grid item xs={2.5}>
                <div className='shadow-lg m-5 p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'>Filter</h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold'>Order Status</h1>
                        {orderStatus().map((item) =>
                        <div className='flex space-x-3 items-center'>
                            <input type="checkbox" defaultValue={item.value} className='h-4 w-4 border-gray-400 text-indigo-600 focus:ring-indigo-500'/>
                            <label htmlFor={item.value} className='ml-3 text-sm text-gray-600'>
                                {item.label}
                            </label>
                        </div>
                        )}
                    </div>
                </div>
            </Grid>

            <Grid sm={9} className='m-5 p-5'>
                {actual_order?.map((item)=>(
                    <OrderCard order={item}/>
                ))}
            </Grid>
        </Grid>
    </div>
  )
}

export default Order