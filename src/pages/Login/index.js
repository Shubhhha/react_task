import React, { useEffect, useState, useContext  ,Fragment} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col ,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { AuthContext } from "../context/authContext";
import { AuthContext } from "../../context/authContext";
// import { userLogin, login_schema } from "../services/usersService";
import { userLogin, login_schema } from '../../services/usersService';

const Index = (props) => {
  const { auth, saveLogin } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const onSubmit = (fields) => {
    // setLoginDetails({ ...fields }); // Set State

    // // Get users database
    // const users = JSON.parse(localStorage.getItem("Users")) || [];

    // // Check user exist into database
    // const results = users.find(function (entry) {
    //   return entry.email === fields.email && entry.password == fields.password;
    // });

    // console.log(fields, loginDetails, users, results, "form values");

    // Check user exist into database
    const results = userLogin(fields);

    if (results && results.email) {
      toast.success("Login Succesfully");
      saveLogin(results);
    } else {
      toast.error("Invalid Credentails");
      saveLogin(false);
    }
  };

  console.log(loginDetails, 666);
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Formik
            initialValues={loginDetails}
            validationSchema={login_schema()}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ touched, errors, isSubmitting, values }) => (
              <Fragment>
              
                <Row>
                    <Col md={12} className="text-center">
                    <h1 className="mt-5">Login Form</h1>
                    </Col>
                </Row>
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      autoComplete="off"
                      className={`mt-2 form-control
						${touched.email && errors.email ? "is-invalid" : ""}`}
                    />

                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="mt-3">
                      Password
                    </label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className={`mt-2 form-control
						${touched.password && errors.password ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mt-4"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-md-6 mt-4">
                      <Link to="/register"> Create an account?</Link>
                    </div>
                  </div>
                </Form>
                </Fragment>
            )}
          </Formik>
        </Col>
        <Col md={4}>Lll</Col>
      </Row>
    </Container>
  );
};

export default Index;
