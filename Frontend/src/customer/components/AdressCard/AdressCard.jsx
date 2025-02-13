import React from 'react'

const AdressCard = ({address}) => {
  
  return (
    <div>
        <div className='space-y-2'>
            <p className='font-semibold'>{address?.firstName} {address?.lastName}</p>

            <p className='text-sm'>{address?.streetAddress}, {address?.city}, {address?.state}</p>

            <p className='font-semibold'>Phone number</p>

            <p className='text-sm'>{address?.mobile}</p>
        </div>
    </div>
  )
}

export default AdressCard

