import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import "./Form.css";
import Form from 'react-bootstrap/Form'





function form() {
    return (
<div className="form-row">
   <Form.Control type="text" placeholder=" Enter Zip Code" />
</div> 
    );
  }
  
  export default form;