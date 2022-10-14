import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Watches(props) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: "18rem" }}>
        {props.children}
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
