import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <Row>
                <Col className="my-4">
                    <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" />
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="" width={"200px"}/>
                </Col>
                <Col className="my-3">
                    <h3 class="text-center">¿Que es Pokeapi?</h3>
                    <p class="text-center" >
                        Este sitio web ofrece una interfaz API RESTful para objetos muy detallados creados a partir de miles de
                        líneas de datos relacionados con Pokémon. Cubrimos específicamente la franquicia de videojuegos.
                        Al utilizar este sitio web, puedes consumir información sobre Pokémon,
                        sus movimientos, habilidades, tipos, grupos de huevos y mucho, mucho más.
                    </p>
                </Col>
                <Col className="my-3">
                    <h3 class="text-center">¿Que información almacena?</h3>
                    <ul>
                        <li>Movimientos</li>
                        <li>Abilidades</li>
                        <li>Pokémones</li>
                        <li>Tipos</li>
                        <li>Versiones del juego</li>
                        <li>Elementos</li>
                        <li>Pokedex</li>
                        <li>Cadena de evolución de Pokémon</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About