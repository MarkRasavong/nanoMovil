import { Button, CircularProgress, Grid, InputLabel, MenuItem, Select, Tab, Tabs, } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/InboxOutlined';
import MailIcon from '@material-ui/icons/MailOutline'
import React, { useEffect, useState } from 'react';

import Input from '../Auth/Input';
import useStyles from './styles';
import comunitats from './comunitats';

const initUserCred = { firstName:'', lastName:'', email:'', password:'', confirmPassword:''};
const initAddress = { address1: '', city: '', postalCode: '', province: ''};

const UserAdmin = () => {
    const classes = useStyles();
    const [ value, setValue ] = useState(0);
    const [ form, setForm ] = useState(initUserCred);
    const [ address, setAddress ] = useState(initAddress);

    const [ showPassword, setShowPassword ] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    
    const handleUserCredChange = e => setForm({ ...form, [e.target.name] : e.target.value });
    const handleUserCredSubmit = e => {
        e.preventDefault();
        console.log(form);
        setForm(initUserCred);
    }

    const handleAddressChange = e => setAddress({ ...address, [e.target.name] : e.target.value });
    const handleAddressSubmit = e => {
        e.preventDefault();
        setAddress(initAddress);
        console.log(address);
    }

    const handleTabs = (e, newValue) => {
        setValue(newValue);
    };
    


    const tabLogic = () => {
        switch (value) {
            case 0:
                return (
                    <form onSubmit={handleUserCredSubmit} id='userCredForm'>
                        <Grid container spacing={2} justifyContent='center'>
                            <Input name='firstName' label='First Name' type='text' autoFocus half required handleChange={handleUserCredChange}/>
                            <Input name='lastName' label='Last Name' type='text' half required handleChange={handleUserCredChange}/>
                            <Input name='email' label='Email' type="email" required handleChange={handleUserCredChange}/>
                            <Input name='password' label='Password' type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} required handleChange={handleUserCredChange}/>
                            <Input name='confirmPassword' label='Repeat Password' type='password' required handleChange={handleUserCredChange}/>
                        </Grid>
                        <Button type="submit" variant='contained' color='primary' fullWidth className={classes.submit}>Save Changes</Button>
                    </form>
                )
                break;
            case 1:
                return (
                    <form onSubmit={handleAddressSubmit} id='addressForm'>
                        <Grid container item spacing={2} justifyContent='center'>
                            <Input name='address1' label='Direccion' handleChange={handleAddressChange} />
                            <Input name='city' label='Cuidad' handleChange={handleAddressChange} />
                            <Input name='postalCode' label='Codigo Postal' handleChange={handleAddressChange} />
                            <Grid item xs={12} sm={6}>
                                <InputLabel>Provincia</InputLabel>
                                <Select value={address.province} name='province' fullWidth onChange={handleAddressChange}>
                                    {
                                        comunitats.map(({ code, label }) => (
                                            <MenuItem key={code} value={code}>
                                                {label}
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                            </Grid>
                        </Grid>
                        <Button type="submit" variant='contained' color='primary' fullWidth className={classes.submit}>Save Changes</Button>
                    </form>
                )
                break;
            default:
                return;
        }
    }
    return (
        <React.Fragment>
                <Grid container item justifyContent='center' className={classes.toolbar}>
                    <Tabs value={value} onChange={handleTabs} aria-label='tabs to toggle between user info and address'>
                        <Tab icon={<InboxIcon />} label='User Credentials' />
                        <Tab icon={<MailIcon />} label='Update Address' />
                    </Tabs>
                </Grid>
                { tabLogic() }
        </React.Fragment>
    )
}

export default UserAdmin
