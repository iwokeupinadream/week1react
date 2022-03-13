import logo from './logo.svg';
import './App.css';
import React from 'react'
import loginForm from './components/loginForm'

let e = React.createElement

function App() {
  return (
    e(loginForm, {}, null)
  );
}

export default App;
