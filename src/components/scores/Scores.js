import React from 'react'
import ScoreItem from './ScoreItem'
import data from '../scores/ScoreData'
import styled from 'styled-components'

const Scores = () => {
  return (
    <Wrapper className='scores=section'>
        {data.map((val,index,key)=>{
            return <ScoreItem title={val.title} para={val.para}/>
        })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 100px;
    `

export default Scores