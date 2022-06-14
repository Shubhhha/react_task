import React, { Fragment, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const defaultState = {
    nameError:null,
    emailError:null,
    passwordError:null,
    confirmPasswordError:null
    }
const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    
  });

  const [errorMessage , setErrorMessage] = useState(defaultState)
  const handleChange = (e) => {
    //   console.log(e.target.value);
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validation = (userDetails) => {

    
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";
    if (userDetails.name == "") {
      nameError = "Name field is required";
    }else{
        nameError = null ;
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userDetails.email == "" || reg.test(userDetails.email) === false) {
      emailError = "Email Field is Invalid ";
    }else{
        emailError = null ;
    }
    if (userDetails.password == "") {
      passwordError = "Password field is required";
    }else{
        passwordError = null 
    }
    if (userDetails.confirmPassword == "" || userDetails.confirmPassword != userDetails.password) {
        confirmPasswordError = "Confirm Password doesnot match";
      }else if (userDetails.confirmPassword != userDetails.password) {
        confirmPasswordError = "Confirm Password doesnot match";
      }else{
        confirmPasswordError = null
      }
     
    if (emailError || nameError || passwordError || confirmPasswordError) {
    //   this.setState({ nameError, emailError, passwordError });
      setErrorMessage({ nameError, emailError, passwordError  ,confirmPasswordError })
      return false;
    }
    return true;
  };
  const submitForm = (e) => {
    e.preventDefault();

   if(validation(userDetails)){
   
   console.warn("submitted");
   }
    console.log(userDetails);
  };

  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          <Col lg={5}>
            <Form onSubmit={submitForm}>
              <h1 className="text-center">User Sign Up</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  name="name"
                  onChange={handleChange}
                />
                  <span className="text-danger">{errorMessage.nameError}</span>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                />
                   <span className="text-danger">{errorMessage.emailError}</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                   <span className="text-danger">{errorMessage.passwordError}</span>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                />
                   <span className="text-danger">{errorMessage.confirmPasswordError}</span>

              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg" type="submit">
                  Sign Up
                </Button>
              </div>
            </Form>
          </Col>
          <Col lg={7}></Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Signup;
