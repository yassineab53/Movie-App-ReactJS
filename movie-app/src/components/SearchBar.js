import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => (
  <form onSubmit={handleSearch}>
    <input
      type="text"
      className="search"
      placeholder="Search"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </form>
);

export default SearchBar;
