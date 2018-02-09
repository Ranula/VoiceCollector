import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './recorder/recorder2.js';
import Selector from './selector/selectors.js';
import axios, {get} from 'axios';
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
      subCommand:'',
      radioValue:"",
      selectValue :"",
      selectValueAray:"",
      radioButtonArray:"",
      buttonList:""

    }
    this.loadDropdownItems=this.loadDropdownItems.bind(this);
    this.loadRadioItems=this.loadRadioItems.bind(this);
    this.render=this.render.bind(this);
    // this.loadFromServer=this.loadFromServer.bind(this);

  }

  componentWillMount(){

    // await  this.loadFromServer();
    this.loadDropdownItems();
    this.loadRadioItems();
    
  }
  loadFromServer(){
    //  var test= async function(){
      // async{
        axios("/api/getRadioList?id=1").then(function (response) {
          // console.log(response.data);
          // var buttons=response.data.split(" ");
          var buttons=response.data;
          console.log(buttons);
          // return buttons;
          this.setState({buttonList:buttons});
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
      // }
        // }
        // var buttons=test(); 
  }
  loadRadioItems(){
    var buttons = ['Jake', 'Jon', 'Thruster'];
    var radioButtons=[];
    var buttonList = buttons.map(function(button,index){
    radioButtons.push(<ReversedRadioButton value={button} key={index}>
                              {button}
                    </ReversedRadioButton>);
    })
    this.setState({radioButtonArray: radioButtons});
  }

  loadDropdownItems(){
    var names = ['ශේෂය කොපමනද?', 'අවසන් ගනුදෙනු පහ පෙන්වන්න', 'Thruster'];
    // var names= this.state.buttonList;
    var options=[];
    var namesList = names.map(function(name,index){
      options.push(<option value={index} key={index}>
                             {name}
                   </option>);
    })
    this.setState({selectValueAray: options});

  }

  handleRadioChanges(e){
    // this.setState({radioValue: e.target.radioValue});
    console.log("inside the handleChanges");
    this.loadDropdownItems;
    console.log(e);
  }
  handleSelectChanges(e){
    console.log("inside the handle SELECT changes.");
    console.log(this.state.buttonList);
    console.log(e.target.value);
    const radioList=[
      ["1","2","3"],["4","5","6"],["7","8","9"],["10","11","12"]
    ];
    var buttons = [];
    var test=""
    // get radio related to the selected dropdown
    // var get= await get('/api/getRadioList', {
    //   params: {
    //     id:1
    //   }
    // })
    // .then(function (response) {
    //   console.log("got a response")
    //   console.log(test);
    //   console.log(response.data);
    //    buttons=response.data.split(" ");
    //   //  buttons=response.data[0];
    //    console.log(buttons);
    //    return buttons;

    // })
    // .catch(function (error) {
    //   console.log("there is an error");
    //   console.log(error);
    //   var buttons = []
    //   return buttons;
    //  }
                        // var test= async function(){
                        //   axios("/api/getRadioList?id=1").then(function (response) {
                        //     // console.log(response.data);
                        //     var buttons=response.data.split(" ");
                        //     console.log(buttons);
                        //     return buttons;
                        //   })
                        //   .catch(function (error) {
                        //     console.log(error);
                        //   });
                        // }
                        // var buttons=test(); 
    // console.log(result + "dfdfd dfdf");
    // buttons=result.data.split(" ");
    // console.log(buttons);
    buttons=radioList[e.target.value];
    var radioButtons=[];
    var buttonList = buttons.map(function(button,index){
    radioButtons.push(<ReversedRadioButton value={button} key={index}>
                             {button}
                   </ReversedRadioButton>);
    })
    this.setState({radioButtonArray: radioButtons});
  }    
  render() {

      //return function
     return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <br />
        <p>පහත මෙනුවෙන් විධානයක් තෝරන්න</p>
        <br />
      <Dropdown
        onLoad={this.loadDropdownItems.bind(this)}
        handleSelectChanges={this.handleSelectChanges.bind(this)}
        selectValue={this.state.selectValue}
        options={this.state.selectValueAray}

      />
      <Demo />
      <Selector 
          handleRadioChanges={this.handleRadioChanges.bind(this)}
          radioValue={this.state.radioValue}
          radioButtons={this.state.radioButtonArray}
       />
     

      </div>
       
    )}
}


export default App;
