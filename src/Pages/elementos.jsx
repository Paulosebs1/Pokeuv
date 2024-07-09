import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import PokemonCard from './pokemoncard';

const elementos = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=120');
      const promises = response.data.results.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        return result.data;
      });
      const results = await Promise.all(promises);
      setPokemonList(results);
      setLoading(false);
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <div><h1 class="text-center">Cargando...</h1>
    <Spinner animation="border" variant="black"/>
    </div>;
  }

  return (<div>
        <h1 class="text-center">Lista de pokemons</h1>
        <Container>
        <Row>
            {pokemonList.map(pokemon => (
            <Col key={pokemon.id} sm={12} md={6} lg={3}>
                <PokemonCard pokemon={pokemon} />
            </Col>
            ))}
        </Row>
        </Container>
    </div>
  );
};

export default elementos;
