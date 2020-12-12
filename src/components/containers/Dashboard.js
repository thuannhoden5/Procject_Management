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
  Accordion,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

import { CreateProject } from "./CreateProject";
import { ListProject } from "./ListProject";
import { UserInformation } from "./UserInformation";

export const Dashboard = () => {
  const [data, setData] = useState({
    firstName: "firstname",
    lastName: "lastname",
    email: "email@gmail.com",
    address: "HN",
    altAvatar: "avatar firstname lastname",
    urlAvatar: null,
  });
  const ifCustomer = () => {
    setData({
      ...data,
    });
  };
  return (
    <div className="">
      <Container>
        <Row>
          <Col xs={4}>
            <Card bg={"light"}>
              <UserInformation data={data} />
            </Card>
          </Col>
          <Col xs={8}>
            <Accordion defaultActiveKey="1">
              <Card bg={"light"}>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                  Create project
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <CreateProject />
                  </Card.Body>
                </Accordion.Collapse>

                <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                  List Your project
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <ListProject />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
