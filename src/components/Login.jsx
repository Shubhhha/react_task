import React , {useEffect, useState ,useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "../context/themeContext";

const LoginSchema = Yup.object().shape({
email: Yup.string()
	.email("Invalid email address format")
	.required("Email is required"),
password: Yup.string()
	.min(3, "Password must be 3 characters at minimum")
	.required("Password is required"),
});

const  Login = (props)=> {
const { toggle, setToggle , auth , setAuth} =useContext(ThemeContext);
const [loginDetails , setLoginDetails] = useState({});
const [notification , setNotification]  = useState(false)
const [theme , setTheme]  = useState(false)


if(notification==true){
	const users =  JSON.parse(localStorage.getItem('Users'))|| []
	var results = users.filter(function (entry) { return entry.email === loginDetails.email && entry.password==loginDetails.password });
	const notify = () => toast("Email or Password doesnot match!");

if (results.length === 0 ) {
	notify()
}else{
	setToggle(!toggle);

    localStorage.setItem('user_session', JSON.stringify(loginDetails.email));
    localStorage.setItem('auth', JSON.stringify(true));
	// props.setAuth(JSON.parse(localStorage.getItem('auth')))
	setAuth(!auth)
}
 
}


	return (
	<div className="container" style={{width:"30%"}}>
		<div className="row">
		<div className="col-lg-12">
		<ToastContainer />
			<Formik
			initialValues={{ email: "", password: ""}}
			validationSchema={LoginSchema}
			onSubmit={(values) => {
                setLoginDetails(values);
				setNotification(!notification)

			}}
			>
			{({ touched, errors, isSubmitting, values }) =>
			
				<div>
					<div className="row mb-5">
					<div className="col-lg-12 text-center">
						<h1 className="mt-5">Login Form</h1>
					</div>
					</div>
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
         
				     <div className="row">
                      <div className="col-md-6">
					  <button
						type="submit"
						className="btn btn-primary btn-block mt-4"
					>
						Submit
					</button>
					<button onClick={()=>setToggle(!toggle)}>color</button>
					  </div>
					  <div className="col-md-6 mt-4" >
                          <Link to="/register"> Create an account?</Link>
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

export default Login;
