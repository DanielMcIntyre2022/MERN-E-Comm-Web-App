import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Cart() {
  return (
    <div className="shopping-cart-container">
        <Annoucements/>
        <Navbar/>
            <div className="shopping-cart-wrapper p-20">
                <h1 className="text-center">YOUR BAG</h1>
                <div className="top-container flex items-center justify-between p-10">
                    <button className="top-btn p-5 border">Continue Shopping</button>
                <div className="top-text-container">
                    <span className="cursor-pointer underline m-2">Shopping Bag(2)</span>
                    <span className="cursor-pointer underline m-5">Your Wishlist(2)</span>
                </div>
                <button className="top-btn p-5 border">Checkout Now</button>
            </div>
                <div className="bottom-container flex justify-between">
                    <div className="product-info-container">
                        <div className="product flex justify-between">
                            <div className="product-detail flex flex-2 ml-10">
                                <img className="w-20%" src="https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"></img>
                            <div className="details p-20 flex flex-col">
                                <h1 className="mb-2"><b className="mr-2">Product:</b>WINTER SWEATER</h1>
                                <h1 className="mb-2"><b className="mr-2">ID:</b>24304505</h1>
                                <h1><b className="mr-2">Size:</b>M</h1>
                                 </div>
                            </div>
                            <div className="price-detail flex items-center justify-center flex-col flex-1">
                                <div className="product-amount-container flex items-center">
                                    <AddIcon/>
                                    <p className="m-5 text-2xl">2</p>
                                    <RemoveIcon/>
                                </div>
                                <div className="price">
                                    <p className="text-2xl">$200</p>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-5 mb-5"/>
                        <div className="product flex justify-between">
                            <div className="product-detail flex flex-2 ml-10">
                                <img className="w-20%" src="https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"></img>
                            <div className="details p-20 flex flex-col">
                                <h1 className="mb-2"><b className="mr-2">Product:</b>WINTER SWEATER</h1>
                                <h1 className="mb-2"><b className="mr-2">ID:</b>24304505</h1>
                                <h1><b className="mr-2">Size:</b>M</h1>
                                 </div>
                            </div>
                            <div className="price-detail flex items-center justify-center flex-col flex-1">
                                <div className="product-amount-container flex items-center">
                                    <AddIcon/>
                                    <p className="m-5 text-2xl">2</p>
                                    <RemoveIcon/>
                                </div>
                                <div className="price">
                                    <p className="text-2xl">$200</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-summary-container flex-1 border p-10">
                        ORDER SUMMARY
                    <div className="summary-item mt-5 mb-5 flex justify-between">
                        <span className="summary-total mr-2">Subtotal:</span>
                        <span className="summary-price">$400</span>
                    </div>
                    <div className="summary-item mt-5 mb-5 flex justify-between">
                        <span className="summary-shipping mr-2">Shipping:</span>
                        <span className="summary-price">$4.99</span>
                    </div>
                    <div className="summary-total mt-5 mb-5 flex justify-between">
                        <span className="summary-shipping font-bold mr-2">Total:</span>
                        <span className="summary-price">$404.99</span>
                    </div>
                    <button className="border p-2">CHECK OUT NOW</button>
                </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Cart;