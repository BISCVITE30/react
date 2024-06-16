import React, { Component } from "react";
import Offline from "./Offline.jsx";
import Online from "./Online.jsx";

class Status extends Component{
    constructor(props){
        super(props);

        this.stage = {
            isOnline : this.props.isOnline,
        }
    }

    render(){
            if(this.stage.isOnline) {
                return <Online />;
            } 
            return <Offline />;
    }
}

export default Status;