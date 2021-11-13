import { Box, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Hero = () => {
    const classes = useStyles();

    return(
        <section className={classes.hero} id='main'>
            <Grid container justify="center">
                <Box item={8}>
                    <img className={classes.logo} src='https://www.pngkey.com/png/full/829-8299660_orange-yellow-circle-vector-png.png' alt='orange logo' height='220px'/>
                </Box>
                <Box item={4} className={classes.heroTitle}>
                    <h1>Benvinguts!</h1>
                    <p>Nostra Movil de la Terreta</p>
                </Box>
            </Grid>
        </section>
    )
};

export default Hero;