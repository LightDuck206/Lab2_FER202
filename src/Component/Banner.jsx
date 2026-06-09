import { Carousel } from 'react-bootstrap';

function Banner() {
  
return (
    <>
     <Carousel>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&h=600&fit=crop"
            alt="Summer Collection"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <h3>Summer Collection 2026</h3>
            <p>Discover the latest trends in summer fashion. Get up to 50% off on selected items.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&h=600&fit=crop"
            alt="Exclusive Accessories"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <h3>Fashion Collection 2026</h3>
            <p>Complete your look with our premium range of accessories and jewelry.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1600&h=600&fit=crop"
            alt="Winter Essentials"
            style={{ objectFit: 'cover', maxHeight: '600px' }}
          />
          <Carousel.Caption style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
            <h3>New Arrivals</h3>
            <p>Explore our newest clothing collection</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
)
}

export default Banner