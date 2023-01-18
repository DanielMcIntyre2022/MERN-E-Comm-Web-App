import './App.css';
import ProductList from './pages/productList/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path='/products' element={<ProductList/>}/>
        </Routes>
        </div>
    </Router>
  );
}

export default App;
