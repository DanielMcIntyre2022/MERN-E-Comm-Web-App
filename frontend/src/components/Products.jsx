import { popularProducts } from '../data';
import { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

function Products({catergoryLink, filters, sort}) {
  
  const [ products, useProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try {
        const response = await axios.get('http://localhost:3048/api/products');
        console.log(response);
      } catch (error) {
        
      }
    };
    getProducts();
  },[catergoryLink]);

  return (
    <div className='products-container p-20 flex justify-between flex-wrap'>
        {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products;