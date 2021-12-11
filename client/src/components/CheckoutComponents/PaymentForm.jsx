import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import useStyles from './styles'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const classes = useStyles();

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();
    
        // do not proceed to the confirmation if these are not present
        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
    
        const result = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

        console.log(result.paymentMethod);
    
        if (result.error) {
          console.log('[error]', result.error);
        } else {
          const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
            shipping: { name: `${shippingData.firstName} ${shippingData.lastName}`, street: shippingData.address1, town_city: shippingData.city, 
            county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
            fulfillment: { shipping_method: shippingData.shippingOption },
            billing: {
                name: `${shippingData.firstName} ${shippingData.lastName}`, street: shippingData.address1, town_city: shippingData.city,
                county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
            payment: {
              gateway: 'stripe',
              card: {
                token: result.paymentMethod.id,
              },
            },
          };
    
          onCaptureCheckout(checkoutToken.id, orderData);
    
          nextStep();
        }
      };
    

  return (
    <React.Fragment>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography className={classes.headerText} variant="h6" gutterBottom style={{ margin: '20px 0' }}>Método de pago</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="contained" color='secondary' onClick={backStep}>Volver</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Paga {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </React.Fragment>
  );
};

export default PaymentForm;