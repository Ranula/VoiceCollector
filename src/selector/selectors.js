import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
import React, { Component } from 'react';

require ('./selectors.scss');

class Selector extends Component {
      componentDidMount() {
        this.props.onRef(this)
      }
      componentWillUnmount() {
        this.props.onRef(null)
      }
      method() {
        console.log('do stuff')
      }

    onChange(value) {
        console.log(value);
        // RadioGroup.value=""
    }
    render() {
      return (
        <div className="selector" >

        <h4>Vertical Radio Buttons</h4>
        <RadioGroup onChange={ this.onChange }>
          <ReversedRadioButton value="apple">
            Apple
          </ReversedRadioButton>
          <ReversedRadioButton value="orange">
            Orange
          </ReversedRadioButton>
          <ReversedRadioButton value="melon">
            Melon
          </ReversedRadioButton>
        </RadioGroup>

        </div> 
      );
    }
  }

  export default Selector;