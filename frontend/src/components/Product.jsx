import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product({item}) {
  return (
    <div>
        <div className="product-container flex-1 m-5">
        <div className="circle">
          <div className="product-image-container">
            <img src={item.img}/>
          </div>
          <div className="info-container">
            <div className="cart-icon-container">
                <ShoppingCartOutlinedIcon/>
            </div>
            <div className="search-icon-container">
                <SearchIcon/>
            </div>
            <div className="favourite-icon-container">
                <FavoriteBorderIcon/>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Product;