import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Notfound from "./components/Notfound";
import { ProtectedRoute } from "./ProtectedRoute";
import React,{ createContext, useState } from "react";
import {
	Routes,
	Route,
  } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import { ThemeContext } from "./context/themeContext";

const App=()=>{
  const { toggle , auth , setAuth } = React.useContext(ThemeContext);
const authenticate =  JSON.parse(localStorage.getItem('auth'))|| false
	return(
		<div className={toggle ? "bg-dark" : "bg-light"}> 
		
	<Routes>
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Notfound />} />
	  <Route
          path="dashboard"
          element={
            <ProtectedRoute auth={auth} >
              <Dashboard  auth={auth} setAuth={setAuth}/>
            </ProtectedRoute>
          }
        />
		<Route
          path="/"
          element={
            <PublicRoute auth={auth}>
              <Login auth={auth} setAuth={setAuth} />
            </PublicRoute>
          }
        />
    </Routes>
	

		</div>
	)
}
export default App ;