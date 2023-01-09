import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  return (
        <div className="shopping-cart-container">
            <Annoucements/>
            <Navbar/>
                <div className="shopping-cart-wrapper p-20">
                    <h1 className="text-center">YOUR BAG</h1>
                    <div className="top-container flex items-center justify-between">
                        <button className="top-btn p-5 border">Continue Shopping</button>
                    <div className="top-text-container">
                        <span className="cursor-pointer underline m-2">Shopping Bag(2)</span>
                        <span className="cursor-pointer underline m-5">Your Wishlist(2)</span>
                    </div>
                    <button className="top-btn p-5 border">Checkout Now</button>
                </div>
                    <div className="bottom-container"></div>
                </div>
            <Footer/>
        </div>
  )
}

export default Cart;