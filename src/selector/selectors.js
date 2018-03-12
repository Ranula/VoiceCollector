import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

// import Radio from './radioButton/radioButton.js';

require ('./selectors.scss');


class Selector extends Component {

    render() {
      var names = ['Elderly', 'Bank'];
      var radioButtons=[];
      var namesList = names.map(function(name,index){
      radioButtons.push(
      <ReversedRadioButton
      value={name} key={index}
      pointColor={'black'} 
      rootColor={'gray'}
      padding={10}
      >
              {name}
      </ReversedRadioButton>);
      });

      return (
        <div className="selector" >

        <h4>Select a Doamin</h4>
        <RadioGroup 
          onChange={ this.props.handleDomainChanges} 
          horizontal
        >
        {radioButtons}
        </RadioGroup>
        </div>
      );
    }
  }

  export default Selector;