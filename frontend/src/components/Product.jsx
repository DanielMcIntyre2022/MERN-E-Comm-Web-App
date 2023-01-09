import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product({item}) {
  return (
    <div>
        <div className="product-container flex-1 m-5 min-w-260 h-350 flex 
        items-center justify-center">
        <div className="circle">
          <div className="product-image-container">
            <img className="h-80" src={item.img}/>
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