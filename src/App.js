import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Home';
import {ThemeProvider} from "styled-components"
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Learn from './components/learn/Learn';
import Products from './components/products/Products';
import Banner2 from './components/Banner/Banner2';


const App = () => {

  const theme = {
    colors:{
      color:"red",
    }
  }


  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <GlobalStyle />
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Learn/>} />
      <Route path="/top" element={<Products/>} />
      <Route path="/find" element={<Banner2/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;