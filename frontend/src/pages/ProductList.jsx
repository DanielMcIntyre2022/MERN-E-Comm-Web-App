import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {

    const location = useLocation();
    const catergoryLink = location.pathname.split('/')[2];
    const [ filters, setFilters ] = useState({});
    const [ sort, setSort ] = useState("newest")

    const handleFilters = (e) => {
        const valueSelected = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: valueSelected
        });
    };

  return (
    <div className="product-list-container">
         <Annoucements/>
         <Navbar/>
         <h1 className="m-5">{catergoryLink}</h1>
         <div className="filter-container flex justify-between ml-20 mr-20 max-sm:flex max-sm:flex-col -mb-10">
            <div className="filter m-2"><span className="text-base font-bold mr-2">Filter Products:</span>
                <select name='color' className="p-2 mr-5" onChange={handleFilters}>
                    <option disabled>
                        Color
                    </option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Red</option>
                    <option>Blue</option>
                    <option>Beige</option>
                    <option>Green</option>
                </select>
            </div>
            <div className="filter m-2"><span className="text-base font-bold mr-2">Sort Products:</span>
                <select onChange={e => setSort(e.target.value)} className="p-2">
                    <option value="newest">Newest</option>
                    <option value="highest">Price (Highest)</option>
                    <option value="lowest">Price (Lowest) </option>
                </select>
            </div>
         </div>
         <Products catergoryLink={catergoryLink} filters={filters} sort={sort}/>
         <Footer/>
    </div>
  )
}

export default ProductList;