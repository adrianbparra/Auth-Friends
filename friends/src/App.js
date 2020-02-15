import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";

import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    
      <Router>
        <div className="App">

          <header>
            <Link to="/login">Login</Link>
            <Link to="/friends">Friends</Link>
          </header>



        <Switch>
          <Route path="/login" component={LoginForm}/>

          <ProtectedRoute path="/friends" component={FriendsList} />
          
          <Route component={LoginForm}/>
        </Switch>




        </div>
      </Router>
  );
}

export default App;
