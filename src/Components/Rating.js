import React from 'react'

function Rating(props) {
  const rating = Math.round(props.children);
  return (
    <div>
      <img src={rating >= 1 ? 'https://abeon-hosting.com/images/black-star-clipart-png-8.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png' } width="50px" alt='star'/>
      <img src={rating >= 2 ? 'https://abeon-hosting.com/images/black-star-clipart-png-8.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png' } width="50px" alt='star'/>
      <img src={rating >= 3 ? 'https://abeon-hosting.com/images/black-star-clipart-png-8.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png' } width="50px" alt='star'/>
      <img src={rating >= 4 ? 'https://abeon-hosting.com/images/black-star-clipart-png-8.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png' } width="50px" alt='star'/>
      <img src={rating === 5 ? 'https://abeon-hosting.com/images/black-star-clipart-png-8.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/2000px-Five-pointed_star.svg.png' } width="50px" alt='star'/>
    </div>
  )
}

export default Rating;