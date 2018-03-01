import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js';
import Selector from './selector/selectors.js';
// import Dropdown from 'react-dropdown'

// import ReactDOM from 'react-dom';
import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';

// import './dropdown.scss';

//drop down
import Dropdown from './dropDown/dropDown.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      command:'',
      domain:'',
    }
    // this.handleChanges=this.handleChanges.bind(this);
  }



  handleRadioChanges(e){
    this.setState({
      domain:e
    })
  }

  handleSelectChanges(e){
    this.setState({
      command:e.target.value
    })
  }
  


  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <br />
        <Selector 
          handleRadioChanges={this.handleRadioChanges.bind(this)}
          radioValue={this.state.radioValue}
          
       />
       <br/>
        <p>පහත මෙනුවෙන් විධානයක් dfdf තෝරන්න</p>
        <br />
      <Dropdown
        handleSelectChanges={this.handleSelectChanges.bind(this)}
        selectedCommand={this.state.command}
        getDomain = {this.state.domain}
      />
      <Demo />
     
      </div>
       
    )}
}


export default App;
