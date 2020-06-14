import React, { useContext } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" render={LoginPage} />
          <Route exact path="/signup" render={SignUpPage} />
          <Route
            exact
            path="/dashboard"
            render={() => {
              return authContext.isAuthenticated() ? (
                <DashboardPage />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        </Switch>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </Router>
  );
}

export default App;
