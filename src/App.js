import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Notfound from "./components/Notfound";
import {
	Routes,
	Route,
  } from "react-router-dom";
const App=()=>{
	return(
		<div> 
	<Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
		</div>
	)
}
export default App ;