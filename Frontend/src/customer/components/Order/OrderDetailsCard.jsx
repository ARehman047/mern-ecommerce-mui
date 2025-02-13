import React from 'react'
import StarIcon from '@mui/icons-material/Star';

const OrderDetailsCard = () => {
  return (
    <div className='flex justify-between cursor-pointer items-center'>

        <div className=''>
            <div className='flex space-x-3 items-center'>
                <div className='h-[6rem] w-[6rem] p-3'>
                    <img src="https://fittedshop.com/cdn/shop/files/2_e68c1fdd-762f-4085-b2f9-3edf8e38b8a8.jpg?v=1720769703&width=360" alt="" className='object-cover object-top w-full h-full'/>
                </div>
                <div className='py-3 space-y-1'>
                    <p className='text-sm font-semibold'>Product Title</p>
                    <div className='flex space-x-3'>
                        <p className='text-xs text-gray-600'>Color</p>
                        <p className='text-xs text-gray-600'>Size</p>
                    </div>
                    <p className='text-sm'>Seller</p>
                    <p className='text-sm'>$Price</p>
                </div>
            </div>
        </div>

        <div className='p-3r'>
            
            <p className='text-gray-600 text-sm mr-3'><StarIcon sx={{width:'15px', height:'15px'}} className='text-purple-800 text-sm mr-1 mb-1'/>Rate & Review Product</p>
        </div>

    </div>
  )
}

export default OrderDetailsCard