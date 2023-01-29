import { Link } from 'react-router-dom';

function Product({item}) {
  return (
    <div className="product-container flex-1 m-5 flex items-center justify-center mt-36 max-sm:mb-16">
          <div className="product-image-container flex items-center justify-center w-56">
          <Link to={`/product/${item._id}`}>
            <img className="h-60 w-100%" src={item.img}/>
            <div className="info-container flex items-center relative justify-center">
              <p className='mt-5 font-bold'>${item.price}.00</p>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Product;