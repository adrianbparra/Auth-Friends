import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddNewFriend from "./AddNewFriend";


const FriendsList = props => {

    const [friendsList, setFriendsList] = useState([])

    useEffect(()=> {

        axiosWithAuth().get("/friends")
        .then(res=> {
            console.log(res)
            setFriendsList([...res.data])
        })



    },[])

    const removeFriend = id => {

        console.log("remove friend", id)
        axiosWithAuth().delete(`/friends/${id}`)
            .then(res => {
                setFriendsList(res.data)
            })
            .catch(err => console.log(err))
    }   
    

    return (
        <div>
            <h1>Friends List</h1>
    
            <AddNewFriend setFriendsList={setFriendsList}/>
            <ul>
                {friendsList.map((friend) => {
                    return <li key={friend.id}>
                            <button onClick={()=>{removeFriend(friend.id)}}>Remove</button>
                            <span>{friend.name}</span>
                            <span>Age:{friend.age}</span>
                            <span>{friend.email}</span>
                        </li>    
                })}
            </ul>
        </div>
    )



}


export default FriendsList