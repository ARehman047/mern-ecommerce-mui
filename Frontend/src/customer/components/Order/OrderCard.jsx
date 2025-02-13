import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='grid grid-cols-12 border shadow-md shadow-black h-[6rem] mb-5 hover:shadow-xl hover:shadow-black cursor-pointer'>

        <div className='col-span-6'>
            <div className='flex space-x-3'>
                <div className='h-[6rem] w-[6rem] p-3'>
                    <img src="https://fittedshop.com/cdn/shop/files/2_e68c1fdd-762f-4085-b2f9-3edf8e38b8a8.jpg?v=1720769703&width=360" alt="" className='object-cover object-top w-full h-full'/>
                </div>
                <div className='py-3 space-y-2'>
                    <p className='text-sm font-semibold'>Product Title</p>
                    <p className='text-xs text-gray-600'>Size</p>
                </div>
            </div>
        </div>

        <div className='col-span-2 p-3'>
            <p className='text-sm'>Price</p>
        </div>

        <div className='col-span-4 p-3'>
            <p className='text-sm'><AdjustIcon sx={{width:'15px', height:'15px'}} className='text-green-600 text-sm mr-2'/>Delievery on Bla Bla</p>
            <p className='text-xs text-gray-600'>Nai dena kia kr lega</p>
        </div>

    </div>
  )
}

export default OrderCard