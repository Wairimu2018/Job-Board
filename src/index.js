import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createRoot} from 'react-dom/client';

// const myFirstElement = <h1> Hello React</h1>

const root = createRoot(document.getElementById('root'));
root.render(<App />);