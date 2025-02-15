import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const OrderDetailsCard = ({ orderItem }) => {
    const product = orderItem.product
    
    return (
        <div className='flex justify-between cursor-pointer items-center'>

            <div className=''>
                <div className='flex space-x-3 items-center'>
                    <div className='h-[6rem] w-[6rem] p-3'>
                        <img src={product.imageUrl} alt="" className='object-cover object-top w-full h-full' />
                    </div>
                    <div className='py-3 space-y-1'>
                        <p className='text-sm font-semibold'>{product.brand}</p>
                        <div className='flex space-x-3'>
                            <p className='text-xs text-gray-600'>Color: {product.color}</p>
                            <p className='text-xs text-gray-600'>Size: {orderItem.size}</p>
                        </div>
                        <p className='text-sm pt-2'>Quantity: {orderItem.quantity}</p>
                        <div className='flex space-x-3 pt-2'>
                            <p className='font-semibold text-sm'>${product.discountedPrice}</p>
                            <p className='line-through opacity-60 text-sm'>${product.price}</p>
                            <p className='text-green-700 font-semibold text-sm'>{product.discountPercent}% off</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='p-3r'>

                <p className='text-gray-600 text-sm mr-3'><StarIcon sx={{ width: '15px', height: '15px' }} className='text-purple-800 text-sm mr-1 mb-1' />Rate & Review Product</p>
            </div>

        </div>
    )
}

export default OrderDetailsCard