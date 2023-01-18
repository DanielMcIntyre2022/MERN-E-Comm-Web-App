import './App.css';
import ProductList from './pages/productList/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <Route path='/' element={<ProductList/>}/>
        {/* <Route path='/users' element={<UserList/>}/> */}
        <ProductList/>
        </div>
    </Router>
  );
}

export default App;
