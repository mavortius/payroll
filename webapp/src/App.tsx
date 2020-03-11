import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home";
import EmployeeEdit from "./components/EmployeeEdit";
import './App.css';
import AppNavbar from "./components/AppNavbar";

function App() {
  return (
    <Router>
      <AppNavbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/employees" exact component={EmployeeList}/>
        <Route path="/employees/:id" component={EmployeeEdit}/>
        <Route component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
