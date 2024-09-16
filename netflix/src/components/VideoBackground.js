import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

export default function VideoBackground({movieId,bool}) {
const trailer =useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);
  return (
    <div className='w-screen'>
        <iframe
           className={`${bool ?"w-[100]":'w-screen aspect-video'}`}
          src={`https://www.youtube.com/embed/${trailer?.key}?si=iVrrf-lyIp9qbTMS&autoplay=1&mute=1`} 
          title="YouTube video player" 
          frameborder="0" 
        allowfullscreen>

        </iframe>
    </div>
  )
}
