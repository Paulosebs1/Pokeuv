import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Filtro = () => {
  const [pokemon, setPokemon] = useState('');
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (pokemon.trim() === '') {
      setError("Ingrese un nombre o ID del Pokémon");
      setResultado(null);
      return;
    }
    setError('');
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
      setResultado(response.data);
    } catch (err) {
      setError("ERROR: Escriba el numero o su nombre sin faltas");
      setResultado(null);
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
          <img className="my-3" src="https://i.pinimg.com/564x/f4/3a/29/f43a290acbf20483e955e21ca48fce16.jpg" alt="" width={"300px"}/>
        </Col>
        {resultado && (
          <Col md="auto"> 
            <Card style={{ width: "auto"}}>
              <Card.Img variant="top" src={resultado.sprites.front_default} />
              <Card.Body>
                <Card.Title>Nombre: {resultado.name}</Card.Title>
                <Card.Text>
                  <strong>Altura:</strong> {resultado.height} m
                  <br />
                  <strong>Peso:</strong> {resultado.weight} kg
                  <br />
                  <strong>Habilidades:</strong> {resultado.abilities[0].ability.name}, {resultado.abilities[1].ability.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Filtro;