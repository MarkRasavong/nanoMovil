import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Tarjeta = ({description, title, img, buttonText, buttonLink, price, onClick }) => {
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
                    <h3>
                        {title}
                    </h3>
                    <h3>
                        {price}
                    </h3>
                </div>
                <Typography variant='body2' color='textSecondary' className={classes.apiText} dangerouslySetInnerHTML={{__html : description}} />
            </CardContent>
            <CardActions disableSpacing={true} className={classes.cardActions}> {/* disableSpacing === actions don't have additional margin */}
                <Button variant='contained' className={classes.button} size='small' component={Link} to={buttonLink} onClick={onClick}>{buttonText}</Button>
            </CardActions>
        </Card>
    )
};

export default Tarjeta;