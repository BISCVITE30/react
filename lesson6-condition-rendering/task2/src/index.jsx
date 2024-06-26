import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from "./Mailbox.jsx";

const rootElem = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={[]} />, rootElem);