import { Link } from 'react-router-dom';

function Product({item}) {
  return (
    <div className="product-container flex-1 m-5 min-w-280 h-350 flex items-center justify-center bg-slate-100 mt-10">
        <div className="circle">
          <div className="product-image-container flex items-center justify-center w-56">
          <Link to={`/product/${item._id}`}>
            <img className="h-60 w-100%" src={item.img}/>
          </Link>
          </div>
          <div className="info-container flex items-center justify-center">
            <div className="search-icon-container rounded-full">
              <p><b>${item.price}.00</b></p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product;