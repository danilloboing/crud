import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarRegistration from "./pages/CadastroCarros/CarRegistration";
import LoginPage from "./pages/Login/LoginPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/home" component={CarRegistration} />
        
      </Switch>
    </Router>
  );
}

export default App;