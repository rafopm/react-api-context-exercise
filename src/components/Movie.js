import React from 'react'

const Movie = ({ movie }) => {
  return (
    <div className='card'>
        <img
        src={movie.imageUrl}
        alt={movie.title}
        />
        <div className=''>

        </div>
        
    </div>
  )
}

export default Movie