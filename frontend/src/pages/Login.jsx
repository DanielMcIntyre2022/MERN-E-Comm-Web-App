
function Login() {
  return (
    <div className="register-page-container w-screen h-screen flex items-center justify-center">
        <div className="register-wrapper p-20 w-40% max-sm:w-75%">
            <h1 className="text-lg">SIGN IN</h1>
            <form className="flex flex-col">
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="username"/>
                <input className="border flex-1 mb-3 mt-3 p-2" placeholder="password"/>
                <button className="border p-2">LOGIN</button>
                <a className="mt-5 mb-5 cursor-pointer">Forgot password?</a>
                <a className="cursor-pointer">Create a new account</a>
            </form>
        </div>
    </div>
  )
}

export default Login;