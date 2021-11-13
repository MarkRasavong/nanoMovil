import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Tarjeta from '../../Tarjeta/Tarjeta';
import useStyles from './styles';

const HeroTarifas = () => {
    const classes = useStyles();

    return (
        <section className={classes.hero}>
            <Grid justifyItems='center'>
            <Typography variant='h2'>
                Top Tarifas
            </Typography>
            </Grid>
            <Grid container spacing={7}>
                <Grid item xs={3}>
                    <Tarjeta />
                </Grid>
                <Grid item xs={3}>
                    <Tarjeta />
                </Grid>
                <Grid item xs={3}>
                    <Tarjeta />
                </Grid>
            </Grid>
        </section>
    )

}

export default HeroTarifas;