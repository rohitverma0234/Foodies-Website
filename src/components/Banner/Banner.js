import React from 'react'
import styled from 'styled-components'
import { Button } from '../Button'

const Banner = () => {
  return (
    <Wrapper>
        <div className='banner-color'>
            <Button className='banner-btn'>Explore Tasty</Button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding-top: 100px;

    .banner-color{
        background-color:black;
        display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
    }
    
    .banner-btn{
        padding:20px;
        
    }`

export default Banner