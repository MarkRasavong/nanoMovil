import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon';
import Icon from './icon';
import Input from './Input';

const initState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const [form, setForm] = useState(initState);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isSignedUp) {
            console.log('triggers sign in to BE')
        } else {
            console.log('triggers sign up new user to BE')
        }
    };

    const switchMode = () => {
        setForm(initState);
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
        setShowPassword(false);
    }

    const renderGoogleFailure = () => console.log('Google sign in was unsuccessful, try again later');

    const renderGoogleSuccess = () => console.log('Google sign in was successful, please save the token');

    return (
        <Container component='main' maxWidth='xs'>
            <Paper>
                <Avatar>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>{isSignedUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignedUp && (
                                <React.Fragment>
                                    <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus={true} half />
                                    <Input name='lastName' label='Last Name' handleChange={handleChange} autoFocus={true} half />
                                </React.Fragment>
                            )
                        }
                        <Input name='email' label='Email' handleChange={handleChange} type='email' />
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignedUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
                    </Grid>
                    <Button tyoe='submit' fullWidth={true} variant='contained' color='primary'>
                        {isSignedUp ? 'Continue Regestration' : 'Sign In'}
                    </Button>
                    <GoogleLogin clientId='314028582268-281g77vg0e862c5j81qml9ljjcntdo0f.apps.googleusercontent.com'
                        render={(renderProps) => (
                            <Button color='primary' fullWidth={true} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={renderGoogleSuccess}
                        onFailure={renderGoogleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignedUp ? 'Already have an account? Sign in' : "Dont't have an account? Sign Up!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
