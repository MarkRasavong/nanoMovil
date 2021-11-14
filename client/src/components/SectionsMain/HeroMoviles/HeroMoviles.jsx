import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Tarjeta from '../../Tarjeta/Tarjeta';
import useStyles from './styles';

const HeroMoviles = () => {
    const classes = useStyles();
    const { moviles } = useSelector(state => (state.ecommerce))

    return (
        <section className={classes.hero} id='moviles'>
            <Typography variant='h2'>
                Top Moviles
            </Typography>
            <Grid container spacing={7}>
                {
                    moviles?.map((movil) => (
                    <Grid item xs={3} key={movil.id}>
                        <Tarjeta key={movil.id} title={moviles.name} description={movil.description} img={movil.image.url} buttonLink='/productos' buttonText='Ir la tienda' />
                    </Grid>
                    ))
                }
            </Grid>
        </section>
    )

}

export default HeroMoviles