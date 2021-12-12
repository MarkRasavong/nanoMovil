import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
                <Grid item className={classes.buttonPrincipal}  style={{ marginBottom : '2rem' }}>
                    <Button fullWidth={true} variant='contained' color='primary' className={classes.button} size='large' component={Link} to='/productos'>Ver Nuestro Productos</Button>
                </Grid>
            </Grid>
        </section>
    )
};

export default HeroSection;