import React, { useState, useEffect } from "react";
import { Container, Alert, Form, Button } from "react-bootstrap";
import uuid from "react-uuid";

export default function Watches(props) {
  const [data, setData] = useState(props.data);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      id: uuid(),
      city: evt.target.city.value,
      zone: evt.target.zone.value,
    };
    console.log(data);
    handleSave(data);
  };

  const handleSave = (value) => {
    if (value.city && value.zone) {
      setData((prevState) => [...prevState, value]);
    }
    console.log(data);
  };

  const refreshClock = () => {
    var utc = new Date();
    var unix = utc.getTime();

    setData((prevState) =>
      prevState.map((o) => {
        let time = unix + (o.zone - 3) * 60 * 60 * 1000;
        return { ...o, time: new Date(time).toLocaleTimeString() };
      })
    );
  };

  const listing = data.map((item) => {
    return (
      <Alert key={item.id}>
        <Alert.Heading>{item.time}</Alert.Heading>
        <hr />
        <p className="mb-0">
          {item.city}
          <span onClick={() => handleDelete(item.id)}> (delete)</span>
        </p>
      </Alert>
    );
  });

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [data]);

  const handleDelete = (id) => {
    setData((data) => data.filter((o) => o.id !== id));
  };

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

        <Form.Group className="mb-3" controlId="zone">
          <Form.Label>TimeZone</Form.Label>
          <Form.Control
            type={"number"}
            min={-12}
            max={12}
            step={1}
            maxLength={2}
            defaultValue={3}
            placeholder={"Enter TimeZone"}
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
