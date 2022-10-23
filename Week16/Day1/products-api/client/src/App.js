import Shop from './components/Shop'
import Product from './components/Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shop title={'My Shop'} />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
