import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer.js';
import MovieContainer from './MovieContainer.js';
import axios from 'axios';
import { Now_Playing_Movie, options } from '../utils/constant.js';
import { setNowPlayingMovies } from "../redux/movieSlice.js";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import usePopularMovies from '../hooks/usePopularMovies.js';
import useTopRatedMovies from '../hooks/useTopRatedMovies.js';
import useUpcomingMovies from '../hooks/useUpcomingMovies.js';
import SearchMovie from './SearchMovie.js';
export default function Browse() {

  const user = useSelector(store=>store.app.user);
  const navigate=useNavigate();
  const dispatch =useDispatch();

  const toggle=useSelector(store=>store.movie.toggle);
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

  useEffect(()=>{
    if(!user){
      navigate("/");
    }
    
  },[dispatch]);
 
  return (
    <div>
          <Header/>
          <div>
            {
              toggle ? <SearchMovie/>:(
                <>
                      <MainContainer/>
                      <MovieContainer/>
                </>
              )
            }
           
          </div>
    </div>
  )
}
