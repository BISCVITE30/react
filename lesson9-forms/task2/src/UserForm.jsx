import React, { Component } from 'react';

class UserForm extends Component {
  state = {
    name: '',
    student: false,
    occupation: '',
    about: '',
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <h1 className="form-title">Profile</h1>

        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            id="name"
            name="name"
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            onChange={this.handleChange}
            checked={this.state.student}
            type="checkbox"
            id="student"
            name="student"
          />
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            onChange={this.handleChange}
            value={this.state.occupation}
            className="form-input"
            id="occupation"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>

        <div className="form-control">
          <label className="form-label" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            onChange={this.handleChange}
            value={this.state.about}
            className="form-input"
            id="about"
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default UserForm;
