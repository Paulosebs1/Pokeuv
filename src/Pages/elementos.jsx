import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import PokemonCard from './pokemoncard';

const elementos = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
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
    return <div className='text-center'>
      <h1>Cargando...</h1>
      <Spinner className='my-5' animation="border" variant="black" />
    </div>;
  }

  return (<div class="element">
        <h1 className="text-center">Lista de pokemons</h1>
        <Container>
        <Row>
            {pokemonList.map(pokemon => (
            <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                <PokemonCard pokemon={pokemon} />
            </Col>
            ))}
        </Row>
        </Container>
    </div>
  );
};

export default elementos;
