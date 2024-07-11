import { Container, Row, Col} from "react-bootstrap"

function Anex() {
    return (
        <Container>
            <Row >
                <Col className="my-2 d-flex justify-content-center" sm={6} lg={3}>
                    <img src="https://i.pinimg.com/564x/f9/fe/07/f9fe0795a5314a2097fd1cab420ac5a5.jpg" alt="" width={"230px"}/>
                </Col>
                <Col className="text-center" sm={12} lg={6}>
                <h1 className="text-center my-3">Recursos utilizados</h1>
                    <Row className="my-4 justify-content-center vertical-content-center" sm={6} lg={4}>
                        <Col>
                            <a href="https://getbootstrap.com/"><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" width={"80px"}/></a>
                            <h6>Bootstrap</h6>
                        </Col>
                        <Col className="my-3">
                            <a href=""><img src="./public/react-router.png" alt="" width={"70px"}/></a>
                            <h6>React-Router</h6>
                        </Col>
                        <Col className="my-4">
                            <a href="https://nodejs.org/en"><img src="https://nodejs.org/static/logos/nodejsDark.svg" alt="" width={"100px"}/></a>
                            <h6>Nodejs</h6>
                        </Col>
                        <Col>
                            <a href="https://github.com/Paulosebs1/Pokeuv"><img src="./public/github-mark.png" alt="" width={"60px"}/></a>
                            <h6>GitHub</h6>
                        </Col>
                        <Col className="my-4">
                            <a href="https://pokeapi.co/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="" width={"100px"}/></a>
                            <h6>PokeApi</h6>
                        </Col>
                        <Col className="my-4">
                            <a href="https://git-scm.com/"><img src="https://git-scm.com/images/logo@2x.png" alt="" width={"100px"}/></a>
                            <h6>git</h6>
                        </Col>
                        <Col>
                            <a href="https://react.dev/"><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="" width={"70px"}/></a>
                            <h6>React</h6>
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