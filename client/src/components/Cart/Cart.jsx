import { Button, CircularProgress, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart } from '../../actions/commerce';
import CartItem from './CartItem/CartItem';
import useStyles from './styles.js';

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.ecommerce);
    let nav = useNavigate();
    const classes = useStyles();

    const clearedCart = () => (
        <Typography variant='subtitle1'>
            You have no items in your shopping cart.
            <Link className={classes.link} to='/productos'>¡vamos a comprar!</Link>
        </Typography>
    );

    if(!cart?.line_items) return <CircularProgress />;

    const handleClearCart = () => {
        emptyCart(dispatch);
        nav('/productos');
    };

    const renderCart = () => (
        <React.Fragment>
            <Grid container spacing={3}>
                {
                    cart?.line_items.map(item => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} />
                        </Grid>
                    ))
                }
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>Subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleClearCart}>
                        Empty Cart
                    </Button>
                    <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='priamry' component={Link} to='/checkout'>
                        Checkout
                    </Button>
                </div>
            </div>

        </React.Fragment>
    )

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant='h3' gutterbottom={true}>Tu Carrito</Typography>
                { !cart.line_items.length ? clearedCart() : renderCart() }
            </div>
        </Container>
    )
};

export default Cart;