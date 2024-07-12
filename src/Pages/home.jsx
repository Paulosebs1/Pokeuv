import { Col, Container,Row } from "react-bootstrap"

function Home() {
    return(
    <Container>
        <Row className="justify-content-center">
            <Col className="my-4 d-flex justify-content-center" sm={6} lg={3}>
                <img src="https://m.media-amazon.com/images/I/71o9UvcQFcL._AC_SL1500_.jpg" alt="" width={"200px"}/>
            </Col>
            <Col className="my-5 text-center" sm={12} lg={6}>
                <div class="prueba">
                    <h3>Bienvenidos a Pokeuv <br/></h3>
                    <h6>Una pokedex creada por estudiantes de Ing. Civil Informatica</h6>
                </div>
            </Col>
            <Col className="my-4 d-flex justify-content-center" sm={6} lg={3}>
                <img src="https://m.media-amazon.com/images/I/71mZWPoWosL._AC_SL1500_.jpg" alt="" width={"200px"}/>
            </Col>
        </Row>
    </Container>
    )
}

export default Home