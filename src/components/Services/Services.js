import React from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';
import useServices from "./../../hooks/useServices";

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <Container className="py-5">
          <h2 className="text-center text-white mb-0">Our All Services</h2>
          <p className="my-4 mt-2 text-center text-muted fs-5">
          Obokash is an online travel community of Bangladesh aviation and travel industries that working with the global B2B travel marketplace. In the travel business, there are two-part.
          </p>
        <Row>
          {services?.map((service) => (
            <Service service={service} key={service.key}></Service>
            
          ))}
        </Row>
      </Container> 
        </div>
    );
};

export default Services;