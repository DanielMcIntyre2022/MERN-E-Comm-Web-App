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
    } else if (sort === 'lowest') {
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
    <div className='products-container'>
      <div className='popular-items-container mt-56'>
      <h1 className='text-center text-2xl'>Popular Items</h1>
          <div className='popular-product-photos p-20 flex flex-wrap -mt-20 -mb-10 max-sm:-mt-52 '>
            {catergoryLink ? filteredProducts.map(item => (
                <Product item={item} key={item.id}/>
            )) : products.slice(0,8).map(item => (
                <Product item={item} key={item.id}/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Products;