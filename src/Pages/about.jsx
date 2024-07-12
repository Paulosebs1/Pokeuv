import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container>
            <Row>
                <Col className="my-4">
                    <a href="https://pokeapi.co/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="Logo pokeapi"/></a>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" width={"200px"}/>
                </Col>
                <Col className="my-3">
                    <div >
                        <h3 class="text-center ABOUT1">¿Que es Pokeapi?</h3>
                        <p class="text-center ABOUT1" >
                            Este sitio web ofrece una interfaz API RESTful para objetos muy detallados creados a partir de miles de
                            líneas de datos relacionados con Pokémon. Cubrimos específicamente la franquicia de videojuegos.
                            Al utilizar este sitio web, puedes consumir información sobre Pokémon,
                            sus movimientos, habilidades, tipos, grupos de huevos y mucho, mucho más.
                        </p>
                    </div>
                </Col>
                <Col className="my-3">
                    <h4 class="text-center ABOUT1">¿Que información almacena?</h4>
                    <ul clasS="ABOUT1">
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