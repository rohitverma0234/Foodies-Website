import React from 'react'
import styled from 'styled-components'

const Banner2 = () => {
  return (
    <Wrapper>

        <div className='banner-img'>
        <h3 className='banner-head'>Find Our Store</h3>
        </div>

        <div className='flex'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592033.427397582!2d-78.35812649291475!3d38.79946376952038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64debe9f190df%3A0xf2af37657655f6b1!2sMaryland%2C%20USA!5e0!3m2!1sen!2sin!4v1666332632145!5m2!1sen!2sin" 
            width="1400" 
            height="600" 
            style={{border:0}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`

    padding-top:100px;
    
    .banner-img{
        width: 100vw;
        height: 50vh;
        background-image:url("./banner2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .banner-head{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 44px;
    }

    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -70px;
    }`
export default Banner2