import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo from '../../images/FD1.webp'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const[menu,setMenu]=useState("home")

    const {getTotalCartAmount}=useContext(StoreContext);

  return (
    <div className='navbar'>
        <Link to="/home"><img src={logo} alt='' className='logo'/></Link>          
          <ul className='navbar-menu'>
              <Link to="/home"><li onClick={()=>setMenu('home')} className={menu==="home"?"active":""}>Home</li></Link>
              <Link to="/menu"> <li onClick={()=>setMenu('menu')} className={menu==="menu"?"active":""} >Menu</li></Link>
              <Link to="/contact-us"><li onClick={()=>setMenu('contact-us')} className={menu==="contact-us"?"active":""}>Contact us</li></Link>
          </ul>
        
        <div className='navbar-right'>
            <SearchIcon />
            <div className='navbar-search-icon'>
            <Link to='/cart'><ShoppingBagIcon /></Link>
            <div className={getTotalCartAmount()===0 ? "" : "dot"}>

            </div>        
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar