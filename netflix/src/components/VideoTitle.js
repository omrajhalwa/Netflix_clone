import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
export default function VideoTitle({title,overview}) {
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='w-1/3 mt-4'>{overview}</p>
        <div className='flex mt-8'>
            <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'><CiPlay1 /> Play</button>
            <button className='flex items-center ml-1 px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'><CiCircleInfo /> Watch more</button>
        </div>
    </div>
  )
}
