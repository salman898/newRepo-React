import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name,age}) {
  return <div class="app-css">
              <h1>Assingment#01 React</h1>
             Hello <strong> {name} .</strong> Mine Age is {age} <br/>
             <h5>My Classes Timing Now a days</h5>
             <ol>
              <li>BootCamp: Class#1 = Saturday at 10 pm</li>
              <li>Bootcamp: Class#2 = Thuesday at 10 pm</li> 
              <li>Cloud Native Class= Every Sunday Workshop</li> 
             </ol>
             <p>
               I Also Take Classes of University List Below:
              <ul>
               <li>4 Days Classes Every week</li>
                <li>Start From 10 am To 2 pm</li>
                <li>Also I do a Lots of Assignment of Uni</li>
                </ul>
             </p>
             <Hello></Hello>
        </div>
        
}

export default App;
