import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div className='cursor-pointer flex flex-col bg-white rounded-lg shadow-lg mx-4 overflow-hidden w-[13rem] my-9'>
        <div className='h-[11rem] w-[8rem] ml-10'>
            <img className='object-cover object-top w-full h-full'  src={product.imageUrl} alt="" />
        </div>

        <div className='p-4 mt-4'>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>
    </div>
  )
}

export default HomeSectionCard