import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

// require ('./selectors.scss');    


class Dropdown extends Component {

    render() {
    //   var names = ['ශේෂය කොපමනද?', 'අවසන් ගනුදෙනු පහ පෙන්වන්න', 'Thruster'];
    //   var options=[];
    //   var namesList = names.map(function(name,index){
    //     options.push(<option value={index} key={index}>
    //                            {name}
    //                  </option>);

    //  console.log(options);
    //   })
      return (
        <div className="dropdown" >
        <select 
          onLoad={this.props.loadDropdownItems}
          onChange={ this.props.handleSelectChanges} 
          /* value={this.props.selectValue} */
        >
        {this.props.options}
        
        </select>

        </div> 
      );
    }
  }

  export default Dropdown;
//   {this.props.options}