import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import Tarjeta from '../../Tarjeta/Tarjeta';
import useStyles from './styles';

const HeroTarifas = () => {
    const classes = useStyles();
    const { tarifas } = useSelector(state => (state.ecommerce))

    return (
        <section className={classes.hero}>
            <Grid justifyitems='center'>
            <Typography variant='h2' className={classes.headerText}>
                Las Tarifas
            </Typography>
            </Grid>
            <Grid container spacing={7}>
                {
                    tarifas?.map((tarifa) => (
                    <Grid item xs={12} md={6} lg={3} key={tarifa.id}>
                        <Tarjeta 
                        key={tarifa.id} 
                        title={tarifa.name} 
                        description={tarifa.description} 
                        img={tarifa.image.url}
                        price={tarifa.price.formatted_with_symbol}
                        buttonLink='/productos'
                        buttonText='Ir la tienda'
                        />
                    </Grid>
                    ))
                }
            </Grid>
        </section>
    )

}

export default HeroTarifas;