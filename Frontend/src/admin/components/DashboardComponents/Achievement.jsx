import { Button } from '@mui/material'
import React from 'react'

const Achievement = () => {
  return (
    <div className='flex justify-between p-5 border bg-gray-900 text-white rounded-md h-full'>
        <div className='flex flex-col'>
            <p className='text-xl'>E-commerce</p>
            <p className='text-sm'>Mr jao jaa k</p>
            <p className='text-xl my-5'>400k</p>
            <Button variant='contained'>View Sales</Button>
        </div>
        <div className='h-[5rem] w-[5rem] lg:h-[7rem] lg:w-[7rem]'>
            <img src="https://png.pngtree.com/png-clipart/20190905/original/pngtree-beautiful-trophy-png-image_4541793.jpg" alt="Trophy" className='object-cover object-top w-full h-full'/>
        </div>
    </div>
  )
}

export default Achievement