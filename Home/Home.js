import React from "react";
import Potty from "../assets/potty.jpg";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import "./Home.css";





function Home() {
    return (
    <Container className="container">
        <Row className="potty-img">
            <Image className="responsive" src={Potty} rounded/>
        </Row>
    </Container>
    );
  }
  
  export default Home;