import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CssBaseline, Divider, Paper, Step, StepLabel, Stepper, Typography} from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';
import { REFRESH_CART } from '../../../constants';
import taronja from '../../../images/taronja.gif';

//what is shown what step the user is at. Primary is shipping and the other is payment... Can use ternary fn. or switch 
const pasitos = ['Dirección de envío', 'Método de pago'];

const Checkout = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    let nav = useNavigate();
    const { cart } = useSelector(state => state.ecommerce);

    const [ activeStep, setActiveStep ] = useState(0);
    const [ checkoutToken, setCheckoutToken ] = useState(null);
    const [ order, setOrder ] = useState({});
    const [ isFinished, setIsFinished ] = useState(false);
    const [ shippingData, setShipppingData ] = useState({});
    const [ errorMsg, setErrorMsg ] = useState('');

    const nextStep = () => (setActiveStep((prevStep) => prevStep + 1));
    const backStep = () => (setActiveStep((prevStep) => prevStep - 1));

    useEffect(() => {
        if(cart?.id) {
            const generateToken = async () =>  {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    //awaits to generate a token which can init the process of capturing an order from cart.
                    
                    setCheckoutToken(token);
                } catch {
                    if (activeStep !== pasitos.length) nav('/');
                }
            };
            generateToken();
        }
    }, [activeStep, nav, cart]);

    //creates timeout if order is taking long to process payment TESTING PURPOSES!
    const timeOut = () => {
        setTimeout(() => {
            setIsFinished(true);
        }, 3000);
    };
    
    const next = (data) => {
        setShipppingData(data);
        nextStep();
    };



    //refreshCart when commerce captures the order&&tokenId
const refreshCart = async () => {
    try {
    const { cart } = await commerce.cart.refresh();
    dispatch({ type: REFRESH_CART, payload: cart });
    } catch(err) {
        console.log(err);
    }
}



  // the set checkoutToken (from generateToken & state), newOrder from the data that the user submitted
const onCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
        setOrder(incomingOrder);
        refreshCart();
    } catch (error) {
        setErrorMsg(error.data.error.message);
    }
};


let Confirmation = () => (order.customer ? (
    <React.Fragment>
        <div>
            <Typography variant="h5">Gràcies, {order.customer.firstname} {order.customer.lastname}!</Typography>
            <Divider className={classes.divider} />
            <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
        </div>
        <br />
        <Button component={Link} variant='contained' color='secondary' type='button' to='/'>Volver</Button>
    </React.Fragment>
): isFinished ? (
    <React.Fragment>
        <div>
            <Typography variant='h5'>Gràcies, para su pedido!</Typography>
            <Divider className={classes.divider} />
        </div>
        <Button component={Link} to='/' variant='contained' color='secondary' type='button'>Volver</Button>
    </React.Fragment>
) :(
    <div className={classes.spinner}>
        <img src={taronja} alt="dancing orange as loading screen" />
    </div>
));

if(errorMsg) {
    Confirmation = () => (
        <React.Fragment>
            <Typography style={{ color: 'black', fontFamily: 'var(--font-header)'}} variant='h5'>Error:
Los datos no son válidos.</Typography>
            <br />
            <Button component={Link} variant='contained' color='secondary' type='button' to='/'>Volver</Button>
        </React.Fragment>
    )
}

const Form = () => ( activeStep === 0 
    ? <AddressForm next={next} checkoutToken={checkoutToken} nextStep={nextStep} setShipppingData={setShipppingData}/> 
    : <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} timeOut={timeOut} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />)

return (
    <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center' className={classes.headerText}>Tramitar pedido</Typography>

                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {pasitos.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                { activeStep === pasitos.length ? <Confirmation/> : checkoutToken && <Form /> }
            </Paper>
        </main>
    </React.Fragment>
) 
};

export default Checkout;