import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { SOCIAL_LINKS } from '../data/constants';

const NavBar = () => {
    return (
        <Navbar expand="lg" variant="dark" fixed="top" className="navbar-custom">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4">
                    MD<span style={{ color: 'var(--accent-blue)' }}>.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-uppercase small fw-bold">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Coding Projects</Nav.Link>
                        <Nav.Link href="#design">UI/UX</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Button
                        variant="outline-primary"
                        className="btn-outline-custom text-uppercase small"
                        href={SOCIAL_LINKS.cv}
                        target="_blank"
                    >
                        Download CV
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
