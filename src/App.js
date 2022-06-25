import Index from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notfound from "./components/Notfound";
import { ProtectedRoute } from "./ProtectedRoute";
import React  from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import { ThemeContext } from "./context/themeContext";
import { AuthContext } from "./context/authContext";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./pages/signup/Signup";


const App = () => {
  const { toggle } = React.useContext(ThemeContext);
  const { auth } = React.useContext(AuthContext);
  console.log(auth, "Amy Auth Context");
  return (
    <div   className={toggle ? "bg-dark" : "bg-light" }>
      <Header></Header>
      <Routes>
        <Route path="signup" element={
          <PublicRoute auth={auth} ><Signup /></PublicRoute>
        } />
        <Route path="*" element={<Notfound />} />
        
        <Route
          path="dashboard"
          element={
            <ProtectedRoute auth={auth}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute auth={auth}>
              <Index />
            </PublicRoute>
          }
        />
       
      </Routes>
      
      <ToastContainer/>
    </div>
  );
};
export default App;
