import { Navbar, Nav, Container } from 'react-bootstrap';
import { TiShoppingCart } from "react-icons/ti";
import { FaShop } from "react-icons/fa6";
function Header({ cart }) {
  
return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3" style={{ borderBottom: '1px solid #333' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'serif' }}>
            <FaShop color='white'/>SHOP FASHION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto ms-4">
              <Nav.Link href="#home" active>Home</Nav.Link>
              <Nav.Link href="#Product">Product</Nav.Link>
              <Nav.Link href="#men">Men</Nav.Link>
              <Nav.Link href="#women">Women</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              
            </Nav>
            <Nav.Link href="#cart" style={{ color: 'white' }}><TiShoppingCart color="white" />Cart({cart.length})</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>
)
}

export default Header