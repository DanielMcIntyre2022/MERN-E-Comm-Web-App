import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function Product({item}) {
  return (
    <div className="product-container flex-1 m-5 min-w-260 h-350 flex items-center justify-center bg-slate-100">
        <div className="circle">
          <div className="product-image-container flex items-center justify-center">
            <img className="h-60 w-60%" src={item.img}/>
          </div>
          <div className="info-container flex items-center justify-center">
            <div className="cart-icon-container rounded-full">
                <ShoppingCartOutlinedIcon/>
            </div>
            <div className="search-icon-container rounded-full">
                <Link to={`/product/${item._id}`}>
                    <SearchIcon/>
                </Link>
            </div>
            <div className="favourite-icon-container">
                <FavoriteBorderIcon/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product;