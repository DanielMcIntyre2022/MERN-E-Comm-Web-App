import Cart from "./pages/Cart";
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from './pages/Register'
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Payment from './pages/Payment';
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <div className="App">
        <Routes>  
            <Route exact path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<ProductList/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
            <Route path='/register' element={user ? <Navigate to='/'/> : <Register/>}/>
            <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;