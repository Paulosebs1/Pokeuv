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
                                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            </Col>   
                            <Col>
                                <Nav.Link as={Link} to="/elementos">Elementos</Nav.Link>
                            </Col>   
                            <Col>    
                                <Nav.Link as={Link} to="/filtrado_de_datos">Filtro</Nav.Link>
                            </Col>   
                            <Col>
                                <Nav.Link as={Link} to="/about">Informacion</Nav.Link>
                            </Col>   
                            <Col>
                                <Nav.Link as={Link} to="/pag_anexas">Anexos</Nav.Link>
                            </Col>   
                            <Col>    
                                <Nav.Link as={Link} to="/dev_team">Desarrolladores</Nav.Link>
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