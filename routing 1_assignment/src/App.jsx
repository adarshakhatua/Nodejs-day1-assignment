import './App.css';
import { Navbar } from './components/navbar';
import { NavItem } from './components/navitem';
import { Banner } from './components/banner';
import Footer from './components/footer';
import { ProductList } from './components/productList';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Cart } from './components/cart';
import { Faq } from './components/faq';


function App() {

  return (
    <div className="App">
      <Navbar> </Navbar>
      
      <Banner></Banner>

      <Routes>
        <Route path='/' element={<ProductList></ProductList>}></Route>
        <Route path='/bestseller' element={<ProductList></ProductList>}></Route>
        <Route path='/topdeals' element={<ProductList></ProductList>}></Route>
        <Route path='/electronics' element={<ProductList></ProductList>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/faq' element={<Faq></Faq>}></Route>
      </Routes>

      
      

      <Footer></Footer>
    </div>
  );
}

export default App;
