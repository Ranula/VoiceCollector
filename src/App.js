import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js'
// import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (

 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <p>පහත මෙනුවෙන් විධානයක් තෝරන්න</p>
        
        <select>
          <option value="volvo">ශේෂය කොපමනද?</option>
          <option value="saab">අවසන් ගනුදෙනු පහ පෙන්වන්න </option>
          <option value="mercedes">පින් අංකය වෙනස් කරන්න</option>
          <option value="audi">පසු මෙනුවට </option>
        </select>
      <Demo />
      </div>
       
    );
  }
}
// ReactDOM.render(<recorder />, document.getElementById('App'));

export default App;
