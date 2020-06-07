import React from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import SignUpPage from './pages/SignUpPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AuthContext from './contexts/AuthContext';

function App() {
  return (
    <Router>
      <AuthContext.Provider>
        <div className="App">
          <Switch>
            <Route exact path="/login" render={LoginPage}/>
            <Route exact path="/signup" render={SignUpPage}/>
          </Switch>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </div>
      </AuthContext.Provider>
    </Router>

  );
}

export default App;
