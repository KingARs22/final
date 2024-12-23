
import './App.css';
import  Navbar  from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import ProductForm from './Pages/ProductForm';
import Login from './Pages/Login';
import ProductDisplay from './Components/ProductDisplay/ProductDisplay';
import Cart from './Pages/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
        <Route path='/product/:productId' element={<ProductDisplay/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/creating-product' element={<ProductForm/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
