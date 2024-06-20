import React from 'react';
import TextField from '@mui/material/TextField';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      label="Search Pokémon"
      variant="outlined"
      fullWidth
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
