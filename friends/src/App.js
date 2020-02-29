import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";


import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import FriendsList from "./components/FriendsList";
import Navbar from "./components/Navbar";


function App() {



  return (

    
    
      <Router>
        <div className="App">
{/* 
          <Navbar>
            <Nav.Link>
              {usersignedIn ?  
              <span to="/login" onClick={handleLogout}>Logout</span> 
              :
              <Link to="/login">Login</Link>
              }
              
            </Nav.Link>
            <Nav.Link>
              <Link to="/friends">Friends</Link>
            </Nav.Link>
          </Navbar> */}

        
        <Navbar/>


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
