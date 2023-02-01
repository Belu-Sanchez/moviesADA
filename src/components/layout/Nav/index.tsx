import { Container, Nav, Navbar } from 'react-bootstrap';
import './styles.scss'

const NavBar = () => {
  return (

    <Navbar collapseOnSelect expand="lg" className="nav-styles">
      <Container>
        <Navbar.Brand href="/">Movies <span className="ada">ADA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify-content-end">
          <Nav.Link href="/recently">Recently Movies</Nav.Link>
          <Nav.Link href="/popular">Popular Movies</Nav.Link>
          <Nav.Link href="/search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export { NavBar };