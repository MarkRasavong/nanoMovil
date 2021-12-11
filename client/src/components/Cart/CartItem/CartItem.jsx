import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemfromCart, updateItemQty } from '../../../actions/commerce';

import useStyles from './styles';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className='cart-item'>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant='h6' className={classes.cardContentText}>{item.name}</Typography>
                <Typography variant='h5'className={classes.cardContentText}>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Container className={classes.buttons}>
                    <Button type='button' size='small' className={classes.cardActionsButton} onClick={() => updateItemQty(item.id, (item.quantity - 1), dispatch)}>-</Button>
                    <Typography className={classes.quantity} >&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type='button' size='small' className={classes.cardActionsButton} onClick={() => updateItemQty(item.id, (item.quantity + 1), dispatch)}>+</Button>
                </Container>
                <Container className={classes.removeDiv}>
                    <Button variant='contained' type='button' color='secondary' onClick={() => removeItemfromCart(item.id, dispatch)}>
                        Remove
                    </Button>
                </Container>
            </CardActions>
        </Card>
    )
};

export default CartItem;