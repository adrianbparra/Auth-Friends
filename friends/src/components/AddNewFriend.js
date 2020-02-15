import React, { useState } from "react"

import {axiosWithAuth} from "../utils/axiosWithAuth";

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


    }


    return (
        <form onSubmit={friendSubmit}>
            <input
                placeholder="Name"
                type="name"
                name="name" 
                value={friend.name}
                onChange={handleChange}
            />
            <input
                placeholder="Age"
                type="age"
                name="age"
                value={friend.age}
                onChange={handleChange}
            />
            <input
                placeholder="Email"
                type="email"
                name="email"
                value={friend.email}
                onChange={handleChange}
            />
            <button type="submit">Add Friend</button>
        </form>
    )
}


export default AddNewFriend;