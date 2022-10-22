import React from 'react'
import styled from 'styled-components'

const ScoreItem = (props) => {
    return (
        <Wrapper>
            <div className='scores'>
                <p className='score-title'>{props.title}</p>
                <p className='score-para'>{props.para}</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`

    .scores{
        text-align: center;
    }

    .score-para{
        color: #E8BD0D;
        font-weight: 600;
        padding-top: 5px;
    }
    
    .score-title{
        font-weight:700;
        font-size: 30px;
    }`

export default ScoreItem