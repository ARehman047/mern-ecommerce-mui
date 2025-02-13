import { Button, Grid, TextField } from '@mui/material'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login, getUser } from '../../state/Auth/Action';

const LoginForm = ({handleClose}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth} = useSelector(store=>store)
    const jwt = localStorage.getItem("jwt");

    
    useEffect(() => {
        if(jwt){
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        const userData = {
            email: data.get('email'),
            password: data.get('password')
        }

        dispatch(login(userData))  
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
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
                <Grid  xs={12} item>
                    <Button variant='contained' type='submit' className='w-full' sx={{padding:'.8rem 0', bgcolor:'#9155FD', ":hover":{bgcolor:'#7112FD'}}}>
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>

        <div className='flex py-3 justify-center space-x-3 w-full mt-2'>
                <div>
                Dont't have an Account? 
                </div>
                <button onClick={()=>navigate('/register')} className='text-purple-800 font-serif hover:text-purple-950 hover:underline'>Register</button>
            </div>
    </div>
  )
}

export default LoginForm