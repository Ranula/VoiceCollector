import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';
// import Radio from './radioButton/radioButton.js';

// require ('./selectors.scss');    


class Dropdown extends Component {

    render() {
      var Options=[];
      if (this.props.getDomain === 'Bank'){
      var bankCommands = ['Requesting account balance', 'Requesting to deposit money', 'Requesting to withdraw money'
      ,'Bill payment','Money transfer from account to account','Credit card payments.'];
      var bankCommandsList = bankCommands.map(function(name,index){
        Options.push(<option value={index} key={index} >
                               {name}
                     </option>);
      })
    }else if (this.props.getDomain === 'Elderly'){
        var elderlyCommands = ['Turning a switch on.', 'Turning a switch off.','Requesting help'
        ,'Calling an ambulance','Time'];
        var elderlyCommandsList = elderlyCommands.map(function(name,index){
          Options.push(<option value={index} key={index} >
                                 {name}
                       </option>);
        })
    }else{
        var commands = ['Select a Catagory'];
        var bankCommandsList = commands.map(function(name,index){
          Options.push(<option value={index} key={index} >
                                 {name}
                       </option>);
        })
    }
    var slct ={
        background: 'transparent',
        width: 268,
        padding: 5,
        border: '1px solid black',
        height: 34,
      
    }
      return (
        <div className="dropdown" >
        <select style={slct}
          onChange={ this.props.handleSelectChanges} 
          value={this.props.selectValue} 
        >
        {Options}
        </select>
        
        </div> 
      );
    }
  }

  export default Dropdown;