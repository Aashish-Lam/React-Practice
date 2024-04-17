import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const react = (
  <a href="https://google.com" target="_blank">
    Click me to visit google
  </a>
);

const anotherElement = (
  <a href="https://facebook.com" target="_blank">
    Facebook
  </a>
);
const reactElemnt= React.createElement(
  'a',
  {
    href:'www.google.com'
  },'Googgggle'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {reactElemnt}
    {react}
    <div>{anotherElement}</div>
  </React.StrictMode>
);
