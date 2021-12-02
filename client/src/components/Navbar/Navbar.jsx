import React, { useEffect, useState } from 'react';
import { Avatar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGOUT } from '../../constants';
import useStyles from './styles';

const Navbar = () => {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
    const { cart } = useSelector(state => state?.ecommerce);
    const location = useLocation();
    const dispatch = useDispatch();
    const classes = useStyles();
    let nav = useNavigate();

    const logout = () => {
        dispatch({ type: LOGOUT });
        nav('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location, dispatch])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <header position='static' className={classes.header}>
                <Toolbar>
                    <Typography className={classes.navtext} variant='h6' component={Link} to='/' sx={{ flexGrow: 1 }}>
                        Nano Movil
                    </Typography>
                    {user?.result ? (
                        <div className={classes.profile}>
                            <Avatar alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
                            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                        </div>
                    ): (
                        <Button color='inherit' component={Link} to='/authorization'>Registrar</Button>
                    )}
                    <IconButton size='large' aria-label='shopping cart' color='primary' onClick={() => nav('/cart')}>
                        <Badge badgeContent={cart?.total_items} color='error'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </header>
        </Box>
    )
}

export default Navbar;