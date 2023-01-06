import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Navbar() {
  return (
    <div className='nav-container h-20'>
        <div className="wrapper flex justify-between items-center pt-10 pb-10 px-20">
        <div className="left-container flex items-center flex-1">
              <div className="language-container cursor-pointer text-sm p-2.5">EN</div>
              <div className="search-bar-container flex items-center border p-2.5">
                <input className='border-none'/>
                <i><SearchIcon/></i>
              </div>
           </div>
           <div className="center-container text-center flex-1">
            <h1 className='font-bold'>E-Commerce</h1>
           </div>
           <div className="right-container flex items-center justify-end flex-1">
              <div className='menu-item-container flex space-x-6'>
                <div className='menu-item-one'>REGISTER</div>
                <div className='menu-item-two'>SIGN IN</div>
                <div className='menu-item-three'>
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon color="action" />
               </Badge>
              </div>
             </div>
           </div>
      </div>
    </div>
  )
}

export default Navbar;