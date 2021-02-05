import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import "./Button.css";





function buttonCall() {
    return (
    <div>
    <Col></Col>
    <Col>
    <div>
        <Button as="input" type="submit" value="Search" variant="success" className="button" size="lg" />{' '}
    </div>
    </Col>
    </div>
    );
  }
  
  export default buttonCall;