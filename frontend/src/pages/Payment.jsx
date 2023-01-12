
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Payment() {

    const KEY = process.env.REACT_APP_STRIPE_P_KEY

    const [stripeToken, setStripeToken ] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
        console.log(token)
    };

  return (
    <div className='checkout-container'>
        <StripeCheckout
        name='E-Comm'
        image="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        billingAddress
        shippingAddress
        description=' Your total is $20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
            <button className='border'>Checkout</button>
        </StripeCheckout>
    </div>
  )
}

export default Payment;