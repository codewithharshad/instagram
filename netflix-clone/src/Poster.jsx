import React, { useState, useEffect, useCallback } from 'react';
import axios from './utils/axios';
import {requests} from './utils/requests';
import './Poster.css';

const truncate = (str, n) => (str?.length > n ? `${str.substr(0, n - 1)}...` : str);

const Poster = () => {
  const [movie, setMovie] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const randomIndex = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[randomIndex]);
      return request;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">More info</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Poster;
