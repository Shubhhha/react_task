import * as Yup from "yup";

export const getUsers=()=>{
    const users = JSON.parse(localStorage.getItem("Users")) || [];
    return users;
}

export const userLogin=({email, password})=>{
    const users= getUsers();
    const results = users.find(function (entry) {
        return entry.email === email && entry.password ==password;
    });

    return results;
}


export const  login_schema = ()=>{
    const LoginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
        password: Yup.string()
          .min(3, "Password must be 3 characters at minimum")
          .required("Password is required"),
      });

      return LoginSchema ;
}



// For user sign up form 
 export const validate  =(values)=>{
    const errors={};
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!values.name){
     errors.name = "Name is required";
    }
    if(!values.email){
      errors.email = "Email is required";
     }
     if(!values.email){
      errors.email = "Email is required";
     }else if(!regex.test(values.email)){
      errors.email = "Email is invalid";
     }
     if(!values.password){
      errors.password = "Password is required";
     }
     if(!values.confirmPassword){
      errors.confirmPassword = "Confirm Password is required";
     }
     if(values.password!=values.confirmPassword){
      errors.confirmPassword = "Password or Confirm Password is not matched";
  
     }
     return errors ;
   }