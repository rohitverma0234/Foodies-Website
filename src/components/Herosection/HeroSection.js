import React from 'react'
import styled from "styled-components"
import { Button } from '../Button'
import { NavLink } from "react-router-dom"

const HeroSection = (props) => {
    return (
        <Wrapper>
            <div className='flex'>
                <div className='hero-data'>
                    <div><h1 className='hero-heading'>{props.title}</h1>
                    <p className='hero-para'>Enjoy a healthy Life by eating healthy foods that have extraordinary flavours which make your life healthier day by day, prepared by our top chefs with extra care and LOVE especially for you!!</p>
                    <NavLink to="/"><Button>Order Now</Button></NavLink>
                    </div>
                </div>

                <div>
                    <figure>
                        <img className="hero-img" src={props.img} alt="" />
                    </figure>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    .flex{
        display:flex;
    }
    
    .hero-data{
        padding-left: 100px;
        width: 800px;
        align-items: center;
        display: grid;
        justify-content: center;
    }

    .hero-heading{
        font-size: 40px;
    }

    .hero-para{
        font-size: 18px;
        margin-top: 30px;
        margin-bottom: 19px;
    }

    .hero-img{
        width: 38vw;
        height: 60vh;
    }

    @media only screen and (max-width:600px){
        {
            .flex{
                display:grid;
            }

            .hero-data{
                padding-left:20px;
                width:400px;
                padding-top:50px;
                margin-left: 80px;
            }

            .hero-img{
                width: auto;
                height: auto;
            }
        }
    `

export default HeroSection