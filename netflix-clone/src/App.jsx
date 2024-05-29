import React from 'react';
import './App.css';
import Row from './Row';
import { requests } from './utils/requests';
import Poster from './Poster';
import Navbar from './Navbar.jsx';

function App() {
  const rowConfigurations = [
    { title: "Top 10 Movies in India Today", isLargeRow: true, fetchUrl: requests.fetchNetflixOriginals },
    { title: "New on Netflix", fetchUrl: requests.fetchTrending },
    { title: "Top Rated", fetchUrl: requests.fetchTopRated },
    { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
    { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
    { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
    { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
    { title: "Documentaries", fetchUrl: requests.fetchDocumentaries }
  ];

  return (
    <div className="app">
      <Navbar />
      <Poster />
      {rowConfigurations.map((config, index) => (
        <Row key={index} {...config} />
      ))}
    </div>
  );
}

export default App;
