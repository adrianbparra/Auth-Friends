import React, { useState } from "react"

import {axiosWithAuth} from "../utils/axiosWithAuth";

import {Form, FormControl,Button} from "react-bootstrap"

const AddNewFriend = props => {

    const [friend, setFriend] = useState({name: "", age: "", email: "" })

    const handleChange = e=> {

    // console.log(e.target.value)
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
        
    }

    const friendSubmit = e => {
        e.preventDefault();
        console.log(friend)

        if(friend.name === "" || friend.age === ""|| friend.email === ""){
            alert("Add all info required")
            return 
        }

        axiosWithAuth().post("/friends", friend)
            .then(res=> {
                console.log(res.data)
            props.setFriendsList([...res.data])    
            })
            .catch(err=> console.log(err))

        setFriend({name: "", age: "", email: "" })
    }


    return (
        <Form onSubmit={friendSubmit}>
            <FormControl
                placeholder="Name"
                type="name"
                name="name" 
                value={friend.name}
                onChange={handleChange}
            />
            <FormControl
                placeholder="Age"
                type="age"
                name="age"
                value={friend.age}
                onChange={handleChange}
            />
            <FormControl
                placeholder="Email"
                type="email"
                name="email"
                value={friend.email}
                onChange={handleChange}
            />
            <Button variant="primary" type="submit">Add Friend</Button>
        </Form>
    )
}


export default AddNewFriend;