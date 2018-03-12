import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';
// import Radio from './radioButton/radioButton.js';

// require ('./selectors.scss');    


class Dropdown extends Component {

    render() {
      var Options=[];
      if (this.props.getDomain === 'Bank'){
      var bankCommands = ['ගිණුමේ ශේෂය විමසීම', 'මුදල් තැම්පත් කිරීමට විමසීම', 'මුදල් ලබා ගැනීමට කිරීමට විමසීම'
      ,'බිල් ගෙවීම්','ගිණුම් අතර මුදල් හුවමාරු කිරීම','ණයපත් ගෙවීම්'];
      var bankCommandsList = bankCommands.map(function(name,index){
        Options.push(<option value={index} key={index} >
                               {name}
                     </option>);
      })
    }else if (this.props.getDomain === 'Elderly'){
        var elderlyCommands = ['බල්බය දැල්වීම.', 'බල්බය නිවීම.','උදව් ඉල්ලීම'
        ,'ගිලන් රථයකට කතා කිරීම','වෙලාව විමසීම'];
        var elderlyCommandsList = elderlyCommands.map(function(name,index){
          Options.push(<option value={index} key={index} >
                                 {name}
                       </option>);
        })
    }else{
        var commands = ['ක්ෂේත්‍රයක් තෝරන්න'];
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