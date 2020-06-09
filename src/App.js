import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Dashboard from "./components/Dashboard/Dashboard.component";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <Route exact path="/login" render={LoginPage} />
            <Route exact path="/signup" render={SignUpPage} />
            <Route exact path="/dashboard" render={Dashboard} />
          </Switch>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
