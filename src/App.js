import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Header } from "./components/containers/Navbar";
import { Login } from "./components/containers/Login";
import { Register } from "./components/containers/Register";
import { Dashboard } from "./components/containers/Dashboard";

const App = () => {
  return (
    <div className="main">
      <div
        className="background-cover"
        style={{ backgroundImage: "url(/background.png)" }}
      ></div>
      <Header />
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default App;
