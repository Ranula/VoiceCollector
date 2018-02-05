import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js';
import Selector from './selector/selectors.js';

// import ReactDOM from 'react-dom';
import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';

class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      command:'',
      subCommand:''
    }
    this.handleChanges=this.handleChanges.bind(this);
    this.handleButtonChanges=this.handleButtonChanges.bind(this)
    // this.Selector=this.Selector.bind(this);
  }
  handleChanges(event){
    this.setState({
      command:event.target.value
    });
    RadioGroup.value="";
    console.log(this.state.command);
    // this.Selector.method();
 }
 handleButtonChanges(event){
   RadioGroup.value="";
  console.log("in handleButton")
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <p>පහත මෙනුවෙන් විධානයක් තෝරන්න</p>
        
        <select onChange={this.handleChanges}>
          <option value="1">ශේෂය කොපමනද?</option>
          <option value="2">අවසන් ගනුදෙනු පහ පෙන්වන්න </option>
          <option value="3">පින් අංකය වෙනස් කරන්න</option>
          <option value="4">පසු මෙනුවට </option>
        </select>

        <h4>Vertical Radio Buttons</h4>
        <RadioGroup onChange={ this.handleButtonChanges }>
          <ReversedRadioButton value="apple">
            Apple
          </ReversedRadioButton>
          <ReversedRadioButton value="orange">
            Orange
          </ReversedRadioButton>
          <ReversedRadioButton value="melon">
            Melon
          </ReversedRadioButton>
        </RadioGroup>

      {/* <Selector/>  */}
      {/* <Selector onRef={ref => (this.child = ref)}/>    */}
      {/* <Selector  onRef={ref => (this.child = ref)} />/> imported selector  */}
      <Demo /> {/*voice Recorder Component */}
      </div>
       
    );
  }
}
// ReactDOM.render(<recorder />, document.getElementById('App'));

export default App;
