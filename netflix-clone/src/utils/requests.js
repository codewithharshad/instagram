const API_KEY = 'YOUR_TMDB_API_KEY_HERE'; // Replace 'YOUR_TMDB_API_KEY_HERE' with your TMDB API key
const YT_API_KEY = 'YOUR_YOUTUBE_API_KEY_HERE'; // Replace 'YOUR_YOUTUBE_API_KEY_HERE' with your YouTube Data API key

const requests = {
  fetchTrending:  `/trending/all/week?api_key=${API_KEY}&region=IN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=53`, 
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
  // refer this docs for genre -  https://www.themoviedb.org/talk/5daf6eb0ae36680011d7e6ee 
};

export { YT_API_KEY, requests };
