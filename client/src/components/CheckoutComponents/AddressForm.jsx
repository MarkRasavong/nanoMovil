import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';
import useStyles from './styles';

const AddressForm = ({ checkoutToken, next }) => {
const classes = useStyles();
const [shippingCountries, setShippingCountries] = useState([]);
const [shippingCountry, setShippingCountry] = useState('');
const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
const [shippingSubdivision, setShippingSubdivision] = useState('');
const [shippingOptions, setShippingOptions] = useState([]);
const [shippingOption, setShippingOption] = useState('');
const methods = useForm();

const fetchShippingCountries = async (checkoutTokenId) => {
  const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

  setShippingCountries(countries);
  setShippingCountry(Object.keys(countries)[0]);
};

const fetchSubdivisions = async (countryCode, checkoutTokenId) => {
  const {subdivisions} = await commerce.services.localeListShippingSubdivisions(checkoutTokenId, countryCode);
  console.log(subdivisions);
  setShippingSubdivisions(subdivisions);
  setShippingSubdivision(Object.keys(subdivisions)[0]);
};

const fetchShippingOptions = async (checkoutTokenId, country, stateProvince) => {
  const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
  
  setShippingOptions(options);
  setShippingOption(options[0]?.id);
};

useEffect(() => {
  fetchShippingCountries(checkoutToken.id);
}, [checkoutToken.id]);

useEffect(() => {
  if (shippingCountry) fetchSubdivisions(shippingCountry, checkoutToken.id);
}, [shippingCountry, checkoutToken.id]);

useEffect(() => {
  if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
}, [shippingSubdivision]);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom className={classes.headerText}>Dirección de envío</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="Nombre" />
            <FormInput required name="lastName" label="Apellido(s)" />
            <FormInput required name="address1" label="Dirección" />
            <FormInput required name="email" label="Correo Electrónico" />
            <FormInput required name="city" label="Ciudad" />
            <FormInput required name="zip" label="Código Postal" />
            <Grid item xs={12} sm={6}>
              <InputLabel>País</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id} className={classes.listItem}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Provincia</InputLabel>
              <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id} className={classes.listItem}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Envío</InputLabel>
              <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)} >
                {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                  <MenuItem key={item.id} value={item.id} className={classes.listItem}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="contained" color='secondary' to="/cart">Volver al Carrito</Button>
            <Button type="submit" variant="contained" color="primary">Siguiente</Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
};

export default AddressForm;