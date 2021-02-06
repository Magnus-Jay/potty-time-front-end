import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import "./Form.css";
import Form from 'react-bootstrap/Form'





function form() {
    return (
   <Row className="form">
      <Form.Group>
  <Form.Control type="text" placeholder=" Enter Zip Code" />
</Form.Group> 
   </Row>
    );
  }
  
  export default form;