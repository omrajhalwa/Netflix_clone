import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({title,movies,searchMovie=false}) {
   
    console.log(movies);
  return (
    <div className='px-8 mb-10'>
        <h1 className='text-3xl text-white mb-2'>
            {title}
        </h1>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer '>
            <div className='flex items-center'>
                { 
                    movies?.map((movie)=>{
                     return(
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                     )
                        
               })
                    
                }
               
                
            </div>
        </div>
    </div>
  )
}
