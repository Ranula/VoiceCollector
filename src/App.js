import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js';
import Selector from './selector/selectors.js';
import TextArea from './textArea/textArea.js';
import {Container,Row,Col} from 'react-grid-system';
// import Dropdown from 'react-dropdown'

// import ReactDOM from 'react-dom';


// import './dropdown.scss';

//drop down
import Dropdown from './dropDown/dropDown.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      command:'',
      domain:'',
      capability:'',
    }
    // this.handleChanges=this.handleChanges.bind(this);
  }



  handleDomainChanges(e){
    this.setState({
      domain:e,
      capability:'0'
    })
    
  }

  handleCommandChanges(e){
    console.log(e);
    this.setState({
      command:e
    })
  }

  handleSelectChanges(e){
    console.log(this.state.command);
    this.setState({
      capability:e.target.value,
      command : null
    })
    console.log(this.state.command+"after");
  }
  refreshing(e){

  }
  


  render() {
    return (
      <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <br />
        <Selector 
          handleDomainChanges={this.handleDomainChanges.bind(this)}
       />
       <br/>
       </Col>
       </Row>
       <Row>
       <Col sm={12}>
        <h4>පහත මෙනුවෙන් විධානයක් තෝරන්න</h4>
      <Dropdown
        handleSelectChanges={this.handleSelectChanges.bind(this)}
        selectedCommand={this.state.capability}
        getDomain = {this.state.domain}
      />
      </Col>
      <br />
      </Row>
      
      <Row>
      <Col sm={6}>
      <h4> Pick a command to record  </h4>
      <br/>
    <TextArea 
      capability={this.state.capability}
      handleCommandChanges={this.handleCommandChanges.bind(this)}
      domain = {this.state.domain}
      command ={this.state.command}
    />
    </Col>
    <Col sm={6}>
    <h4> Record  </h4>
      <br/>
      <Demo 
        domain ={this.state.domain}
        capability ={this.state.capability}
        command = {this.state.command}
      />
      </Col>
      </Row>
     </Container>
      </div>
       
    )}
}


export default App;
