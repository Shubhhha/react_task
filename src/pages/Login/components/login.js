import React, { useEffect, useState, useContext, Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../context/authContext";
import { userLogin, login_schema } from "../../../services/usersService";

const LoginForm = (props) => {
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
  return (
    <Formik
      initialValues={loginDetails}
      validationSchema={login_schema()}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ touched, errors, isSubmitting, values }) => (
        <Fragment>
          <Form>
            <div className="form-group mb-3">
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
                className="invalid-feedback "
              />
            </div>

            <div className="form-group mb-3">
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

            <div className="d-grid ">
              <Button variant="primary" size="lg" type="submit">
                Login
              </Button>
            </div>
            <div className="col-md-6 mt-4">
              <Link to="/signup"> Create an account?</Link>
            </div>
            
          </Form>
        </Fragment>
      )}
    </Formik>
  );
};

export default LoginForm;
