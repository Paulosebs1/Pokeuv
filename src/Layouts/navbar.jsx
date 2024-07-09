import { Navbar, Container, Nav } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

function navbarpag() {
    return (
        <>
            <Navbar bg="danger" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src="public\image.png" alt="Logo" width="100px" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/elementos">Elementos</Nav.Link>
                        <Nav.Link as={Link} to="/filtrado_de_datos">Filtro</Nav.Link>
                        <Nav.Link as={Link} to="/about">Informacion</Nav.Link>
                        <Nav.Link as={Link} to="/pag_anexas">Anexos</Nav.Link>
                        <Nav.Link as={Link} to="/dev_team">Desarrolladores</Nav.Link>
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