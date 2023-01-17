import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from '../components/NewsLetter';
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {

    const location = useLocation();
    const catergoryLink = location.pathname.split('/')[2];
    const [ filter, setFilters ] = useState({});

    const handleFilters = (e) => {
        const valueSelected = e.target.value;
        setFilters({
            ...filter,
            [e.target.name]: valueSelected
        });
    };

    console.log(filter);

  return (
    <div className="product-list-container">
         <Annoucements/>
         <Navbar/>
            <h1 className="m-5">Dresses</h1>
         <div className="filter-container flex justify-between ml-20 mr-20 max-sm:flex max-sm:flex-col">
            <div className="filter m-2"><span className="text-base font-bold mr-2 ">Filter Products:</span>
                <select name='color' className="p-2 mr-5" onChange={handleFilters}>
                    <option disabled>
                        Color
                    </option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
                <select name='size' className="p-2" onChange={handleFilters}>
                    <option disabled>
                        Size
                    </option>
                    <option>XL</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                </select>
            </div>
            <div className="filter m-2"><span className="text-base font-bold mr-2">Sort Products:</span>
                <select className="p-2">
                    <option selected>Newest</option>
                    <option>Price (Highest)</option>
                    <option>Price (Lowest) </option>
                </select>
            </div>
         </div>
         <Products/>
         <NewsLetter/>
         <Footer/>
    </div>
  )
}

export default ProductList;