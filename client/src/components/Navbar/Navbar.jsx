import { Badge, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const classes = useStyles();
    const { cart } = useSelector(state => state.ecommerce);
    let nav = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <header position='static' className={classes.header}>
                <Toolbar>
                    <Typography className={classes.navtext} variant='h6' component={Link} to='/' sx={{ flexGrow: 1 }}>
                        Nano Movil
                    </Typography>
                    <Button color='inherit' component={Link} to='/registration'>Registrar</Button>
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