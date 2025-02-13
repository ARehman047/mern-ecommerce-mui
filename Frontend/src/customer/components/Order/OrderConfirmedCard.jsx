import React from 'react'

const OrderConfirmedCard = ({item}) => {
    
  return (
    <div className='flex justify-between cursor-pointer items-center shadow-lg px-5 rounded-md mt-10'>

        <div className=''>
            <div className='flex space-x-3 items-center'>
                <div className='h-[6rem] w-[6rem] p-3'>
                    <img src={item.product.imageUrl} alt="" className='object-cover object-top w-full h-full'/>
                </div>
                <div className='py-3 space-y-1'>
                    <p className='text-sm font-semibold'>{item.product.brand}</p>
                    <div className='flex space-x-3'>
                        <p className='text-xs text-gray-600'>{item.product.color}</p>
                        <p className='text-xs text-gray-600'>{item.size}</p>
                    </div>
                    <p className='text-sm'>{item.product.title}</p>
                    <div className='flex space-x-3 pt-4'>
                        <p className='font-semibold text-sm'>${item.product.discountedPrice}</p>
                        <p className='line-through opacity-60 text-sm'>${item.product.price}</p>
                        <p className='text-green-700 font-semibold text-sm'>{item.product.discountPercent}% off</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='p-3r'>
            
            <p className='text-gray-600 text-sm mr-3'>Yahan Saara Address Aye ga</p>
        </div>

    </div>
  )
}

export default OrderConfirmedCard