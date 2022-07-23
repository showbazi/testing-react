import React from 'react'

const CatsCard = ({image, name, description}) => {
  return (
    <div className='cats-card-container'>
        <img src={image?.url} alt="cats-image" />
        <h3>{name}</h3>
        <p>{description}</p>
    </div>
  )
}

export default CatsCard;