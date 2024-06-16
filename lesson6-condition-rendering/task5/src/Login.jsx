import React, { Component } from 'react';

class Login extends Component{
    render(){
        const { onLogin } = this.props;
        return(
            <button className='btn login' onClick={onLogin}>
                Login
            </button>
        )
    }
}

export default Login;