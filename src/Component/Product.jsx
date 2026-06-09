import { Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { products } from './productdata.jsx';

function Product({ cart, addToCart }) {
return (
    <>
     <Container className="my-5" id="Product">
        <h2 className="text-center mb-4" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Featured Products</h2>
        <Row>
          {products.map((product) => (
            <Col lg={4} md={6} sm={12} className="mb-4" key={product.id}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={product.image} alt={product.name} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="mb-0" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{product.name}</Card.Title>
                    <Badge bg={product.badgeBg}>{product.status}</Badge>
                  </div>
                  <Card.Text className="text-muted fw-bold mb-4">
                    {product.price}
                  </Card.Text>
                  <Button 
                    variant={cart.includes(product.id) ? "secondary" : "success"} 
                    className="mt-auto w-100" 
                    disabled={product.status === "Out of Stock" || cart.includes(product.id)}
                    onClick={() => addToCart(product.id)}
                  >
                    {cart.includes(product.id) ? "Added to cart" : "Add to cart"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
      
)
}

export default Product