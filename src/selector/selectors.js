import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

require ('./selectors.scss');


class Selector extends Component {

    render() {
      var names = ['Elderly', 'Bank'];
      var radioButtons=[];
      var namesList = names.map(function(name,index){
      radioButtons.push(<ReversedRadioButton value={name} key={index}>
                               {name}
                     </ReversedRadioButton>);
      })
      return (
        <div className="selector" >

        <h4>Select a Catagory</h4>
        <RadioGroup 
          onChange={ this.props.handleRadioChanges} 
          value={this.props.radioValue}
        >
        {radioButtons}
        </RadioGroup>

        </div> 
      );
    }
  }

  export default Selector;