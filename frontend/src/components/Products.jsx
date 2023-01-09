import { popularProducts } from '../data';
import Product from './Product';

function Products() {
  return (
    <div className='products-container p-20 flex'>
      {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products;