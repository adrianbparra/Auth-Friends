import React, { useState } from "react"
import axios from "axios";

const LoginForm = props => {

    const [isLoggin, setIsLoggin] = useState(false)


    const [credentials, setCredentials] = useState({username: "", password: ""})

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    const logginSubmit = e => {
        e.preventDefault();

        console.log(credentials)
        if(credentials.username === "" || credentials.password === ""){
            alert("Please Enter Username and Password")
            return
        }

        setIsLoggin(true)
        axios
            .post("http://localhost:5000/api/login", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                setIsLoggin(false)
                props.history.replace("/friends")
                
            })
            .catch(err => {
                setIsLoggin(false)
                console.log("invalid login", err)
               
            })
        
    }


    return (
        <div>
            <form onSubmit={logginSubmit}>
                <label>User Name:</label>
                <input
                    type="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />

                <label>Password:</label>
                <input 
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />

                <input disabled={isLoggin} type="submit"/>
            </form>
        </div>
    )
}

export default LoginForm;