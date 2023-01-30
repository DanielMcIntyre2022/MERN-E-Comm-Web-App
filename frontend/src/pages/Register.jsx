import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
    <Navbar/>
    <div className="register-page-container w-screen h-screen flex items-center justify-center">
        <div className="register-wrapper w-40% ">
            <h1 className="text-lg text-center max-sm:text-sm">CREATE AN ACCOUNT</h1>
            <form className="flex flex-col flex-wrap">
                <input className="border-4 flex-1 mb-3 mt-3 p-2 max-sm:text-sm" placeholder="name"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2 max-sm:text-sm" placeholder="last name"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2 max-sm:text-sm" placeholder="email"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2 max-sm:text-sm" placeholder="username"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2 max-sm:text-sm" type='password' placeholder="password"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2 max-sm:text-sm" type='password' placeholder="confirm password"/>
                <div>
                  <div className='flex items-center justify-center'>
                  <button onClick={handleClick} className="flex border-4 p-2 max-sm:text-sm">CREATE</button>
                  </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register;