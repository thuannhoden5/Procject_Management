import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Form,
  Media,
  Card,
} from "react-bootstrap";
export const CreateProject = () => {
  return (
    <div>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Name Project</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description Project</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group controlId="start">
              <Form.Label>Date start Project</Form.Label>
              <Form.Control type="date" placeholder="Date start" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="end">
              <Form.Label>Date end Project</Form.Label>
              <Form.Control type="date" placeholder="Date end" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="partner">
          <Form.Label>Partner Project</Form.Label>
          <Form.Control type="text" placeholder="Partner" />
        </Form.Group>
        <Form.Group controlId="money">
          <Form.Label>Money</Form.Label>
          <Form.Control type="text" placeholder="Money" />
        </Form.Group>
        <Form.Group controlId="informantion">
          <Form.Label>More informantion Project</Form.Label>
          <Form.Control type="text" placeholder="More information" />
        </Form.Group>
      </Form>
    </div>
  );
};
