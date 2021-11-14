import { Box, FormControl, Grid, Typography, RadioGroup, FormControlLabel, Radio, CircularProgress } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Tarjeta from '../Tarjeta/Tarjeta';

const Products = () => {
    const [filter, setFilter] = useState('all');
    const { tarifas, moviles } = useSelector(state => state.ecommerce);

    const renderTarifas = () => (
        tarifas?.map((tarifa) => (
            <Grid item xs={3} key={tarifa.id}>
                <Tarjeta key={tarifa.id} title={tarifa.name} description={tarifa.description} img={tarifa.image.url} buttonLink='/productos' buttonText='Buy Now' />
            </Grid>
        ))
    )

    const renderMoviles = () => (
        moviles?.map((movil) => (
            <Grid item xs={3} key={movil.id}>
                <Tarjeta key={movil.id} title={moviles.name} description={movil.description} img={movil.image.url} buttonLink='/productos' buttonText='Buy Now'/>
            </Grid>
            ))
    );

    const renderLogic = () => {
        switch (filter) {
            case 'all':
                return <Grid container spacing={7}> {renderMoviles()} {renderTarifas()} </Grid>
            case 'tarifas':
                return <Grid container spacing={7}> {renderTarifas()} </Grid>
            case 'moviles':
                return <Grid container spacing={7}> {renderMoviles()} </Grid>
            default:
                return <CircularProgress />;
        }
    }


    return (
        <Box>
            <Typography variant='h2'>
                Nuestro Productos
            </Typography>
            <FormControl component='fieldset'>
                <RadioGroup row aria-label='filter' name='row-radio-buttons-group'>
                    <FormControlLabel onClick={() => setFilter('all')} value='all' control={<Radio />} label='Todos' />
                    <FormControlLabel onClick={() => setFilter('tarifas')} value='tarifas' control={<Radio />} label='Tarifas' />
                    <FormControlLabel onClick={() => setFilter('moviles')} value='moviles' control={<Radio />} label='Moviles' />
                </RadioGroup>
            </FormControl>
            { renderLogic() }
        </Box>
    )
};

export default Products;