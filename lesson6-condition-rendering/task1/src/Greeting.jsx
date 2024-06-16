import React, { Component } from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeting.jsx";

const Greeting = props => {
    if(props.isLoggedIn){
        return <UserGreeting />
    }

    return <GuestGreeting />
}

export default Greeting;