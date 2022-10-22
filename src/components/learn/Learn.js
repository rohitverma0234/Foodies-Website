import React from 'react'
import styled from "styled-components"
import { Button } from '../Button'
import { NavLink } from "react-router-dom"

const Learn = () => {
    
  return (
    <Wrapper>
    <div className='flex'>
        <div className='hero-data'>
            <div><h1 className='hero-heading'>Learn About Tasty</h1>
            <p className='hero-para'>Organic Food is grown without the usage of synthetic chemicals and preservatives such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's) Organic food produces fresh meat, dairy products which can be used in your daily routine. Our clients have been with us since decade and never got any complain in the terms of product quality , taste or cost. We are one ideal producers of organic foods and fruits right now in Pakistan.</p>
            <NavLink to="/"><Button>Find us</Button></NavLink>
            </div>
        </div>

        <div className='flex'>
            <div>
                <img src="./learn1.jpg" alt='' width={300} style={{borderRadius:"40px", paddingRight:"20px"}}/>
            </div>

            <div>
                <img src="./learn2.jpg" alt='' width={300} style={{borderRadius:"40px", marginBottom:"40px"}}/>
                <div>
                <img src="./learn3.jpg" alt='' width={300} style={{borderRadius:"40px"}}/>
                </div>
            </div>

        </div>
    </div>
</Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top:100px;

    .flex{
        display:flex;
    }
    
    .hero-data{
        padding-left: 100px;
        width: 800px;
        align-items: center;
        display: grid;
        justify-content: center;
        padding-right: 40px;
    }

    .hero-heading{
        font-size: 40px;
    }

    .hero-para{
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 19px;
    }

    .flex{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media only screen and (max-width:600px){
        .flex{
            display:grid;
        }

        .hero-data{
            padding-left:20px;
            padding-right:20px;
            width:400px;
            margin-bottom:50px;
        }
    }
    `

export default Learn