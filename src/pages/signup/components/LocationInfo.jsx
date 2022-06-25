import React, {Fragment , useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { getCountries } from "country-state-picker";

const LocationInfo = ({ nextStep, handleFormData, prevStep, values ,setFormData ,getAllValues}) => {
    console.log(getCountries());
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.password) || validator.isEmpty(values.confirm_password))  {
      setError(true);
    } else {
        getAllValues(values);
    }
  };
  return (
  <Fragment>
       <div className="bg-dark vh-100">

<Card  style={{ marginTop: 100 }}>
  <Card.Body>
    <Form onSubmit={submitFormData}>
      <Form.Group className="mb-3">
        <Form.Label>password</Form.Label>
        <Form.Control
          style={{ border: error ? "2px solid red" : "" }}
          type="password"
          placeholder="password"
          onChange={handleFormData("password")}
          defaultValue={values.password}

        />
        {error ? (
          <Form.Text style={{ color: "red" }}>
            This is a required field
          </Form.Text>
        ) : (
          ""
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          style={{ border: error ? "2px solid red" : "" }}
          type="password"
          placeholder="confirm password"
          onChange={handleFormData("confirm_password")}
          defaultValue={values.confirm_password}

        />
        {error ? (
          <Form.Text style={{ color: "red" }}>
            This is a required field
          </Form.Text>
        ) : (
          ""
        )}
      </Form.Group>
    
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="primary" onClick={prevStep}>
          Previous
        </Button>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  </Card.Body>
</Card>
</div>
  </Fragment>
  );
};

export default LocationInfo;
