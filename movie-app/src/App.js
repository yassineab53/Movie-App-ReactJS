import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './components/Movie';
import SearchBar from './components/SearchBar';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  const fetchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <>
      <header>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      </header>
      <main>
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </main>
    </>
  );
}

export default App;
