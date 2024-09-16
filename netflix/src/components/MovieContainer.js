import React from 'react'
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';
export default function MovieContainer() {
  const data=useSelector(store=>store.movie);
  console.log(data.popularMovie);
  console.log(data);

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <MovieList title={"Popular Movie"} movies={data.popularMovie}/> 
      <MovieList title={"Top Rated Movie"} movies={data.topRatedMovie}/> 
      <MovieList title={"Now Playing Movie"} movies={data.nowPlayingMovie}/>
      <MovieList title={"Upcoming Movie"} movies={data.upcomingMovie}/> 
      </div>
           
    </div>
  )
}
