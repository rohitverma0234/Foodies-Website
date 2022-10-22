import React from 'react'
import Banner from './components/Banner/Banner'
import Choose from './components/ChooseSection/Choose'
import HeroSection from './components/Herosection/HeroSection'
import Scores from './components/scores/Scores'
import Learn from './components/learn/Learn'
import Learn2 from './components/learn/Learn2'
import Banner2 from './components/Banner/Banner2'
import Products from './components/products/Products'



const Home = () => {

  const data = {
    title:"Just Eat Healthy Food to Live Longer & Aspiring Life",
    img:".//hero.png"
  }


  return (
    <>
    <HeroSection {...data}/>
    <Choose/>
    <Scores/>
    <Banner/>
    <Learn/>
    <Learn2/>
    <Products/>
    <Banner2/>
    
    
    </>
  )
}

export default Home