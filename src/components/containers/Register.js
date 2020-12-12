import React, { useState } from "react";
import { Container, Form, Col, Row, Button, Alert } from "react-bootstrap";
import axios from "./utils/axios";
export const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr(null);
    if (values.confirmPassword !== values.password) {
      setErr("Confirm password not matched");
      return;
    }
    axios.post("/login", values);
    console.log(values);
  };
  return (
    <div className="container-register contaner-form">
      <Container>
        <Form onSubmit={handleSubmit}>
          {err && <Alert variant="danger">{err}</Alert>}
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First nanme</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={values.email}
            />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
            />
          </Form.Group>

          <Form.Group controlId="formGridConfirmPassword">
            <Form.Label>Confirl Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
            />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              name="address"
              onChange={handleChange}
              value={values.address}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
