import { Box, FormControl, Grid, Typography, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, fetchCart } from '../../actions/commerce';
import Tarjeta from '../Tarjeta/Tarjeta';
import useStyles from './styles.js';
import taronja from '../../images/taronja.gif'

const Products = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('all');
    const { tarifas, moviles } = useSelector(state => state.ecommerce);

    useEffect(() => {
        fetchCart(dispatch)
    }, [ dispatch ])

    const renderTarifas = () => (
        tarifas?.map((tarifa) => (
            <Grid item sm={12} md={6} lg={3} key={tarifa.id}>
                <Tarjeta 
                key={tarifa.id} 
                title={tarifa.name} 
                description={tarifa.description} 
                img={tarifa.image.url} 
                price={tarifa.price.formatted_with_symbol}
                productId={tarifa.id}
                showIcon={true}
                dispatch={dispatch}
                buttonLink='/productos' 
                buttonText='Añadir a la cesta'
                onClick={() => {
                    addProductToCart(tarifa.id, 1, dispatch)
                }}/>
            </Grid>
        ))
    )

    const renderMoviles = () => (
        moviles?.map((movil) => (
            <Grid item sm={12} md={6} lg={3} key={movil.id}>
                <Tarjeta 
                key={movil.id} 
                title={movil.name} 
                description={movil.description} 
                img={movil.image.url}
                price={movil.price.formatted_with_symbol}
                productId={movil.id}
                showIcon={true}
                dispatch={dispatch}
                buttonLink='/productos' 
                buttonText='Añadir a la cesta'
                onClick={() => {
                    addProductToCart(movil.id, 1, dispatch)
                }}/>
            </Grid>
            ))
    );

    const renderLogic = () => {
        switch (filter) {
            case 'all':
                return <Grid container spacing={3} justifyItems='center'> {renderMoviles()} {renderTarifas()} </Grid>
            case 'tarifas':
                return <Grid container spacing={3} justifyItems='center'> {renderTarifas()} </Grid>
            case 'moviles':
                return <Grid container spacing={3} justifyItems='center'> {renderMoviles()} </Grid>
            default:
                return <img src={taronja} alt="dancing orange as loading screen" />;
        }
    }


    return (
        <Box>
            <Typography variant='h2' className={classes.headerText}>
                Nuestro Productos
            </Typography>
            <FormControl component='fieldset'>
                <RadioGroup row aria-label='filter' name='row-radio-buttons-group' className={classes.radioGroup}>
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