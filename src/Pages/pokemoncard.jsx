import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const PokemonCard = ({ pokemon }) => {
  return (
    <Card style={{ width: '200px' }}>
      <Card.Img variant="top" src={pokemon.sprites.front_default} />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
          <Badge bg="success">{pokemon.types[0].type.name}</Badge>
          {pokemon.types[1] && <Badge bg="info" className="ml-2">{pokemon.types[1].type.name}</Badge>}
          <div>
            <strong>Altura:</strong> {pokemon.height}m
          </div>
          <div>
            <strong>Peso:</strong> {pokemon.weight}kg
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
