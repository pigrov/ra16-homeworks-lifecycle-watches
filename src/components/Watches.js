import React from "react";
import { Form, Button } from "react-bootstrap";
import uuid from "react-uuid";

export default function Watches(props) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      id: uuid(),
      date: evt.target.date.value,
      count: evt.target.count.value,
    };
    console.log(data);
    props.onSave(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>TimeZone</Form.Label>
        <Form.Control type="text" placeholder="Enter TimeZone" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
