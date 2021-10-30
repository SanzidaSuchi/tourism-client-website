import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import useAuth from '../../hooks/useAuth';
import Package from '../Package/Package';
import Services from '../Services/Services';

const Home = () => {
    const { services } = useAuth();
    return (
        <div>
             <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/HhKwzZs/slider1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-primary">First</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/CzKvWmZ/slider2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Second</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block h-25 w-100"
            src="https://i.ibb.co/d2SfXCz/slider3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-primary">Third</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="py-5">
        <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
            {services?.map((service) => (
            <Service service={service} key={service.key}></Service>
          ))}
            </Row>
        </div>
        </Container>
        <Services></Services>
        <Package></Package>
        </div>
    );
};

export default Home;









