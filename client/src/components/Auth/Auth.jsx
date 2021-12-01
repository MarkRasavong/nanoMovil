import { Avatar, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Icon from './icon';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { signin, register } from '../../actions/auth';

const initState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [form, setForm] = useState(initState);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword(!showPassword);


    const switchMode = () => {
        setForm(initState);
        setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
        setShowPassword(false);
    };

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!isSignedUp){
            dispatch(signin(form, nav));
        } else {
            dispatch(register(form, nav));
        };

        console.log('dispatched!')
    };


    const renderGoogleFailure = () => console.log('Google sign in was unsuccessful, try again later');

    const renderGoogleSuccess = () => console.log('Google sign in was successful, please save the token');

    return (
        <Container component='main' maxWidth='sm'>
            <Paper className={classes.registrationBox}>
                <Avatar className={classes.avatarIcon}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>{isSignedUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignedUp && (
                            <React.Fragment>
                                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                            </React.Fragment>
                        )}
                        <Input name='email' label='Email' handleChange={handleChange} type="email"/>
                        <Input name='password' label='Password' handleChange={handleChange} type={ showPassword ? 'text' : 'password' } handleShowPassword={handleShowPassword} />
                        { isSignedUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
                    </Grid>
                    <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        { isSignedUp ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin
            clientId="314028582268-281g77vg0e862c5j81qml9ljjcntdo0f.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={renderGoogleSuccess}
            onFailure={renderGoogleFailure}
            cookiePolicy="single_host_origin"
          />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignedUp ? 'Already have an account? Sign in' : "Don't have an account? Sign Up!" }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
