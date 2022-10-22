import React from 'react'
import styled from "styled-components"

const Learn2 = () => {
    
  return (
    <Wrapper>
    <div className='flex'>

        <div className='flex'>
            <div>
                <img src="./learn.jpg" alt='' width={500} style={{borderRadius:"40px"}}/>
            </div>

        </div>


        <div className='hero-data'>
            <div><h1 className='hero-heading'>Fresh Vegetables for You</h1>
            <p className='hero-para'>Organic Food is grown without the usage of synthetic chemicals and preservatives such as human made pesticides and fertilizers and do not contain genetically modified preservatives (GMO's)</p>
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

        .hero-heading{
            font-size:30px;
            padding-top:20px;
            text-align:center;
        }

        .hero-data{
            padding-left:0px;
            padding-right:0px;
        }

        .hero-para{
            width: 82vw;
        }
    }
    `

export default Learn2