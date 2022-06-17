import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { UserList } from "./users/UserList";
import { AddUser } from "./users/AddUser";
import { EditUser } from "./users/EditUser";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
