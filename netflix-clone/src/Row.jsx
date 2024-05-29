import React, { useState, useEffect, useCallback } from 'react';
import axios from './utils/axios';
import YouTube from 'react-youtube';
import './Row.css';
import {YT_API_KEY} from './utils/requests';

const base_url = 'https://image.tmdb.org/t/p/original';
const YOUTUBE_API_KEY = YT_API_KEY; 

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchTrailerUrl = async (movieTitle) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 1,
          q: `${movieTitle} trailer`,
          key: YOUTUBE_API_KEY,
        },
      });

      const { items } = response.data;
      if (items && items.length > 0) {
        return items[0].id.videoId;
      } else {
        console.error('No trailer found for the movie:', movieTitle);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch trailer URL:', error);
      return null;
    }
  };

  const handleClick = async (movie) => {
    const videoId = await fetchTrailerUrl(movie?.title || movie?.name || '');
    if (videoId) {
      setSelectedMovie({ ...movie, videoId });
    } else {
      alert(`No trailer found for "${movie.title || movie.name}".`);
    }
  };

  const closePopup = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {selectedMovie && (
        <>
          <div className="overlay" />
          <div className="popup">
            <div className="popup_inner">
              <YouTube videoId={selectedMovie.videoId} />
              <button onClick={closePopup} className="close_button">
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Row;
