import { Button } from '@headlessui/react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import IconButton from '@mui/material/IconButton';

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../state/Cart/Action';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    
    
    const handleUpdateCartItem = (num) => {
        const data = {data: {quantity: item.quantity+num},cartItemId: item._id}
        
        dispatch(updateCartItem(data))
    }
    const handleRemoveCartItem = () => {
        dispatch(removeCartItem(item._id))
    }
    
    useEffect(() => {
        
    }, [item.quantity, item._id])

    return (
        <div className='p-5 m-5 rounded-lg border shadow-lg'>
            <div className='flex space-x-5'>
                <div className='h-[5rem] w-[5rem] lg:h-[9rem] lg:w-[9rem]'>
                    <img src={item.product.imageUrl} alt="Pants" className='object-cover object-top w-full h-full' />
                </div>
                <div className='flex flex-col space-y-2 mt-2'>
                    <p className='text-sm font-semibold'>{item.product.title}</p>
                    <p className='text-sm opacity-60'>Size: {item.size}</p>
                    <p className='text-sm opacity-60'>Seller: {item.product.brand}</p>
                    <div className='flex space-x-3 pt-4'>
                        <p className='font-semibold'>${item.product.discountedPrice}</p>
                        <p className='line-through opacity-60'>${item.product.price}</p>
                        <p className='text-green-700 font-semibold'>{item.product.discountPercent}% off</p>
                    </div>
                </div>
            </div>
            <div className='flex space-x-3 mt-3 items-center'>
                <div className='flex w-[5rem] lg:w-[9rem] justify-between items-center'>
                    <IconButton sx={{ color: 'RGB(145 85 253)' }} onClick={() => {handleUpdateCartItem(-1)}} disabled={item.quantity <= 1}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <div className='border rounded-sm px-7 py-1'>{item.quantity}</div>
                    <IconButton sx={{ color: 'RGB(145 85 253)' }} onClick={() => {handleUpdateCartItem(1)}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div className='pl-2 text-purple-900 hover:font-semibold'>
                    <Button onClick={handleRemoveCartItem}>
                        Remove
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default CartItem