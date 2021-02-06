import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import "./Button.css";





function buttonCall() {
    return (    
    <div>
        <Button as="input" type="submit" value="Search" variant="success" className="button" size="lg" />{' '}
    </div>
    );
  }
  
  export default buttonCall;