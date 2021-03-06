import React, { useState, useEffect } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const { results } = request.data;
      setMovies([...results]);
      //   return results
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handlePosterClick = (movie) => {
    if (trailerUrl) {
      if (trailerUrl?.title === movie.title) {
        setTrailerUrl(null);
        return;
      }
    }

    movieTrailer(movie?.title || "")
      .then((url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl({
          ...trailerUrl,
          url: urlParams.get("v"),
          title: movie.title,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                handlePosterClick(movie);
              }}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl.url} opts={opts} />}
    </section>
  );
}

export default Row;
