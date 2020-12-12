import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Col,
  Row,
  Form,
  Media,
  Card,
  Accordion,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

export const UserInformation = ({ data }) => {
  return (
    <>
      <Card.Header>Your information</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group>
            <Media>
              <img
                width={100}
                height={100}
                alt={data.altAvatar}
                src={data.urlAvatar ? data.urlAvatar : "/avatar.png"}
              />
            </Media>
            <Form.File id="avatar" label="Add your avatar" lang="en" custom />
          </Form.Group>
          <InputGroup className="mb-2">
            <FormControl
              id="inlineFormInputGroup"
              value={data.firstName + " " + data.lastName}
              disabled
            />
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Pencil />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>

          <InputGroup className="mb-2">
            <FormControl
              id="inlineFormInputGroup"
              value={data.address}
              disabled
            />
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Pencil />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Form>
      </Card.Body>
    </>
  );
};
