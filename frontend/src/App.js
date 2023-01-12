import Cart from "./pages/Cart";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Product from "./pages/Product";
import Payment from './pages/Payment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>  
            <Route path='/payments' element={<Payment/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
