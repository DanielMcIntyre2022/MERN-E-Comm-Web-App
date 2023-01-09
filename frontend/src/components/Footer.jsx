import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer() {
  return (
    <div className="footer-container flex">
    <div className="left-container flex flex-col flex-1 p-5 ml-5">
        <div className="logo-container">
            <h1>E-Commerce</h1>
            <div className='description-container mt-5 mb-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Ad dignissimos temporibus modi quibusdam. 
                Odit numquam provident, voluptatibus accusamus 
                veniam maxime id. Iste voluptatibus veniam tenetur </p>
            </div>
        </div>
        <div className="socials-container flex">
            <div className='socials-facebook w-7'>
                <FacebookOutlinedIcon/>
            </div>
            <div className='socials-instagram w-7'>
                <InstagramIcon/>
            </div>
            <div className='socials-twitter w-7'>
                <TwitterIcon/>
            </div>
            <div className='socials-pinterest w-7'>
                <PinterestIcon/>
            </div>
        </div>
    </div>
    <div className="center-container flex-1 pt-5">
        <h3 className='mb-5'>Useful Links</h3>
        <ul className='m-0 p-0 flex flex-wrap'>
            <li className='w-50% mb-2'>Home</li>
            <li className='w-50% mb-2'>Cart</li>
            <li className='w-50% mb-2'>Men's Fashion</li>
            <li className='w-50% mb-2'>Women's Fashion</li>
            <li className='w-50% mb-2'>Accessories</li>
            <li className='w-50% mb-2'>My Account</li>
            <li className='w-50% mb-2'>Track Your Order</li>
            <li className='w-50% mb-2'>Wishlist</li>
        </ul>
    </div>
    <div className="right-container flex-1 p-5">
        <div className='contact-container'>
            <h3>Contact</h3>
            <div className='contact-logo-container mt-5'>
                <p className='mb-2'><RoomIcon className='mr-2'/>Fake Street</p>
                <p className='mb-2'><CallIcon className='mr-2'/>Fake number</p>
                <p className='mb-2'><MailOutlineIcon className='mr-2'/>Fake email</p>
                <img className="w-60%"src="https://user-images.githubusercontent.com/52581/44514079-4219bb80-a713-11e8-83a4-88f26bd07e2a.png"/>
             </div>
        </div>
    </div>
</div>
  )
}

export default Footer;