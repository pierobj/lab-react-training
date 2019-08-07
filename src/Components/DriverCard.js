import React from 'react'
import Rating from './Rating';

function DriverCard(props) {
  const {name, rating, img, car} = props;
  console.log(img)
  return (
    <div>
      <img src={img} alt='face' width='150px'/>
      <p>{name}</p>
      <Rating>{rating}</Rating>
      <p>{car.model} - {car.licensePlate}</p>
    </div>
  )
}

export default DriverCard;
