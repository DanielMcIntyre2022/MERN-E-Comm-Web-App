import { Link } from 'react-router-dom';

function Product({item}) {
  return (
    <div className="product-container flex-1 m-5 flex items-center justify-center mt-36">
          <div className="product-image-container w-56 max-sm:-mb-20">
          <Link to={`/product/${item._id}`}>
            <img className="h-60 w-56" src={item.img}/>
            <div className="info-container flex items-center relative justify-center">
              <p className='mt-5 font-bold'>${item.price}.00</p>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Product;