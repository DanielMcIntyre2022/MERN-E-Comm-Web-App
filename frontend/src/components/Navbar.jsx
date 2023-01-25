import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { logoutUser } from '../redux/apiCalls';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from "../redux/cartRedux";

function Navbar() {

  const dispatch = useDispatch();
  
  const cartQuantity = useSelector(state => state.cart.quantity);
  const loggedUser = useSelector(state => state.user.currentUser);

  const handleLogoutClick = () => {
    logoutUser(dispatch);
    dispatch(clearCart());
  };

  const handleLoginClick = () => {
    dispatch(clearCart());
  }

  
  return (
    <div className="nav-container h-20 max-sm:-ml-16">
      <div className="wrapper flex justify-between items-center pt-10 pb-10 px-20">
           <div className="left-container flex items-center flex-1">
              <div className="language-container cursor-pointer text-sm p-2.5 max-sm:hidden">EN</div>
              <div className="search-bar-container flex items-center border p-2.5">
                <input className='outline-none max-sm:w-28' placeholder='Search'/>
                <i><SearchIcon/></i>
              </div>
           </div>
           <div className="center-container text-center flex-1">
            <Link to='/'>
                <h1 className='font-bold max-sm:ml-5 text-2xl max-sm:text-base'>E-Commerce</h1>
            </Link>
           </div>
           <div className="right-container flex items-center justify-end flex-1 max-sm:justify-center max-sm:flex-2">
              <div className='menu-item-container flex space-x-6 ml-5'>
              {
                  loggedUser ? <div className='logout-container'> 
                  <button
                  onClick={handleLogoutClick}
                  >
                      LOGOUT 
                  </button>
                  </div> 
                  : <div className='menu-item-two flex space-x-6'>
                    <div className='max-sm:text-xs'>
                      
                      <Link to='/login'>      
                        <button onClick={handleLoginClick}>LOGIN</button>          
                        </Link>
                    </div>
                    <div className='max-sm:text-xs'><Link to='/register'>REGISTER</Link></div>
                  </div>
                }  
                {
                  loggedUser && <div className='menu-item-three'>
                  <Link to='/cart'>
                <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppingCartOutlinedIcon color="action" />
               </Badge>
                </Link>
              </div>
                } 
             </div>
           </div>
      </div>
    </div>
  )
}

export default Navbar;