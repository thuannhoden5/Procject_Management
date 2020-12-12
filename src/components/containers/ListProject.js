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
  ListGroup,
  Modal,
} from "react-bootstrap";
import { ModalProject } from "./ModalProject";

export const ListProject = () => {
  const [list, setList] = useState([
    {
      id: "1",
      title: "Project 1",
      description: "Description 1",
      start: "2020-1-1",
      end: "2020-12-30",
      ower: "Admin 1",
      partner: "USA",
      money: "1000$",
      infor: "adfa adf asfq daf df",
      member: ["catch data user 1", "catch data user 2"],
      task: ["task 1", "task 2", "task 3"],
    },
    {
      id: "2",
      title: "Project 2",
      description: "Description 2",
      start: "2021-1-1",
      end: "2021-12-30",
      ower: "Admin 2",
      partner: "England",
      money: "100000$",
      infor: "fhfgh fhjf hf hfgf ghj ",
      member: ["catch data user 1 ", "catch data user 3"],
      task: ["task 1", "task 2", "task 3"],
    },
  ]);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const handleClick = (item) => {
    setShow(true);
    setData(item);
  };

  const offModal = () => {
    setShow(false);
  };

  return (
    <div>
      <ListGroup>
        {list.map((item) => {
          //   console.log(item);
          return (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col onClick={() => handleClick(item)}>{item.title}</Col>
              </Row>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <ModalProject data={data} show={show} change={offModal} />
    </div>
  );
};
