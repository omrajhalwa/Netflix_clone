export const API_END_POINT ="http://localhost:8080/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjlmNjg4ZGFlMzAxZTQ1OTViN2E4NDQ2NDVhNmE5ZiIsInN1YiI6IjY1ZmM1ZjNhN2Y2YzhkMDE2MzZjNWU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7R2L9TnJ4y0J_SUj-zG-dvjcvwIt_u7QsqF8goKdpY'
    }
  };

  export const Now_Playing_Movie="https://api.themoviedb.org/3/movie/now_playing";
  export const Popular_Movie="https://api.themoviedb.org/3/movie/popular";
  export const Top_Rated_Movie="https://api.themoviedb.org/3/movie/top_rated";
  export const Upcoming_Movie="https://api.themoviedb.org/3/movie/upcoming";

  export const Banner_Url="https://image.tmdb.org/t/p/w500";
  export const SEARCH_MOVIE_URL = 'https://api.themoviedb.org/3/search/movie?query=';