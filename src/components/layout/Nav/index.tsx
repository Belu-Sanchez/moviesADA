import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './styles.scss';
import { useMe } from "../../../hooks";


const NavBar = () => {
  
  const { logout } = useMe();

  return (
    <Navbar collapseOnSelect expand="lg" className="nav-styles">
      <Container>
        <Navbar.Brand href="/">Movies <span className="ada">ADA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto justify-content-end">
            <NavLink className="nav-link" to="/recently">Recently Movie</NavLink>
            <NavLink className="nav-link" to="/popular">Popular Movies</NavLink>
            <NavLink className="nav-link" to="/topRated">Top Rated Movies</NavLink>
            <NavLink className="nav-link text-white bg-dark" to="/search/movie">Search</NavLink>
            <Nav.Link className='fw-bold' onClick={logout}>Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export { NavBar };