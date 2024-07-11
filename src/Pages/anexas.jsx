import { Container, Row, Col} from "react-bootstrap"

function Anex() {
    return (
        <Container>
            <Row >
                <Col className="my-2 d-flex justify-content-center" sm={6} lg={3}>
                    <img src="https://i.pinimg.com/564x/f9/fe/07/f9fe0795a5314a2097fd1cab420ac5a5.jpg" alt="" width={"230px"}/>
                </Col>
                <Col className="text-center" sm={12} lg={6}>
                <h1 className="text-center">Recursos utilizados</h1>
                    <Row className="my-4 justify-content-center vertical-content-center" sm={6} lg={4}>
                        <Col>
                            <a href="https://getbootstrap.com/"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" width={"80px"}/></a>
                            <h6>Bootstrap</h6>
                        </Col>
                        <Col>
                            <a href="https://react.dev/"><svg width="60px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg></a>
                            <h6>React</h6>
                        </Col>
                        <Col>
                            <a href="https://pokeapi.co/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" width={"100px"}/></a>
                            <h6>PokeApi</h6>
                        </Col>
                        <Col>
                            <a href=""><img src="./public/react-router.png" alt="" width={"70px"}/></a>
                            <h6>React-Router</h6>
                        </Col>
                        <Col>
                            <a href=""><img src="" alt="" width={"100px"}/></a>
                            <h6></h6>
                        </Col>
                    </Row>
                </Col>
                <Col className="my-4 d-flex justify-content-center" sm={6} lg={3}>
                    <img src="https://i.pinimg.com/564x/2c/fe/b5/2cfeb51974fdc8522e44c3227d68f515.jpg" alt="" width={"230px"}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Anex