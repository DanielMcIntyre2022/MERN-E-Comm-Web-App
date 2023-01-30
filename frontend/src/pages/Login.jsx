import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import { resetError } from '../redux/userRedux';

function Login() {

  const [ username, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error} = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  };

  return (
    <>
    <Navbar/>
    <div className="login-page-container w-screen h-screen flex items-center justify-center">
        <div className="login-wrapper w-40%">
            <h1 className="text-lg text-center">SIGN IN</h1>
            <form className="flex flex-col flex-wrap">
                <input className="border-4 mb-3 mt-3 p-2" placeholder="username" onChange={(e) => {
                  setUserName(e.target.value);
                  if (username.trim () == '' && password.trim() == '') {
                    dispatch(resetError());
                  }
                }}/>
                <input className="border-4 mb-3 mt-3 p-2" placeholder="password" type="password" onChange={(e) => {
                  setPassword(e.target.value);
                if (username.trim () == '' && password.trim() == '') {
                  dispatch(resetError());
                }
                }}/>
                <div className='flex items-center justify-center'>
                <button className="border-4 p-2 w-50%" onClick={handleClick}>LOGIN</button>
                </div>
               {
                error && <span className='text-red-400'>Wrong username or password</span> 
               } 
               <div className='flex items-center justify-center mt-10'>
                <a className="cursor-pointer"><Link to='/register'>Create a new account</Link></a>
                </div>
            </form>
        </div>
    </div>
  </>
  )
}

export default Login;