import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
  return (
    <Card className="pokemon-card">
      <CardMedia
        component="img"
        image={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="pokemon-img"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokemonCard;
