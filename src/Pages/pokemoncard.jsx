import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card style={{ width: "auto" }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default}/>
      <Card.Body>
        <Card.Title class='fs-6'>{pokemon.name}</Card.Title>
        <Card.Text>
          <Badge bg="primary">{pokemon.types[0].type.name}</Badge>
          {pokemon.types[1] && <Badge bg="secondary" className="ml-2">{pokemon.types[1].type.name}</Badge>}
          <div>
            <strong>Altura:</strong> {pokemon.height} m
          </div>
          <div>
            <strong>Peso:</strong> {pokemon.weight} kg
          </div>
          <div>
            <strong>ID:</strong> {pokemon.id}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
