import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-div'>
        <img src="./tasty.png" alt="" width={200}/>
        <p>Disclaimer-@2022-Foodies. All Rights Reserved.<br></br>
We do not claim the ownership of the logos used above. They only belong to their respective organizations.</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1818;
  color: white;
  padding-bottom:20px;
  padding-top:20px;
  margin-top:100px;
  
  .footer-div{
    text-align:center;
  }`

export default Footer