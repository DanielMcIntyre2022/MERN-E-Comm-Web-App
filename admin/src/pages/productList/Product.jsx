import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className="product flex-[4] p-10">
        <div className="product-title-container flex items-center justify-between">
            <h1 className="product-title">Product</h1>
            <Link to='/newProducts'>
                <button className="product-add-button w-20 p-3 bg-teal-500 rounded-lg text-white">Create</button>
            </Link>
        </div>
    </div>
  )
}

export default Product;