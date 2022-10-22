import React from 'react'
import styled from"styled-components"
import ChooseItem from './ChooseItem'
import data2 from './ChooseData'


const Choose = (props) => {
  return (
    <Wrapper>
        <div className='choose-heading'>
        <h2>Why Choose US?</h2>
        <p>Organic Food is grown without the usage of preservatives and is free of Toxic Chemicals</p>
        </div>
        
        <div className='cards'>
            {data2.map((val,index,key)=>{
                return <ChooseItem img2={val.img2} head={val.head} para={val.para}/>
            })} 
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    .choose-heading{
        text-align: center;
        padding-top: 100px;
    }

    .choose-img{
        width: 150px;
    }

    .choose-point{
        width: 300px;
        text-align: center;
        margin: 20px;
    }

    .cards{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    @media only screen and (max-width:600px){
        {
            .cards{
                display:grid;
            }
        }
    `

export default Choose 