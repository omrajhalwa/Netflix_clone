import {createSlice} from '@reduxjs/toolkit'


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:"",
    },
    reducers:{
        
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload;
        },
        setToggle:(state,action)=>{
            state.toggle=!state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie=action.payload;
        },
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        getId:(state,action)=>{
            state.id=action.payload;
        }
        

    }
});

export const {getNowPlayingMovies,getPopularMovie,getTopRatedMovie,getUpcomingMovie,setToggle,getTrailerMovie,setOpen,getId}=movieSlice.actions;
export default movieSlice.reducer;