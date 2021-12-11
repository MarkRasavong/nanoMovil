import React from 'react';
import { Badge, Box, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import navbarLogo from '../../images/navbarLogo.png'
import './navbar.css'
import useStyles from './styles';

const Navbar = () => {
    const { cart } = useSelector(state => state?.ecommerce);
    const classes = useStyles();
    let nav = useNavigate();

    return (
        <Box>
            <header position='static' className={classes.header}>
                <Toolbar>
                        <Grid container>
                            <Link to='/'>
                                <img src={navbarLogo} alt='navbar logo of nano movil' className={classes.navbarLogo}/>
                            </Link>
                            <Grid className={classes.menuButton}>
                                <Button component={Link} to='/productos'>
                                    <Typography variant='h6' className={classes.typographyText}>Productos</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                                <IconButton size='medium' aria-label='shopping cart' color='primary' onClick={() => nav('/cart')}>
                                    <Badge badgeContent={cart?.total_items} color='error'>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Grid>
                </Toolbar>
            </header>
        </Box>
    )
}

export default Navbar;