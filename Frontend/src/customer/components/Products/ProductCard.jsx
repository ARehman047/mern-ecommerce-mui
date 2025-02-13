import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  
  return (
    <div onClick={()=>navigate(`/product/${product._id}`)} className='w-[15rem] m-5 cursor-pointer mainCard rounded-lg'>
        <div className='h-[20rem]'>
            <img className='object-cover object-left-top h-full w-full rounded-t-lg' src={product.imageUrl} alt="" />
        </div>
        <div className='flex flex-col p-4 '>
            <p className='font-bold opacity-60'>{product.brand}</p>
            <p className=''>{product.title}</p>
            <div className='flex space-x-3 mt-2'>
                <p className='font-semibold'>PKR:{product.discountedPrice}</p>
                <p className='line-through opacity-60'>PKR:{product.price}</p>
                <p className='text-green-700 font-semibold'>{product.discountPercent}% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard