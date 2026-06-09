import { Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';

function Product({ cart, addToCart }) {
  const products = [
    {
      id: 1,
      name: "Men's Hoodie",
      price: "450.000 VND",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&h=600&fit=crop",
      status: "In Stock",
      badgeBg: "success"
    },
    {
      id: 2,
      name: "Classic White Sneakers",
      price: "850.000 VND",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&h=600&fit=crop",
      status: "Sale -20%",
      badgeBg: "danger"
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: "1.200.000 VND",
      image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=600&h=600&fit=crop",
      status: "In Stock",
      badgeBg: "success"
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      price: "650.000 VND",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&h=600&fit=crop",
      status: "Out of Stock",
      badgeBg: "secondary"
    },
    {
      id: 5,
      name: "Graphic T-Shirt",
      price: "250.000 VND",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&h=600&fit=crop",
      status: "New Arrival",
      badgeBg: "info"
    },
    {
      id: 6,
      name: "Slim Fit Jeans",
      price: "550.000 VND",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FQcmqPozYfMtfGiTSlxZFbGm_JJVnIqxcg&s",
      status: "In Stock",
      badgeBg: "success"
    }
  ];
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