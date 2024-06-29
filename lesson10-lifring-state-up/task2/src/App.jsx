import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },

    cartItems: [
      {
        id: '1',
        name: 'Ipad Pro',
        price: 799,
      },
      {
        id: '2',
        name: 'Iphone 11',
        price: 999,
      },
    ],
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;
    return (
      <div className="page">
        <h1 className="title">
          {`Hello, ${userData.firstName} ${userData.lastName}`}
        </h1>
        <main className="content">
          <ShoppingCart cartItems={this.state.cartItems} userData={this.state.userData} />
          <Profile userData={this.state.userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;
