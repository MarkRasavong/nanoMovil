import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Tarjeta = ({description, title, img, buttonText, buttonLink }) => {
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
                <Typography gutterbottom='true' variant='h5' component='div'>
                    {title}
                </Typography>
                <div dangerouslySetInnerHTML={{__html : description}} />
            </CardContent>
            <CardActions>
                <Button size='small' component={Link} to={buttonLink}>{buttonText}</Button>
            </CardActions>
        </Card>
    )
};

export default Tarjeta;