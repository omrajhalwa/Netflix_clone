import React,{useState} from 'react'
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

export default function SearchMovie() {
  const dispatch=useDispatch();
  const isLoading =useSelector(store=>store.app.isLoading);
  const [searchMovie,setSearchMovie]=useState("");
  console.log(searchMovie);
  const {searchedMovie,movieName} =useSelector(store=>store.searchMovie);
  const submitHandler =async(e)=>{
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res =await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}%20movie&include_adult=false&language=en-US&page=1`,options);
      console.log(res.data);
      const movies=res?.data?.results;
      dispatch(setSearchMovieDetails({searchMovie,movies}))
    } catch (error) {
      
    }finally{
      dispatch(setLoading(false));
    }
    setSearchMovie("");
    
  }
  return (
    <>
    
    <div className='flex  justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
            <div className='flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]'>
            <input value={searchMovie} onChange={(e)=>{setSearchMovie(e.target.value)}}  className='w-full outline-none rounded-md text-lg pd-2' type="text" placeholder='  Search Movies.....' />
            <button className='bg-red-800 text-white rounded-md px-4 py-2' type='submit'>{isLoading ? "loading....." :"Search"}</button>
            </div>
        </form>

       
    </div>
  
    
    <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/> 

    

    </>
  )
}
