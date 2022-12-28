import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navstyle.css"
function FillExample() {
  return (
    
<Navbar className='navhed' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='navhed'  fill variant="light" bg="light" defaultActiveKey="/home">
          <Nav.Item>
        <NavLink to="/Home" className={"text-decoration-none "}>Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Tollywood" className={"text-decoration-none "}>Tollywood</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Hollywood" className={"text-decoration-none "}>Hollywood</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Fitness" className={"text-decoration-none  "}>Fitness</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Food" className={"text-decoration-none "}>Food</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Technology" className={"text-decoration-none"}>Technology</NavLink>
      </Nav.Item>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FillExample;