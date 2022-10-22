import React from 'react'
import HeroSection from './components/Herosection/HeroSection'

const About = () => {

  const data = {
    title:"Just Eat Healthy Food to Live Longer & Aspiring Life",
    img:"/about.jpg"
  }

  return (
    <HeroSection {...data}/>
  )
}

export default About