import React from "react";
import Potty from "../assets/potty.jpg";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import "./Home.css";
import Button from "../Button/Button.js"





function Home() {
    return (
    <Container className="container">
        <Row className="heading">
            <h1>
                Welcome to Potty Time!
            </h1>
        </Row>
        <Row className="potty-img">
            <Image className="responsive" src={Potty} rounded/>
        </Row>
        <Button />
    </Container>
    );
  }
  
  export default Home;