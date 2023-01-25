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
        <div className="register-wrapper p-20 w-40% max-sm:w-75% -mt-20">
            <h1 className="text-lg">CREATE AN ACCOUNT</h1>
            <form className="flex flex-col flex-wrap">
                <input className="border-4 flex-1 mb-3 mt-3 p-2" placeholder="name"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2" placeholder="last name"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2" placeholder="email"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2" placeholder="username"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2" type='password' placeholder="password"/>
                <input className="border-4 flex-1 mb-3 mt-3 p-2" type='password' placeholder="confirm password"/>
                <div>
                  <button onClick={handleClick} className="flex border-4 p-2">CREATE</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register;