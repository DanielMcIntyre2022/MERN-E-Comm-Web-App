import { Link, useLocation } from 'react-router-dom';
import PublishIcon from '@mui/icons-material/Publish';
import { useSelector } from 'react-redux';

function Product() {

    const location = useLocation();
    const productId = location.pathname.split('/')[2];

    console.log(location);
    console.log(productId);

    const product = useSelector(state => 
        state.product.products.find(product => product._id === productId)
    );

  return (
    <div className="product flex-[4] p-10">
        <div className="product-title-container flex items-center justify-between">
            <h1 className="product-title">Product</h1>
            <Link to='/newProduct'>
                <button className="product-add-button w-20 p-3 bg-teal-500 rounded-lg text-white">Create</button>
            </Link>
        </div>
        <div className='product-top flex'>
            <div className='product-top-left flex-1'>
            </div>
            <div className='product-top-right flex-1 p-10 shadow-xl'>
                <div className='product-info-top flex items-center'>
                    <img src={product.img} className='product-info-image rounded-full object-cover w-32'/>
                    <span className='proudct-name font-semibold ml-10'>{product.title}</span>
                </div>
                <div className='product-info-bottom mt-5'>
                    <div className='product-info-item flex justify-between w-36'>
                        <span className='product-info-key'>{product._id}</span>
                        <span className='product-info-key font-light'>123</span>
                    </div>
                </div>
                <div className='product-info-item flex justify-between w-36'>
                    <span className='product-info-key'>active:</span>
                    <span className='product-info-key font-light'>yes</span>
                </div>
                <div className='product-info-item flex justify-between w-36'>
                    <span className='product-info-key'>in stock:</span>
                    <span className='product-info-key font-light'>{product.inStock}</span>
                </div>
            </div>
        </div>
        <div className='product-bottom shadow-xl'>
            <form className='product-form flex justify-between'>
                <div className='product-form-left flex flex-col'>
                    <label>Product Name:</label>
                    <input type='text' placeholder={product.title}/>
                    <label>Product Description:</label>
                    <input type='text' placeholder={product.description}/>
                    <label>Product Price:</label>
                    <input type='text' placeholder={product.price}/>
                    <label className='mb-10 text-slate-400'>In Stock</label>
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
                <div className='product-form-right flex flex-col justify-around'>
                    <div className="products-upload flex items-center">
                        <img src={product.img}></img>
                        <label for='file'>
                            <PublishIcon/>
                        </label>
                        <input type='file' id='file' style={{ display: 'none'}}></input>
                    </div>
                    <button className='product-button'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product;