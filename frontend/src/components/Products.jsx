import { popularProducts } from '../data';
import Product from './Product';

function Products() {
  return (
    <div className='products-container p-20 flex justify-between flex-wrap'>
      {popularProducts.map(item => (
            <Product item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products;