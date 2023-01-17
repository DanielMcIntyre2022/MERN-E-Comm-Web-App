import { popularProducts } from '../data';
import { useState, useEffect } from 'react';
import Product from './Product';
import axios from 'axios';

function Products({catergoryLink, filters, sort}) {
  
  const [ products, setProducts ] = useState([]);
  const [ filteredProducts, setFilteredProducts ] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try {
        const response = await axios.get( catergoryLink 
          ? `http://localhost:3060/api/products?category=${catergoryLink}` 
          : `http://localhost:3060/api/products`);
          setProducts(response.data);
      } catch (error) {
        
      }
    };
    getProducts();
  },[catergoryLink]);

  useEffect(() => {
    catergoryLink && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        )
      )
    );
  },[products, catergoryLink, filters]);

  useEffect(() => {
    if(sort === 'newest') {
      setFilteredProducts(prev =>
          [...prev].sort((a,b) => a.createdAt - b.createdAt)
        );
    } else if (sort === 'highest') {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.price - b.price)
        );
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a,b) => b.price - a.price)
        );
    }
  },[sort]);

  return (
    <div className='products-container p-20 flex justify-between flex-wrap'>
        {filteredProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products;