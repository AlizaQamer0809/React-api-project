import React from 'react';

export default function Recipe({recipe}) {
  return (
  <div className='recipes'>
        <img className='recipe__image' src={recipe["recipe"]["image"]}/>
      <p className='recipe__name'>{recipe["recipe"]["label"]}</p>

  </div>
  )
}
