import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="text-center">
          <Col>
            <h5 className="mb-3" style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Student Information</h5>
            <p className="mb-1"><strong>Name:</strong> Lê Quang Đức</p>
            <p className="mb-1"><strong>ID:</strong> HE204098</p>
            <p className="mb-1"><strong>Class:</strong> SE2004-NJ</p>
            <p className="mb-0"><strong>Email:</strong> ductotetubqn@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
