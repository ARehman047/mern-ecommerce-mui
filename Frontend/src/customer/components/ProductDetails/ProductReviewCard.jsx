import { Avatar, Grid2, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid2 container className='pb-5'>
                <Grid2 size={1.5} alignContent={"center"} >
                    <Avatar sx={{width:56, height:56, bgcolor:'purple'}}>
                        R
                    </Avatar>
                </Grid2>
                <Grid2 size={7} >
                    <div className='flex flex-col'>
                        <p className='font-semibold text-md'>Name</p>
                        <p className='opacity-50 text-sm'>Date</p>
                        <p>
                            <Rating value={3.5} precision={0.5} readOnly></Rating>
                        </p>
                        <p className='text-sm'>Comments</p>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default ProductReviewCard