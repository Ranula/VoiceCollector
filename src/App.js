import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js';
import Selector from './selector/selectors.js';
import TextArea from './textArea/textArea.js';
import {Container,Row,Col} from 'react-grid-system';
import { Provider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import Popup from 'react-popup';
// import Dropdown from 'react-dropdown'

// import ReactDOM from 'react-dom';


// import './dropdown.scss';

//drop down
import Dropdown from './dropDown/dropDown.js';


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
      command:'0',
      domain:'Bank',
      capability:'0'
      // namesListSinhala:['වැඩිහිටි සුරැකුම් ක්ෂේත්‍රය','බැංකු ක්ෂේත්‍රය']
    }
    // this.handleChanges=this.handleChanges.bind(this);
  }


  ComponentDidMount(){
    
  }
  handleDomainChanges(e){
    Popup.alert('I am alert, nice to meet you');
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
      // command : null
    })
    console.log(this.state.command+"after");
  }
  refreshing(e){

  }
  


  render() {
    var options = {
      position: 'top center',
      timeout: 5000,
      offset: '10px',
      transition: 'fade'
    }

    return (
      <Provider template={AlertTemplate} {...options}>
      <div className="App">
      <Container>
        <Row>
          <Col sm={12}>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <br />
        {/* <Selector 
          handleDomainChanges={this.handleDomainChanges.bind(this)}
          namesListSinhala={this.state.namesListSinhala}
       /> */}
       <br/>
       </Col>
       </Row>
       <Row>
       <Col sm={12}>
        <h4>පහත මෙනුවෙන් විධානයක් තෝරන්න</h4>
        {/* <p>ඔබ තෝරාගත් ක්ෂේත්‍රය (domain) යටතේ හඬ පටිගත කිරීමට ඇති විධාන(commands) පහත මෙනුවේ (drop-down) දැක්වේ. ඉන් එකක් තෝරන්න. (ඔබට විධාන කිහිපයක්  සඳහා හඬ පටිගත කල හැකිනම් එය මහත් උපකාරයකි.) </p> */}
        <p>පටිගත කිරීමට ඇති විධාන(commands) පහත මෙනුවේ (drop-down) දැක්වේ. ඉන් එකක් තෝරන්න. (ඔබට විධාන කිහිපයක්  සඳහා හඬ පටිගත කල හැකිනම් එය මහත් උපකාරයකි.) </p>

      <Dropdown
        handleSelectChanges={this.handleSelectChanges.bind(this)}
        selectedCommand={this.state.capability}
        getDomain = {this.state.domain}
      />
      </Col>
      <br />
      </Row>
      
      <Row>
      <Col sm={5}>
      <h4> හඬ පටිගත කිරීම සඳහා විධානයක් තෝරන්න </h4>
      <p>ඔබ තෝරාගත් විධානයහි (command) ස්වරූප(forms) කිහිපයක් පහත දැක්වේ. ඉන් එකක් තෝරන්න. (ඔබට ස්වරූප කිහිපයක්  සඳහා හඬ පටිගත කල හැකිනම් එය මහත් උපකාරයකි.)</p>
      <br/>
    <TextArea 
      capability={this.state.capability}
      handleCommandChanges={this.handleCommandChanges.bind(this)}
      domain = {this.state.domain}
      command ={this.state.command}
    />
    </Col>
    <Col sm={2}>
    </Col>
    <Col sm={5}>
    <h4>පටිගත කරන්න</h4>
    <p>පටිගත කිරීමට 'මයික්‍රොෆෝන්' (microphone) සලකුන ඔබන්න. පටිගත කිරීමෙන් පසු 'අවසන්' (stop) සලකුන ඔබන්න. ඔබගේ හඬ එවිට සටහන් වෙනුඇත.</p>
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
      </Provider>
       
    )}
}


export default App;
