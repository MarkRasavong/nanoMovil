import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import useStyles from './styles';

const Tarjeta = () => {
    const classes = useStyles();

    return (
        <Card sx={{ maxWidth: 345 }} className={classes.body}>
            <CardMedia
            className={classes.image}
            component='img'
            image="https://media1.giphy.com/media/l2JJHEW1lToNnJzxe/giphy.gif"
            alt='dancing orange'
            />
            <CardContent>
                <Typography gutterbottom variant='h5' component='div'>
                    Text Here
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    the content of this card goes here.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Buy</Button>
            </CardActions>
        </Card>
    )
};

export default Tarjeta;