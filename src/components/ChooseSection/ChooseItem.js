import React from 'react'

const ChooseItem = (props) => {
  return (
    <div className='choose-point'>
        <img className="choose-img" src={props.img2} alt="" />
        <h3>{props.head}</h3>
        <p>{props.para}</p>
        </div>
  )
}

export default ChooseItem