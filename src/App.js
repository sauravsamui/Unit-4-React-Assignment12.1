
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails"
import Navbar from './Component/Navbar';
import Aboutus from './pages/Aboutus';
import Footer from './Component/Footer';
import FAQ from "./pages/FAQ"
import ContactUs from './pages/ContactUs';
function App() {
  return (
    <div className='App' >
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='productDetails/:id' element={<ProductDetails/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/contactUs' element={<ContactUs/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
