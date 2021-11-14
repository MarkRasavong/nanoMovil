import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
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
                <Typography variant='h4'>{item.name}</Typography>
                <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type='button' size='small' onClick={() => updateItemQty(item.id, (item.quantity - 1), dispatch)}>-</Button>
                    <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
                    <Button type='button' size='small' onClick={() => updateItemQty(item.id, (item.quantity + 1), dispatch)}>+</Button>
                </div>
                <Button variant='contained' type='button' color='secondary' onClick={() => removeItemfromCart(item.id, dispatch)}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    )
};

export default CartItem;