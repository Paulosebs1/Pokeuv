import { Navbar, Container, Nav } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

function navbarpag() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand as={Link} to="/">PokeUv</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/elementos">Elementos</Nav.Link>
                        <Nav.Link as={Link} to="/filtrado_de_datos">Filtrar</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/pag_anexas">Anexos</Nav.Link>
                        <Nav.Link as={Link} to="/dev_team">Dev team</Nav.Link>
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