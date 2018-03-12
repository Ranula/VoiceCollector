import React, { Component } from 'react';
import ReactScrollableList from 'react-scrollable-list';
import { ReversedRadioButton ,RadioGroup, RadioButton } from 'react-radio-buttons';
// import Textarea from "react-textarea-autosize";


class TextArea extends Component {

    render() {
        let listItems = []
        let commands = []
        var radioButtons=[];
        switch(this.props.domain){
            case "Bank":
                switch(this.props.capability) {
                    case "0":
                        commands = ['මගේ ගිණුමේ ශේෂය කීයද',
                        'ගිණුමේ ශේෂය කීයද',
                        'ශේෂය කීයද',
                        'මගේ ගිණුමේ ඉතිරිය කීයද',
                        'ගිණුමේ ඉතිරිය කීයද',
                        'ඉතිරිය කීයද',
                        'මට මගේ ගිණුමේ ශේෂය දැනගන්න පුලුව්න්ද',
                        'මට මගේ ගිණුමේ ඉතිරිය දැනගන්න පුලුව්න්ද'
                        ];
                        break;
                    case "1":
                        commands = ['මට සල්ලි තැන්පත් කරන්න ඕනි',
                        'මට මුදල් තැන්පත් කරන්න ඕනි',
                        'සල්ලි තැන්පත් කරන්න ඕනි',
                        'මුදල් තැන්පත් කරන්න ඕනි',
                        'සල්ලි දාන්න ඕනි',
                        'සල්ලි තැන්පත් කිරීමක්',
                        'මුදල් තැන්පත් කිරීමක්'
                        ];
                        break;
                    case "2":
                        commands = ['මට සල්ලි ගන්න ඕනි',
                        'සල්ලි ගන්න ඕනි',
                        'මට මුදල් ගන්න ඕනි',
                        'මුදල් ගන්න ඕනි',
                        'මට මුදල් ගන්න පුලුවන්ද',
                        'මට සල්ලි ගන්න පුලුවන්ද',
                        'මුදල් ගැනීමක්',
                        'සල්ලි ගැනීමක්'
                        ];
                        break;
                    case "3":
                        commands = ['බිල් එකක් ගෙවන්න ඕනි',
                        'මට බිල්පතක් ගෙවන්න ඕනි',
                        'බිල්පතක් ගෙවන්න ඕනි',
                        'බිල් ගෙවීමක්',
                        'බිලක් ගෙවන්න පුලුවන්ද'
                        ];
                        break;
                    case "4":
                        commands = ['තව ගිණුමකට මුදල් මාරු කරන්න ඕනි',
                        'තව ගිණුමකට මුදල් මාරු කරන්න පුලුවන්ද',
                        'වෙනත් ගිණුමකට මුදල් මාරු කිරීමක්',
                        'වෙනත් ගිණුමකට සල්ලි මාරු කිරීමක්',
                        'තව ගිණුමකට සල්ලි මාරු කරන්න ඕනි',
                        'තව ගිණුමකට සල්ලි මාරු කරන්න පුලුවන්ද',
                        'වෙනත් ගිණුමකට සල්ලි මාරු කිරීමක්'
                        ];
                        break;
                    case "5":
                        commands = ['හර පත් ගෙවීමක් කරන්න ඕනි',
                        'මට හර පත් ගෙවීමක් කරන්න ඕනි',
                        'ක්‍රෙඩිට් කාර්ඩ් එකට සල්ලි ගෙවන්න ඕනි',
                        'මට ක්‍රෙඩිට් කාර්ඩ් එකට සල්ලි ගෙවන්න ඕනි'
                        ];
                        break;
                    }
                break;
            case "Elderly":
                switch(this.props.capability) {
                    case "0":
                        commands = ['ලයිට් එක දාන්න',
                        'මට එලිය ඕනි',
                        'අදුරුයි',
                        'ලයිට් එක ON කරන්න'
                        ];
                        break;
                    case "1":
                        commands = ['ලයිට් එක නිවන්න',
                        'මට එලිය එපා',
                        'එලිය වැඩියි',
                        'ලයිට් එක OFF කරන්න'
                        ];
                        break;
                    case "2":
                        commands = ['කවුරුත් නැද්ද',
                        'කාටවත් ඇහෙන්නෙ නැද්ද',
                        'මට අමාරුයි කාටවත් ඇහෙන්නෙ නැද්ද',
                        'මට අමාරුයි කවුරුත් නැද්ද'
                        ];
                        break;
                    case "3":
                        commands = ['119 ට ඇමතුමක් ගන්න',
                        '119 ට call එකක් ගන්න',
                        'මට අමාරුයි කාටවත් ඇහෙන්නෙ නැද්ද',
                        'මට අමාරුයි කවුරුත් නැද්ද',
                        'ඇම්බියුලන්ස් එකකට කතා කරන්න',
                        'ගිලන් රථයකට කතා කරන්න',
                        'ගිලන් රථයකට call කරන්න'
                        ];
                        break;
                    case "4":
                        commands = ['දැන් වේලාව කීයද',
                        'මට දැන් වෙලාව කියන්න',
                        'දැන් වෙලාව කීය විතර වෙලා ඇතිද',
                        'වේලාව කීයද'
                        ];
                        break;
                    }
                    
                break;

        }
        
 

        var commandsList = commands.map(function(name,index){
            radioButtons.push(
            <ReversedRadioButton
            value={index.toString()} key={index}
            pointColor={'black'} 
            rootColor={'gray'}>
                    {name}
            </ReversedRadioButton>);
            });

        
      var divStyle ={
        overflow: 'auto',
        height: 300,
        width: 'auto',
        display: 'block',
        margin: 'auto',
        } ;

      return (
        
        <div style={divStyle }>
        <RadioGroup 
          onChange={ this.props.handleCommandChanges}
          value = {this.props.command}
        >
        {radioButtons}
        </RadioGroup>
        </div>
      );
    }
  }

  export default TextArea;