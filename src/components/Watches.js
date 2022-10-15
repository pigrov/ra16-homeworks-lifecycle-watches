import React, { useState, useEffect } from "react";
import { Container, Alert, Form, Button } from "react-bootstrap";
import uuid from "react-uuid";

export default function Watches(props) {
  const [data, setData] = useState(props.data);

  console.log(data);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      id: uuid(),
      city: evt.target.city.value,
      time: evt.target.time.value,
    };
    console.log(data);
    handleSave(data);
  };

  const handleSave = (value) => {
    if (value.city && value.time) {
      setData((prevState) => [...prevState, value]);
    }
  };

  const listing = data.map((item) => {
    return (
      <Alert id={item.id}>
        <Alert.Heading>{item.time}</Alert.Heading>
        <hr />
        <p className="mb-0">{item.city}</p>
      </Alert>
    );
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="city">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type={"text"}
            defaultValue={"Moscow"}
            placeholder={"Enter City"}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="time">
          <Form.Label>TimeZone</Form.Label>
          <Form.Control
            type={"number"}
            min={-12}
            max={12}
            step={1}
            maxLength={2}
            defaultValue={3}
            placeholder={"Enter Time"}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />
      {listing}
    </Container>
  );
}
