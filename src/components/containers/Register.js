import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

export const Register = () => {
  return (
    <div className="container-register contaner-form">
      <Container>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First nanme</Form.Label>
              <Form.Control required type="email" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formGridConfirmPassword">
            <Form.Label>Confirl Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Sex
              </Form.Label>
              <Col sm={3}>
                <Col as={Col}>
                  <Form.Check
                    type="radio"
                    label="Male"
                    name="formHorizontalRadios"
                    id="male"
                  />
                </Col>
                <Col as={Col}>
                  <Form.Check
                    type="radio"
                    label="Female"
                    name="formHorizontalRadios"
                    id="female"
                  />
                </Col>
                <Col as={Col}>
                  <Form.Check
                    type="radio"
                    label="More"
                    name="formHorizontalRadios"
                    id="more"
                  />
                </Col>
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
