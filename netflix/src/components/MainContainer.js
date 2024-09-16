import React from 'react'
import VideoTitle from './VideoTitle.js'
import VideoBackground from './VideoBackground.js'
import { useSelector } from 'react-redux'

export default function MainContainer() {
  const movie=useSelector(store=>store.movie?.nowPlayingMovies);
    if(!movie) return; //early return in react

    console.log(movie);
    const {overview,id,title} =movie[0];
  return (
    <div>
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}/>
    </div>
  )
}
