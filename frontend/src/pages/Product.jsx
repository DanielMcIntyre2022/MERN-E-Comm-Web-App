import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from 'react-redux';

function Product() {

    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [ product, setProduct ] = useState({});
    const [ quantity, setQuantity ] = useState(1);
    const [ size, setSize ] = useState('');
    const dispatch = useDispatch();

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
            quantity > 1 && setQuantity(quantity - 1)
        } else {
            setQuantity(quantity + 1)
        }
    };

    const handleClick = () => {
        dispatch(addProduct({ ...product, quantity, size }));
    };

  return (
    <div className="product-page-container">
        <Annoucements/>
        <Navbar/>
            <div className="product-wrapper p-50 flex mt-10 mb-10 max-sm:flex-col justify-center items-center m-auto">
                <div className="img-container -ml-10">
                    <img className="w-100% h-80 object-cover ml-20 max-sm:w-70% max-sm:mr-10 max-sm:pl-12" src={product.img} alt="" />
                </div>
                <div className="info-container t-2 pb-2 pl-20 pr-20 ml-20">
                    <h1 className="font-semibold">{product.title}</h1>
                    <p className="mt-5">${product.price}</p>
                    <div className="filter-container flex justify-between w-100% mt-10 mb-10 max-sm:w-100%">
                        <div className="filter-one">
                            <p>Color: {product.color}</p>
                            <option></option>
                        </div>
                        <div className="filter-two">
                            <h1>Size</h1>
                            <select className="filter-size p-2 mr-5" onChange={(e)=> setSize(e.target.value)}>
                                {/* {product.size.map((filteredSize) => (
                                     <option className='filterOption' key={filteredSize}>{filteredSize}</option>
                                ))} */}
                            </select>
                        </div>
                    </div>
                    <div className="add-container flex items-center w-100% justify-between max-sm:w-100%">
                        <div className="amount-container flex items-center">
                            <button className="remove-btn" onClick={() => handleQuanitity('decrease')}>-</button>
                                <p className="amount ml-2 mr-2">{quantity}</p>
                            <button className="add-btn" onClick={() => handleQuanitity('increase')}>+</button>
                        </div>
                        <button className="border-4 p-2 ml-10" onClick={handleClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Product;