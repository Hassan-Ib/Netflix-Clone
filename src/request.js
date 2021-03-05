// d5a39ac7cd4e8975801cac639fe52e5e
const API_KEY = "d5a39ac7cd4e8975801cac639fe52e5e";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginal: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export default request;
