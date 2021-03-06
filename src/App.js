import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
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

const App = () => {
  const { toggle } = React.useContext(ThemeContext);
  const { auth } = React.useContext(AuthContext);
  console.log(auth, "Amy Auth Context");
  return (
    <div className={toggle ? "bg-dark" : "bg-light"}>
      <Header></Header>
      <Routes>
        <Route path="register" element={<Register />} />
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
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
      <ToastContainer/>
    </div>
  );
};
export default App;
