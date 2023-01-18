import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  
  const cartQuantity = useSelector(state => state.cart.quantity);
  
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
                <h1 className='font-bold max-sm:ml-5'>E-Comm</h1>
            </Link>
           </div>
           <div className="right-container flex items-center justify-end flex-1 max-sm:justify-center max-sm:flex-2">
              <div className='menu-item-container flex space-x-6 ml-5'>
                <Link to='/register'>
                    <div className='menu-item-one'><h1 className='max-sm:text-xs'>REGISTER</h1></div>
                </Link>
                <div className='menu-item-two'><h1 className='max-sm:text-xs'>LOGIN</h1></div>
                <div className='menu-item-three'>
                  <Link to='/cart'>
                <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppingCartOutlinedIcon color="action" />
               </Badge>
                </Link>
              </div>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Navbar;