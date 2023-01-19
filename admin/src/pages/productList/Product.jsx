import { Link } from 'react-router-dom';
import { productData } from '../../data';

function Product() {
  return (
    <div className="product flex-[4] p-10">
        <div className="product-title-container flex items-center justify-between">
            <h1 className="product-title">Product</h1>
            <Link to='/newProducts'>
                <button className="product-add-button w-20 p-3 bg-teal-500 rounded-lg text-white">Create</button>
            </Link>
        </div>
        <div className='product-top flex'>
            <div className='product-top-left flex-1'>
              
            </div>
            <div className='product-top-right flex-1 p-10 shadow-xl'>
                <div className='product-info-top flex items-center'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrCRZY-C1hrAm9VlqOPjWkN5vFRYvqCShRg&usqp=CAU' className='product-info-image rounded-full object-cover'/>
                    <span className='proudct-name font-semibold ml-10'>Winter Sweater</span>
                </div>
                <div className='product-info-bottom mt-5'>
                    <div className='product-info-item flex justify-between w-36'>
                        <span className='product-info-key'>id:</span>
                        <span className='product-info-key font-light'>123</span>
                    </div>
                </div>
                <div className='product-info-item flex justify-between w-36'>
                    <span className='product-info-key'>sales:</span>
                    <span className='product-info-key font-light'>123</span>
                </div>
                <div className='product-info-item flex justify-between w-36'>
                    <span className='product-info-key'>active:</span>
                    <span className='product-info-key font-light'>yes</span>
                </div>
                <div className='product-info-item flex justify-between w-36'>
                    <span className='product-info-key'>in stock:</span>
                    <span className='product-info-key font-light'>no</span>
                </div>
            </div>
        </div>
        <div className='product-bottom shadow-xl'>
            <form className='product-form'>
                <div className='product-form-left'>
                    <label>Product Name:</label>
                    <input type='text' placeholder='Winter Sweater'/>
                    <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='idStock'>
                            <option value='yes'>Yes</option>
                            <option value='no'>No</option>
                        </select>
                </div>
                <div className='product-form-right'></div>
            </form>
        </div>
    </div>
  )
}

export default Product;