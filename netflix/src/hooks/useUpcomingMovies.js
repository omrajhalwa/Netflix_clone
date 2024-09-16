import axios from 'axios';

import {   Upcoming_Movie, options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getUpcomingMovie } from '../redux/movieSlice';

const useUpcomingMovies =async()=> {
    const dispatch=useDispatch();
   try {
    const res=await axios.get(Upcoming_Movie,options);
    dispatch(getUpcomingMovie(res.data.results));
   } catch (error) {
    console.log(error);
   }
}
export default useUpcomingMovies;