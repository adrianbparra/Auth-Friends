import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddNewFriend from "./AddNewFriend";

import {Container, Row,Col,Button , Card} from "react-bootstrap";

const FriendsList = props => {

    

    const [friendsList, setFriendsList] = useState([])

    useEffect(()=> {

        axiosWithAuth().get("/friends")
        .then(res=> {
            console.log(res)
            setFriendsList([...res.data])
        })
        .catch(err=> console.log(err))



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
        <Container>
            <h1>Friends List</h1>
            <Container>
                <AddNewFriend setFriendsList={setFriendsList}/>
            </Container>
            <Row>
                {friendsList.length > 0 ? friendsList.map((friend) => {
                    return (
                    <Col xs={12} md={6} lg={3} key={friend.id}>
                        <Card>
                            
                            <Card.Title>{friend.name}</Card.Title>
                            <Card.Text>Age:{friend.age}</Card.Text>
                            <Card.Text>{friend.email}</Card.Text>
                            <Button variant="danger" onClick={()=>{removeFriend(friend.id)}}>Remove</Button>
                        </Card>
                    </Col>    
                )})
                :
                <Col>Loading...</Col>}
            </Row>
        </Container>
    )



}


export default FriendsList