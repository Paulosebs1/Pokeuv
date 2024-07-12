import { Navbar, Container, Nav, Row, Col} from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

function navbarpag() {
    return (
        <>
            <Navbar bg="danger" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src="public\image.png" alt="Logo" width="100px" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Row>
                            <Col>
                                <Nav.Link as={Link} to="/"><button type="button" class="button">Inicio</button></Nav.Link>
                            </Col>   
                            <Col>
                                <Nav.Link as={Link} to="/elementos"><button type="button" class="button">Lista</button></Nav.Link>
                            </Col>   
                            <Col>    
                                <Nav.Link as={Link} to="/filtrado_de_datos"><button type="button" class="button">Filtro</button></Nav.Link>
                            </Col>   
                            <Col>
                                <Nav.Link as={Link} to="/about"><button type="button" class="button">About</button></Nav.Link>
                            </Col>   
                            <Col>
                                <Nav.Link as={Link} to="/pag_anexas"><button type="button" class="button">Anexos</button></Nav.Link>
                            </Col>   
                            <Col>    
                                <Nav.Link as={Link} to="/dev_team"><button type="button" class="button">Desarrolladores</button></Nav.Link>
                            </Col>
                        </Row>
                    </Nav>
                </Container>
            </Navbar>
            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

export default navbarpag