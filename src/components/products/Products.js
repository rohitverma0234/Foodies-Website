import React from 'react'
import styled from 'styled-components'
import data from './ProductsData'
import ProductItems from './ProductItems'

const Products = () => {
  return (
    <Wrapper>
        <div>
            <h2 className='prod-head'>Our Most Selling Hot Products</h2>
            <p>Get Your Hands on our Most Loved Items</p>

            <div className='prod-div'>
            {data.map((val,index,key)=>{
                return <ProductItems img={val.img} head={val.head} para={val.para} price={val.price} />
            })}
        </div>
        </div>

        
    </Wrapper>
  )
}


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    text-align: center;
    
    
    .prod-head{
        font-size: 35px;
        line-height: 74px;
    }
    
    .prod-div{
        text-align: left;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    @media only screen and (max-width:600px){
        .prod-div{
            display:inline-block;
        }
    }`

export default Products