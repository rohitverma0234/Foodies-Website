import React from 'react'
import {NavLink} from "react-router-dom"
import styled from "styled-components"

const Navbar = () => {

  const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1280px;

    ul{
      display: flex;
    list-style: none;
    gap: 4.8rem;
    justify-content: center;
    align-items: center;
    }
    
    ul li{
      text-underline-position: under;
    }`
  return (
    <Navbar className='menu-lists'>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/top">Our Top Picks</NavLink></li>
            <li><NavLink to="/find">Find Us</NavLink></li>
        </ul>
    </Navbar>
  )
}

export default Navbar