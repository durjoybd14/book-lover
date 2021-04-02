import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Deals from "./components/Deals/Deals";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/LogIn/LogIn";
import Orders from "./components/Orders/Orders";
import NoMatch from "./components/NoMatch/NoMatch";
import Footer from "./components/Footer/Footer";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import AddBooks from "./components/AddBooks/AddBooks";
import EditBooks from "./components/EditBooks/EditBooks";
import CheckOut from "./components/CheckOut/CheckOut";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/manageBooks">
            <ManageBooks />
          </Route>

          <Route path="/addBooks">
            <AddBooks />
          </Route>

          <Route path="/editBooks">
            <EditBooks />
          </Route>
          
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>

          <PrivateRoute path="/checkout/:id">
            <CheckOut />
          </PrivateRoute>

          <Route path="/deals">
            <Deals />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider >

  );
}

export default App;
