import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

function Payment() {

    const KEY = process.env.REACT_APP_STRIPE_P_KEY

    const [stripeToken, setStripeToken ] = useState(null);
    
    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
               await axios.post(`${process.env.REACT_APP_BACKENDAPI}/api/checkout/payment`, {
               tokenId:stripeToken.id,
               }
            );
            } catch (error) {
                console.log(error)
            }
        };
        stripeToken && makeRequest();
    },[stripeToken]);

  return (
    <div className='checkout-container'>
        <StripeCheckout
        name='E-Comm'
        image="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        billingAddress
        shippingAddress
        token={onToken}
        stripeKey={KEY}
        > 
        { stripeToken ? (<span>Processing. Please wait...</span>) : (
            <button className='border'>Checkout</button>
        )}
        </StripeCheckout>
    </div>
  )
}

export default Payment;