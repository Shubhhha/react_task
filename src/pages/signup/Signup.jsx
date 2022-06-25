import React, { useState } from "react";
import ContactInfo from "./components/ContactInfo";
import LocationInfo from "./components/LocationInfo";
import PersonalInfo from "./components/PersonalInfo";
import Alert from "react-bootstrap/Alert";

import { Row , Col , Container } from "react-bootstrap";

const Signup = () => {

  const [step, setstep] = useState(1);
 const [formSubmit ,setFormSubmit] = useState(false);
  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone_number:'',
    country:'',
    state:'',
    password:'',
    confirm_password:'',
    address:'',
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }


  const getAllValues=(userDetails)=>{
    console.log(userDetails);
    var users = JSON.parse(localStorage.getItem("Users")) || [];
    var userData = userDetails;
    users.push(userData);
    localStorage.setItem("Users", JSON.stringify(users));
    setFormData({firstName:'',lastName:'',gender:'',email:'',phone_number:'',country:'',state:'',password:'',confirm_password:'',address:''});
    setFormSubmit(true);
    setstep(1);
  }
// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="bg-dark vh-100" >
          <Container  style={{width:"70%"}}>
        
            <Row>
              
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                {
                  (formSubmit) ?  <Alert variant="success">
                  <h6>Sign Up Successfully</h6>
               </Alert> : ''
                }
               
                <PersonalInfo nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="bg-dark vh-100">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <ContactInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 3:
      return (
        <div className="bg-dark vh-100">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <LocationInfo values={formData} setFormData={setFormData}  getAllValues={getAllValues} nextStep={nextStep} prevStep={prevStep}  handleFormData={handleInputData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
};

export default Signup;
