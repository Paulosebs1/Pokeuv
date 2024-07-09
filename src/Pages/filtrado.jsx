import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Filtro = () => {
  const [pokemon, setPokemon] = useState('');
  const [resultado, setSearchResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
      setSearchResult(response.data);
    } catch (err) {
      setError('Pokemon no encontrado');
      setSearchResult(null);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto">
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label><h1>Buscar Pokémon</h1></Form.Label>
              <Form.Control
                type="text"
                placeholder="nombre / ID del Pokémon"
                value={pokemon}
                onChange={(e) => setPokemon(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Buscar
            </Button>
          </Form>
          {error && <p className="text-danger mt-3">{error}</p>}
        </Col>
      </Row>
      {resultado && (
        <Row className="justify-content-md-center mt-2">
          <Col md="auto">
            <Card style={{ width: "auto" }}>
              <Card.Img variant="top" src={resultado.sprites.front_default} />
              <Card.Body>
                <Card.Title>Nombre: {resultado.name}</Card.Title>
                <Card.Text>
                  <strong>Altura:</strong> {resultado.height} m
                  <br />
                  <strong>Peso:</strong> {resultado.weight} kg
                  <br />
                  <strong>Habilidades</strong> {resultado.abilities[0].ability.name}, {resultado.abilities[1].ability.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Filtro;
