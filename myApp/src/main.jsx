import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const image="https://picsum.photos/200";
const customStyle={
  color:"peach",
  fontSize:"20px",
  border:"1px dashed violet"
}
{color:"red"}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className='header' style={customStyle}>my favourite foods</h1>
    <div>
      <img src={image + "?grayscale"} alt='noodle.jpg'/>
    </div>
  </div>
);

