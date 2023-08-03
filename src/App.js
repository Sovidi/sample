import {Link, BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Home from './page/Home';
import Product from './page/Product';

function App() {
  
  return (
    <BrowserRouter>
      <div className='homeBox'>
        <Link to="/home"> Home </Link>
        <Link to="/product"> Product </Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
