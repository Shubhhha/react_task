import React, { useEffect, useState, useContext, Fragment } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import LoginForm from "./components/login";
var imglogo = require("../../images/5087579.png");
var sideimg = require("../../images/loginimg.png");
const Index = (props) => {
 
  return (
    <Container className="mt-5" style={{height:"100vh"}}>
      <Row>
        <Col lg={5} md={7} sm={12} className=" ">
          <Row className="justify-content-md-center">
          <img src={imglogo} className="  mx-auto  w-50 h-50" alt="avatar"></img>
          </Row>
         <LoginForm/>
        </Col>
        <Col lg={7} md={5} sm={12}>
          <img src={sideimg} className="side-img " alt="avatar"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
