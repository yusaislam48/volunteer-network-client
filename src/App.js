import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvents from "./components/AddEvents/AddEvents";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvents">Add Events (You can add events from here)</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addEvents">
            <AddEvents></AddEvents>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
