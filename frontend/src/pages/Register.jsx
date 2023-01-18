import Navbar from '../components/Navbar';

function Register() {
  return (
    <>
    <Navbar/>
    <div className="register-page-container w-screen h-screen flex items-center justify-center">
        <div className="register-wrapper p-20 w-40% max-sm:w-75%">
            <h1 className="text-lg">CREATE AN ACCOUNT</h1>
            <form className="flex flex-wrap">
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="name"/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="last name"/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="email"/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="username"/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="password"/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="confirm password"/>
                <button className="border p-2">CREATE</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Register;