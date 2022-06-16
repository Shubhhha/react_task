import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Button, Form  , InputGroup} from "react-bootstrap";
import { validate } from "../../services/usersService";
import Alert from "react-bootstrap/Alert";
import { AiFillEye } from "react-icons/ai";
var sideimg = require("../../images/signupimg.png");

const Signup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [userDetails, setUserDetails] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    //   console.log(e.target.value);
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(userDetails));
    setIsSubmit(true);
    console.log(userDetails);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(userDetails);
      var users = JSON.parse(localStorage.getItem("Users")) || [];
      var userData = userDetails;

      users.push(userData);
      localStorage.setItem("Users", JSON.stringify(users));
      setUserDetails(initialValues);
    }
  }, [formErrors]);

  const showPasswordFn = () => {
    setShowPassword(!showPassword);
  };
  const showConfirmPasswordFn = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Fragment>
      <Container className="mt-5" style={{height:"100vh"}}>
        <Row>
          <Col lg={5} style={{marginTop:"40px"}}>
            <Form onSubmit={submitForm}>
              <h1 className="text-center">SIGN UP</h1>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <Alert variant="success">
                  <h6>Sign Up Successfully</h6>
                </Alert>
              ) : (
                ""
              )}

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                />
                <span className="text-danger">{formErrors.name}</span>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={userDetails.email}
                />
              <span className="text-danger">{formErrors.email}</span>

              </Form.Group>
            
               
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup className="mb-3">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={userDetails.password}
                      className="form-controll"
                    />
                      <InputGroup.Text id="basic-addon2">
                      <AiFillEye onClick={showPasswordFn} />
                      </InputGroup.Text>
                    </InputGroup>
                <span className="text-danger">{formErrors.password}</span>
                   
                  </Form.Group>
            
               
             

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <InputGroup className="mb-3">
                    <Form.Control
                     type={showConfirmPassword ? "text" : "password"}
                      placeholder="Password"
                      name="confirmPassword"
                      onChange={handleChange}
                      value={userDetails.confirmPassword}
                    />
                      <InputGroup.Text id="basic-addon2">
                      <AiFillEye onClick={showConfirmPasswordFn} />
                      </InputGroup.Text>
                    </InputGroup>
                    <span className="text-danger">{formErrors.confirmPassword}</span>
                
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={7}>
            <img src={sideimg} className="side-img"></img>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Signup;
