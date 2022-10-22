import React, { useState } from 'react'
import Navbar from '../Navbar'
import {NavLink} from "react-router-dom"
import styled from "styled-components";
import { CgSearch } from "react-icons/cg";
import { BsCartCheck } from "react-icons/bs";

const Header = () => {

  const[searchIcon, setSearchIcon]=useState();

  const[cross,setCross] = useState();


  const Header = styled.header`
  background-color: #f8f9fa;
  display:flex;

  .logo{
    width:100px;
  }

  .search-div{
    display:flex;
  }

  .search-logo{
    font-size: 25px;
    margin-top: 28px;
    cursor:pointer;
    visibility:visible;
    position: absolute;
  }

  .search-logoactive{
    color:red;
    visibility:hidden;
  }
  
  .search-bar{
    margin: 18px 50px 9px 30px;
    visibility:hidden;
  }

  .search-baractive{
    visibility: visible;
    margin: 22px 10px 18px 33px;
    padding: 6px;
    
  }

  .cross{
    margin-right:50px;
    visibility:hidden;
    display:none;
  }

  .crossactive{
    visibility:visible;
    cursor:pointer;
    position: absolute;
    right: 3px;
    top: 14px;
  }

  .cart{
    font-size: 30px;
    margin-top: 20px;
    margin-right: 53px;
  }
  `;

  return (
    <Header>
        <NavLink to="/"><img className='logo' src="./tasty.png" alt=""/></NavLink>
        <Navbar/>
        <div className='search-div'>
        <CgSearch className={cross ? "search-logoactive":"search-logo"} onClick={()=>setSearchIcon(true)} onclick={()=>setCross(false)}  />
        
        <div className=''>
        <input className={searchIcon ? "search-baractive" : "search-bar"} type="search" id="search" name="search" placeholder='Search'></input>
        </div>


        <BsCartCheck className='cart'/>
        
        </div>
    </Header>
  )
}



export default Header 