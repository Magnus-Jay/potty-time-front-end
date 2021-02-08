import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./Button.css";
import Form from "../Form/Form.js";

function buttonCall() {
  return (
    <div>
      <Col>
        <Form />
        <Button
          as="input"
          type="submit"
          value="Search"
          variant="success"
          className="button"
          size="lg"
        />{" "}
      </Col>
    </div>
  );
}

export default buttonCall;
