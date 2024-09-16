import React,{useState} from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../utils/constant.js';
import toast from "react-hot-toast";
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice.js';
export default function Login() {

     const [isLogin,setIsLogin]=useState(false);
     const [fullName,setFullName]=useState("");
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");
     const navigate=useNavigate();
       const dispatch=useDispatch();
  const isLoading=useSelector(store=>store.app.isLoading);

  const loginHandler=()=>{
    setIsLogin(!isLogin);
  }
  const getInputData = async(e)=>{
    e.preventDefault();
  dispatch(setLoading(true));
       
  if(!isLogin){
    
    const user={email,password};

    try{
      const res =await axios.post(`${API_END_POINT}/login`,user,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      console.log(res.data.user);
      if(res.data.success){
        toast.success(res.data.message);
      }
 dispatch(setUser(res.data.user));

    navigate("/browse");
   }catch(err){
     console.log(err);
     toast.error(err.response.data.message);
   
   } finally{
      dispatch(setLoading(false));  
   }
  }else{
    const user={fullName,email,password};
    try{
      const res =await axios.post(`${API_END_POINT}/register`,user,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      console.log(res);
      if(res.data.success){
        toast.success(res.data.message);
      }
      setIsLogin(!isLogin);
   }catch(err){
    toast.error(err.response.data.message);
     console.log(err);
   }finally{
    dispatch(setLoading(false));  
 }
  }


    setFullName("");
    setEmail("");
    setPassword("");
  }
  return (
    <div className='w-full'>
      <Header/>
        <div className='absolute'>
          <img className='w-[100vw] h-[100vh]' src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg" alt="netflix-cover-img" />
        </div>
        <form onSubmit={getInputData} className='absolute bg-black flex flex-col p-12 w-3/12 my-36 left-0 right-0 items-center justify-center mx-auto opacity-90 rounded-md'>
          <div className='flex flex-col'>
               <h1 className='text-white text-3xl mb-5 font-bold'>{!isLogin ? "Login" : "SignUp"}</h1>
            
            {
              isLogin && <input type='text' value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder='enter your name' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white'></input>
            }
           
            <label htmlFor="">Email</label>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter your email' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white'></input>
            <label htmlFor="">Password</label>
            <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password' className='outline-none p-3 my-2 rounded-md bg-gray-800 text-white'></input>
              <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-bold'>{`${isLoading ? "loading..." :(!isLogin ?"Login":"Signup")}`}</button>
            <p className='text-white mt-2'>{isLogin ? "Already have an account?" : "New to Netflix?"} <span onClick={loginHandler} className='ml-1 text-blue-800 font-medium cursor-pointer'>{isLogin?"Login":"Signup"}</span></p>
          </div>
        </form>
    </div>
  )
}
