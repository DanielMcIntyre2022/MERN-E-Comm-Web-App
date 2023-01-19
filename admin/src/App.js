import './App.css';
import ProductList from './pages/productList/ProductList';
import Product from './pages/productList/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path='/product' element={<ProductList/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
