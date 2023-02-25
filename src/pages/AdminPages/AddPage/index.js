import React from "react";
import { Col, Form, Nav, Row, Tab } from "react-bootstrap";
import AddPageWrapper from "./AddPageWrapper";

export const AddPage = () => {
  return (
    <AddPageWrapper>
      <div className="container">
        <div className="addPage-column">
          <div className="addPage-title">
            <h2>Qo'shish</h2>
            <span>Yangi kategoriya/taom qo’shish </span>
          </div>
          <div className="addPage-tabs">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-row">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Kategoriya</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Taom</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Form>
                        <Form.Group
                          className="mt-5 mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control
                            type="email"
                            placeholder="Kategoriya nomi"
                          />
                        </Form.Group>
                      </Form>
                      <button className="btn">Qo’shish</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Form>
                        <Form.Group
                          className="my-3 d-flex gap-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="Rasmga yo’l" />
                          <Form.Control type="text" placeholder="Taom nomi" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="Ta’rif"
                            rows={3}
                          />
                        </Form.Group>
                        <Form.Group
                          className="my-5 d-flex gap-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="text" placeholder="Narxi" />
                          <Form.Select aria-label="Default select example">
                            <option>Kategoriya</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Form>
                      <button className="btn">Qo’shish</button>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </AddPageWrapper>
  );
};
