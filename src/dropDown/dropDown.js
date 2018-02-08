import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

// require ('./selectors.scss');    


class Dropdown extends Component {

    render() {
      var names = ['ශේෂය කොපමනද?', 'අවසන් ගනුදෙනු පහ පෙන්වන්න', 'Thruster'];
      var options=[];
      var namesList = names.map(function(name,index){
        options.push(<option value={index} key={index}>
                               {name}
                     </option>);
      })
      return (
        <div className="dropdown" >
        <select 
          onChange={ this.props.handleSelectChanges} 
          /* value={this.props.selectValue} */
        >
        {options}
        </select>

        </div> 
      );
    }
  }

  export default Dropdown;