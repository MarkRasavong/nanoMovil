import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import Hero from '../../images/Hero.png'

const HeroSection = () => {
    const classes = useStyles();

    return(
        <section className={classes.hero} id='main'>
            <Grid container justifyContent='center'>
             <Grid item className={classes.heroTitle}>
                 <Typography variant='h2' className={classes.headerText}>
                    Benvingut!
                 </Typography>
                 <Typography variant='subtitle1' className={classes.standardText}>
                    Nuestro Móvil de La Terreta
                 </Typography>
                </Grid>
                <Box item className={classes.logo}>
                    <img src={Hero} alt='nano valencian hero section' className={`${classes.imageSize}`}/>
                </Box>
            </Grid>
        </section>
    )
};

export default HeroSection;