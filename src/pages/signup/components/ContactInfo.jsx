import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { getCountries, getStates } from "country-state-picker";

// creating functional component ans getting props from app.js and destucturing them
const ContactInfo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);
  const [countries , setCountries] = useState();
  const allCountries = getCountries();
  const [states , setState] = useState([]);
    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.email) || validator.isEmpty(values.phone_number)|| validator.isEmpty(values.country))  {
      setError(true);
    } else {
      nextStep();
    }
  };


  const handleCountry =(e)=>{
     console.log(e.target.value);
     setState(getStates(e.target.value));
  }
  const handleState = (e)=>{
    console.log(e.target.value);
  }
  return (
    <div className="bg-dark vh-100">

      <Card  style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="email"
                defaultValue={values.email}
                placeholder="Email"
                onChange={handleFormData("email")}
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
              <Form.Label>Pohne number</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="phone_number"
                placeholder="number"
                defaultValue={values.phone_number}

                onChange={handleFormData("phone_number")}
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
              <Form.Label>Country</Form.Label>
                <Form.Select aria-label="Default select example"  onChange={handleCountry}>
                    <option>Select Country</option>
                      {allCountries.map((country) => (
                         <option key={country.code} value={country.code}>{country.name}</option>
                      ))}

                 
                </Form.Select>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Select aria-label="Default select example"  onChange={handleState}>
                    <option>Select State</option>

                      {
                        (states.length!=0) ? 
                      states.map((state) => (
                         <option key={state} value={state}>{state}</option>
                      ))
                      : ''
                      }

                 
              </Form.Select>
             
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

  );
};

export default ContactInfo;
