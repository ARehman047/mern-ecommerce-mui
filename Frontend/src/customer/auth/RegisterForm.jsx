import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register} from '../../state/Auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector(store=>store)
    const jwt = localStorage.getItem('jwt');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password')
        }

        dispatch(register(userData));

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            id='firstName'
                            name='firstName'
                            label='First Name'
                            autoComplete='given-name'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <TextField
                            id='lastName'
                            name='lastName'
                            label='Last Name'
                            autoComplete='given-name'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            id='email'
                            name='email'
                            label='Email'
                            autoComplete='email'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField
                            id='password'
                            name='password'
                            label='Password'
                            autoComplete='password'
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid xs={12} item>
                        <Button variant='contained' type='submit' className='w-full' sx={{ padding: '.8rem 0', bgcolor: '#9155FD', ":hover": { bgcolor: '#7112FD' } }}>
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex py-3 justify-center space-x-3 w-full mt-2'>
                <div>
                You Already have an Account? 
                </div>
                <button onClick={()=>navigate('/login')} className='text-purple-800 font-serif hover:text-purple-950 hover:underline'>Login</button>
            </div>

        </div>

    )
}

export default RegisterForm