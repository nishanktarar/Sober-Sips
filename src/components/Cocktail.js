import React from 'react'
import { Link } from 'react-router-dom'
function Cocktail({ id,name,image}) {
  return (
    <section key={id} className='cocktail'>
    <div className='img-container'>
        <img src={image} alt={name} />
    </div>
    <div className='cocktail-footer'>
        <h3>{name}</h3>
          <Link to={`/cocktails/${id}`} className='btn'>Details</Link>
    </div>
    </section>
  )
}

export default Cocktail