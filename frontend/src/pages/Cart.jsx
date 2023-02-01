import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect } from "react";
import { userRequest } from '../requestMethods';
import { useNavigate } from 'react-router-dom';
import { clearCart } from "../redux/cartRedux";

const KEY = process.env.REACT_APP_STRIPE_P_KEY;

function Cart() {

const cart = useSelector(state => state.cart);
const [stripeToken, setStripeToken ] = useState(null);
const navigate = useNavigate();
const dispatch = useDispatch();

const onToken = (token) => {
    setStripeToken(token)
};

const emptyCartClick = () => {
    dispatch(clearCart());
};

useEffect(() => {
    const makeRequest = async () => {
        try {
            const response = await userRequest.post('/checkout/payment', {
                tokenId: stripeToken.id,
                amount: cart.totalPrice
            });
                navigate('/paysuccess', {data:response.data});
        } catch (error) {
            
        }
    };
    stripeToken && makeRequest();
},[stripeToken, cart.totalPrice, navigate]);

  return (
    <div className="shopping-cart-container">
        <Annoucements/>
        <Navbar/>
            <div className="shopping-cart-wrapper p-20">
                <h1 className="text-center mb-10">YOUR BAG</h1>
            <div className="top-container flex items-center justify-center mb-10">
                    <button className="top-btn p-5 border" onClick={() => navigate('/')}>Continue Shopping</button>
            </div>
                <div className="bottom-container flex justify-between max-xl:flex-col">
                    <div className="product-info-container">
                        {
                            cart.products.map(product => (
                        <div className="product">
                            <div className="product-detail mr-28 mb-10 ml-10">
                                <img className="w-44 object-cover mb-5" src={product.img}/>
                            <div className="details flex flex-col">
                                <h1 className="mb-2"><b className="mr-2">Product:</b>{product.title}</h1>
                                <h1 className="mb-2"><b className="mr-2">ID:</b>{product._id}</h1>
                                <h1 className="mb-2"><b className="mr-2">Quantity: </b>{product.quantity}</h1>
                                <h1 className="mb-2"><b className="mr-2">Price: </b>${product.price * product.quantity}</h1>
                                 </div>
                            </div>
                        </div>
                            ))
                        }       
                        <hr className="mt-5 mb-5"/>
                    </div>
                    <div className="product-summary-container flex-1 border p-10">
                        ORDER SUMMARY
                    <div className="summary-item mt-5 mb-5 flex justify-between">
                        <span className="summary-total mr-2">Subtotal:</span>
                        <span className="summary-price">${cart.totalPrice}</span>
                    </div>
                    <div className="summary-item mt-5 mb-5 flex justify-between">
                        <span className="summary-shipping mr-2">Shipping:</span>
                        <span className="summary-price">$4.99</span>
                    </div>
                    <div className="summary-total mt-5 mb-5 flex justify-between">
                        <span className="summary-shipping font-bold mr-2">Total:</span>
                        <span className="summary-price">${cart.totalPrice + 499}</span>
                    </div>
                    <div className="flex">
                    <StripeCheckout
                    name='E-Comm'
                    image="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cart.totalPrice + 4.99}`}
                    amount={cart.totalPrice +499}
                    token={onToken}
                    stripeKey={KEY}
                    className="w-14"
                    />
                    <span><button className='border-2 ml-5 p-1' onClick={emptyCartClick}>Clear Cart</button></span>
                    </div>
                </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Cart;