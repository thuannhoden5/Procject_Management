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
  ProgressBar,
  CardDeck,
  Button,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import {
  PersonCircle,
  FlagFill,
  TrophyFill,
  PeopleFill,
} from "react-bootstrap-icons";

export const ModalProject = (props) => {
  let { data, show, change } = props;
  console.log(data);
  const Progress = ({ data }) => {
    let start = new Date(data.start);
    let end = new Date(data.end);
    let today = new Date();
    let duration = end - start;
    let t = Math.round(((today - start) / duration) * 100);
    let action;
    if (t < 0) {
      return (
        <div>
          <ProgressBar label="Not start" variant="info" now={100} />
        </div>
      );
    }
    switch (t) {
      case t < 50:
        action = "success";
        break;
      case t < 80:
        action = "warning";
        break;
      default:
        action = "danger";
    }
    let converTime = (time) => {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${time.getDate()}-${
        months[time.getMonth()]
      }-${time.getFullYear()}`;
    };
    return (
      <div className="status-time">
        <span className="time-start">{converTime(start)}</span>
        <span className="time-end">{converTime(end)}</span>
        <ProgressBar
          animated
          label={`${t}%`}
          striped
          variant={action}
          now={t}
        />
        <span className="time-now" style={{ left: t + "%" }}>
          Now
        </span>
      </div>
    );
  };
  return (
    <Modal
      show={show}
      onHide={change}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
      key={data.id}
      centered
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          {data.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={4}>
              <Card>
                <Card.Body className="infor-project">
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.description}
                  </Card.Subtitle>
                  <Card.Text>
                    <PersonCircle />
                    {data.ower}
                  </Card.Text>
                  <Card.Text>
                    <FlagFill />
                    {data.partner}
                  </Card.Text>
                  <Card.Text>
                    <TrophyFill />
                    {data.money}
                  </Card.Text>
                  <ListGroup horizontal>
                    <PeopleFill />
                    <div>
                      {data.member.map((item, index) => {
                        return (
                          <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={popover(item)}
                            key={index}
                          >
                            <Button variant="success" className="member">{item}</Button>
                          </OverlayTrigger>
                        );
                      })}
                    </div>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={8}>
              <Card.Title>List task</Card.Title>
              <CardDeck>
                {data.task.map((item, index) => {
                  return <CartTask data={item} key={index} />;
                })}
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Container>
          <Progress data={data} />
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

const CartTask = ({ data, key }) => {
  return (
    <>
      <Card key={key}>
        <Card.Body>
          <Card.Title>{data}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
const popover = (data) => (
  <Popover id="popover-basic">
    <Popover.Title as="h3">{data}</Popover.Title>
    <Popover.Content>Pro</Popover.Content>
  </Popover>
);
