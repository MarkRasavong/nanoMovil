import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { addProductToCart } from '../../actions/commerce';

const Tarjeta = ({description, title, img, buttonText, buttonLink, price, productId, dispatch, showIcon }) => {
    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 345 }} className={classes.body}>
            <CardMedia
            className={classes.image}
            component='img'
            image={img}
            alt='dancing orange'
            />
            <CardContent>
                <div>
                    <Typography gutterbottom='true' variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='h5'>
                        {price}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary' dangerouslySetInnerHTML={{__html : description}} />
            </CardContent>
            <CardActions disableSpacing={true} className={classes.cardActions}> {/* disableSpacing === actions don't have additional margin */}
                { showIcon &&
                <IconButton aria-label='Add to Cart' onClick={() => {
                    addProductToCart(productId, 1, dispatch)
                }}>
                    <AddShoppingCartIcon /> 
                </IconButton>
                }
                <Button size='small' component={Link} to={buttonLink}>{buttonText}</Button>
            </CardActions>
        </Card>
    )
};

export default Tarjeta;