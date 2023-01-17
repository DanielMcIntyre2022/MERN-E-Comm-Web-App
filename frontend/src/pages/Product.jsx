import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from "../requestMethods";

function Product() {

    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [ product, setProduct ] = useState({});
    const [ quantity, setQuantity ] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await publicRequest.get('/products/find/' + productId);
                setProduct(response.data);
            } catch (error) {
            }
        }
        getProduct();
    },[productId]);

    const handleQuanitity = (type) => {
        if(type === 'decrease') {
            setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    };

  return (
    <div className="product-page-container">
        <Annoucements/>
        <Navbar/>
            <div className="product-wrapper p-50 flex mt-10 mb-10 max-sm:flex-col">
                <div className="img-container flex-1">
                    <img className="w-100% object-cover ml-10 max-sm:w-70% max-sm:mr-10 max-sm:pl-12" src={product.img} alt="" />
                </div>
                <div className="info-container flex-1 pt-2 pb-2 pl-20 pr-20">
                    <h1 className="font-semibold">{product.title}</h1>
                    <p className="mt-5">{product.description}</p>
                    <p className="mt-5">${product.price}</p>
                    <div className="filter-container flex justify-between w-50% mt-10 mb-10 max-sm:w-100%">
                        <div className="filter-one">
                            <h1>Color</h1>
                            <option></option>
                        </div>
                        <div className="filter-two">
                            <h1>Size</h1>
                            <select className="p-2 mr-5">
                                {product.size.map((s) => (
                                     <option key={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="add-container flex items-center w-50% justify-between max-sm:w-100%">
                        <div className="amount-container flex items-center">
                            <button className="remove-btn" onClick={() => handleQuanitity('decrease')}>-</button>
                                <p className="amount ml-2 mr-2">{quantity}</p>
                            <button className="add-btn" onClick={() => handleQuanitity('increase')}>+</button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product;