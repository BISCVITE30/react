import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import ColorPicker from "./ColorPicker.jsx";

const rootElem = document.querySelector('#root');

ReactDOM.render(<ColorPicker />, rootElem)