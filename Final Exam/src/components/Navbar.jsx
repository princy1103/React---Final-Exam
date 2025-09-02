import { Navbar as BsNavbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../store/auth/actions';


export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((s) => s.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/');
  };

  return (
    <BsNavbar bg="light" variant="light" expand="lg" className="mb-4 border-bottom">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="fw-bold">BLOG<span className="text-warning">TRN</span></BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Posts</Nav.Link>
            <Nav.Link as={NavLink} to="/new">New Post</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link disabled>Hi, {user?.name}</Nav.Link>
                <Button size="sm" variant="outline-dark" onClick={handleSignOut}>Sign out</Button>
              </>
            ) : (
              <Nav.Link as={NavLink} to="/signin">Sign in</Nav.Link>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}


