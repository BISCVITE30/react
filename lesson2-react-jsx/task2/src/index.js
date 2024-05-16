import React from 'react';
import ReactDOM from 'react-dom';
// import 'styles.css';

const rootElem = document.querySelector('#root');

const element = (
  <main className="page">
    <form className="login-form">
      <h1 className="form-title">Profile</h1>
      <div className="form-control">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-control">
        <label htmlFor="age" id="age" className="form-label">
          Age
        </label>
        <input type="number" className="form-input" value={17} name="age" />
        <span style={{color: 'red', fontWeight:700}}>To young</span>
      </div>
      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  </main>
);

ReactDOM.render(element, rootElem);
