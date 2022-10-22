import React from 'react'
import styled from 'styled-components'

const ProductItems = (props) => {
  return (
    <Wrapper>
    <div className='choose-point'>
        <div>
        <img className="choose-img" src={props.img} alt="" />
        <h3 className='product-head'>{props.head}</h3>
        <p>{props.para}</p>
        <p className='price'>{props.price}</p>
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    padding-top: 50px;

    .choose-img{
        width:240px;
    }
    
    .choose-point{
        border: 2px solid #ffe5e5; 
    }
    
    .product-head{
        margin-bottom: 10px;
        margin-top: 10px;
    }
    
    .price{
        margin-top: 20px;
        font-weight: 600;
    }
    
    @media only screen and (max-width:700px){
        .
    }`

export default ProductItems