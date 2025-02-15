import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home.js'
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer.js';
import LoginPopup from './components/LoginPopup/LoginPopup.js';
import ExploreMenu from './components/ExploreMenu/ExploreMenu.js';

function App() {

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin ? <LoginPopup  setShowLogin={setShowLogin}/> : <></>}
      <div className="App">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/menu" element={<ExploreMenu />} />
          <Route path="/contact-us" element={<Footer />} />
        </Routes>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
