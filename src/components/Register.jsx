import React , {useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

 

const LoginSchema = Yup.object().shape({
email: Yup.string()
	.email("Invalid email address format")
	.required("Email is required"),
password: Yup.string()
	.min(3, "Password must be 3 characters at minimum")
	.required("Password is required"),
  name : Yup.string().required("Name is required"),
  passwordConfirmation: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Confirm Password is required"),
});

const  Register = ()=> {
// check user is logged in or not 
const user_session = JSON.parse(localStorage.getItem('user_session'))
if(user_session!=null)
{
	return <Navigate to="/" />
}

const notify = () => toast("You have registered successfully!");

	return (
	<div className="container" style={{width:"30%"}}>
		<div className="row">
		<div className="col-lg-12">
			<Formik
			initialValues={{ email: "", password: "" ,passwordConfirmation:"",name:""}}
			validationSchema={LoginSchema}
			onSubmit={(values,{resetForm}) => {
        var users = JSON.parse(localStorage.getItem('Users')) || [];
        var userData = values;
      
        users.push(userData);
        localStorage.setItem('Users', JSON.stringify(users));
				// console.log(values);
				//  alert("submitted");
				resetForm({values:""})
				notify()
			}}
			>
			{({ touched, errors, isSubmitting, values }) =>
			
				<div>
					<div className="row mb-5">
					<div className="col-lg-12 text-center">
						<h1 className="mt-5">Signup Form</h1>
		               <ToastContainer />
					</div>
					</div>
					<Form>
          <div className="form-group">
						<label htmlFor="email">Name</label>
						<Field
						type="text"
						name="name"
						placeholder="Enter name"
						className={`mt-2 form-control
						${touched.name && errors.name ? "is-invalid" : ""}`}
						/>

						<ErrorMessage
						component="div"
						name="name"
						className="invalid-feedback"
						/>
					</div>
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
						${
							touched.password && errors.password
							? "is-invalid"
							: ""
						}`}
						/>
						<ErrorMessage
						component="div"
						name="password"
						className="invalid-feedback"
						/>
					</div>
          <div className="form-group">
						<label htmlFor="password" className="mt-3">
						Confirm Password
						</label>
						<Field
						type="password"
						name="passwordConfirmation"
						placeholder="Enter password"
						className={`mt-2 form-control
						${
							touched.passwordConfirmation && errors.passwordConfirmation
							? "is-invalid"
							: ""
						}`}
						/>
						<ErrorMessage
						component="div"
						name="passwordConfirmation"
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
					  <div className="col-md-6 mt-4" >
                          <Link to="/">Already have an account?</Link>
					  </div>
					 </div>
					</Form>
				</div>
			}
			</Formik>
		</div>
		</div>
	</div>
	);
}

export default Register;
