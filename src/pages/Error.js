import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <section className='section error-page'>
    <div className='error-container'>
    <h1 className='section-title'>Opps! It's A Dead End</h1>
    <Link to="/" className="btn">Back Home</Link>
    </div>
    </section>
  )
}

export default Error