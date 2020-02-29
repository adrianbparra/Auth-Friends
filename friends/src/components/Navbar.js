
import React,{useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

import {Navbar,Nav} from "react-bootstrap";




const NavBar = props => {


    let history = useHistory()

    

    const [usersignedIn, setUsersignedin] = useState(()=>{return localStorage.getItem("token")})

    useEffect(()=>{

        setUsersignedin(()=>{
            return localStorage.getItem("token")
        })

        console.log(usersignedIn)

    },[history.location.pathname])

    const handleLogout = e => {
        localStorage.removeItem("token")
  
        setUsersignedin(null)
        history.replace("/login")
        
    }

    console.log(history.location.pathname)
  
    return (

        <Navbar>
            <Nav.Link>
              {usersignedIn !== null ?  
              <span onClick={handleLogout}>Logout</span> 
              :
              <span onClick={()=>{history.replace("/login")}}>Login</span>
              }
              
            </Nav.Link>
            <Nav.Link>
              <span onClick={()=>{history.replace("/friends")}}>Friends</span>
            </Nav.Link>
        </Navbar>

    )
}

export default NavBar;