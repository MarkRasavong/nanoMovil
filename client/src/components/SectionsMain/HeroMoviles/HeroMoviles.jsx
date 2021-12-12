import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Tarjeta from '../../Tarjeta/Tarjeta';
import useStyles from './styles';

const HeroMoviles = () => {
    const classes = useStyles();
    const { movilesTop } = useSelector(state => (state.ecommerce))

    return (
        <section className={classes.hero} id='moviles'>
            <Typography variant='h2' className={classes.headerText}>
                Los más vendidos móviles
            </Typography>
            <Grid container spacing={7}>
                {
                    movilesTop?.map((movil) => (
                    <Grid item xs={12} md={6} lg={3} key={movil.id}>
                        <Tarjeta 
                        key={movil.id} 
                        title={movil.name} 
                        description={movil.description} 
                        img={movil.image.url} 
                        buttonLink='/productos' 
                        buttonText='Ir la tienda' 
                        price={movil.price.formatted_with_symbol}
                        />
                    </Grid>
                    ))
                }
            </Grid>
        </section>
    )

}

export default HeroMoviles