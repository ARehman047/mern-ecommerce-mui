import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { Avatar, AvatarGroup} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ order }) => {
    const navigate = useNavigate()
    const shippingDetails = order.shippingAddress
    const orderItems = order.orderItems
    return (
        <div onClick={() => navigate(`/account/order/${order._id}`)} className='grid grid-cols-12 border shadow-md shadow-black h-[6rem] mb-5 hover:shadow-xl hover:shadow-black cursor-pointer'>

            <div className='col-span-7'>
                <div className='flex space-x-3'>
                    <div className='flex h-[6rem] w-[6rem] items-center justify-center'>
                        <AvatarGroup>
                            {orderItems?.slice(0, 3).map((orderItem) => (
                                <Avatar src={orderItem.product.imageUrl} sx={{ width: 45, height: 45 }}></Avatar>
                            ))}
                        </AvatarGroup>
                    </div>
                    <div className='py-3 space-y-2'>
                        <p className='text-sm font-semibold capitalize'>{order.user.firstName} {order.user.lastName}</p>
                        <p className='text-xs text-gray-600'>Total products: {order.totalItem}</p>
                        <div className='flex space-x-3 mt-2'>
                            <p className='font-semibold text-xs'>PKR:{order.totalDiscountedPrice}</p>
                            <p className='line-through opacity-60 text-xs'>PKR:{order.totalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-span-4 p-3'>
                <p className='text-sm'><AdjustIcon sx={{ width: '15px', height: '15px' }} className='text-green-600 text-sm mr-2 capitalize' />{shippingDetails.firstName} {shippingDetails.lastName}</p>
                <p className='text-xs text-gray-600'>{shippingDetails.streetAddress}, {shippingDetails.city}, {shippingDetails.state}</p>
                <p className='text-xs capitalize mt-4'>Order Status: {order.orderStatus}</p>
            </div>

        </div>
    )
}

export default OrderCard