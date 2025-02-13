import React from 'react';
import { Grid, Button, Box, TextField } from '@mui/material';
import AdressCard from '../AdressCard/AdressCard';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../../state/Order/Action';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../config/apiConfig';

const DelieveryAdressForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { auth } = useSelector(store => store)


    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget)

        const allData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip-code'),
            mobile: data.get('number')
        }
        const orderData = { allData, navigate }

        dispatch(createOrder(orderData))
    }

    const handleAddressClick = async(address) => {
        const allData = {
            firstName: address.firstName,
            lastName: address.lastName,
            streetAddress: address.streetAddress,
            city: address.city,
            state: address.state,
            zipCode: address.zipCode,
            mobile: address.mobile,
            _id: address._id
        };

        const orderData = { allData, navigate }

        dispatch(createOrder(orderData))
    }
    
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='pb-5 border-b mt-5'>
                        {auth?.user?.address?.map((address) =>
                            <div className='mb-5'>
                                <AdressCard address={address} />
                                <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained' className='cursor-pointer' onClick={() => handleAddressClick(address)}>
                                    Deliver Here
                                </Button>
                            </div>
                        )}
                    </div>

                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-lg shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='firstName'
                                        name='firstName'
                                        label='First Name'
                                        fullWidth
                                        autoComplete='given-name'
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='lastName'
                                        name='lastName'
                                        label='Last Name'
                                        fullWidth
                                        autoComplete='family-name'
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id='address'
                                        name='address'
                                        label='Address'
                                        fullWidth
                                        autoComplete='street-address'
                                        required
                                        multiline
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='city'
                                        name='city'
                                        label='City'
                                        fullWidth
                                        autoComplete='city'
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='state'
                                        name='state'
                                        label='State/Province/Region'
                                        fullWidth
                                        autoComplete='state'
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='zip-code'
                                        name='zip-code'
                                        label='Zip/Postal Code'
                                        fullWidth
                                        autoComplete='zip-code'
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id='number'
                                        name='number'
                                        label='Phone number'
                                        fullWidth
                                        autoComplete='number'
                                        required
                                    />
                                </Grid>
                                <button
                                    type="submit"
                                    className="ml-6 mt-8 rounded-md bg-purple-600 px-8 py-3 text-white hover:bg-purple-700"
                                >
                                    Deliver Here
                                </button>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DelieveryAdressForm;
