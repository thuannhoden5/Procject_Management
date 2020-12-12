import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "./utils/axios";
export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }
  return (
    <div className="container-login contaner-form">
      <Container>
        <Form expand="lg" variant="light" bg="light">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </Form>
      </Container>
    </div>
  );
};
