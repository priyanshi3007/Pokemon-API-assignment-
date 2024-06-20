import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import SearchBar from './components/SearchBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      const fetches = response.data.results.map(p => axios.get(p.url));
      const results = await Promise.all(fetches);
      const data = results.map(r => r.data);
      setPokemon(data);
      setFilteredPokemon(data);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemon.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pokemon]);

  return (
    <Container className="App">
      <Typography variant="h2" gutterBottom>
        Pokémon Search
      </Typography>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid container spacing={3} className="pokemon-grid">
        {filteredPokemon.map(p => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
            <PokemonCard pokemon={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
