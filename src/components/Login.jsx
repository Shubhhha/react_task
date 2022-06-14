import React, { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import '../App.css' ;
var imglogo = require('../images/5087579.png')
var sideimg = require('../images/loginimg.jpg')

const Login = () => {
  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          <Col lg={5} md={7} sm={12} className="text-center">
          <img src={imglogo} className="icon-img" alt="avatar"></img>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            
              <div className="d-grid ">
                <Button variant="primary" size="lg">
                 Login
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={7} md={5} sm={12}>
          <img src={sideimg} className="side-img" alt="avatar"></img>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Login;
