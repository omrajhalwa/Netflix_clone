import React from 'react'
import { Banner_Url } from '../utils/constant'
import { useDispatch } from 'react-redux';
import {setOpen,getId} from '../redux/movieSlice'
export default function MovieCard({posterPath,movieId}) {

const dispatch=useDispatch();

const handleOpen=()=>{
  dispatch(getId(movieId));
dispatch(setOpen(true));
}

  if(posterPath==null) return null;
  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
        <img  alt="img" src={`${Banner_Url}/${posterPath}`}/>
    </div>
  )
}
