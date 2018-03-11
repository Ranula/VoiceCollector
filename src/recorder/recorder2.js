import React, {Component}          from 'react';
import { render }                  from 'react-dom';
import { FloatingActionButton, MuiThemeProvider }         from 'material-ui';
// import injectTapEventPlugin        from 'react-tap-event-plugin';
import MicrophoneOn                from 'material-ui/svg-icons/av/mic';
import MicrophoneOff               from 'material-ui/svg-icons/av/stop';
import { ReactMic } from 'react-mic';
import axios, {post} from 'axios';

// import toBuffer  from 'blob-to-buffer';

// import sampleAudio                 from './sample_audio.webm';
// import ReactGA                     from 'react-ga';

require ('./styles.scss');

// injectTapEventPlugin();

// ReactGA.initialize('UA-98862819-1');

export default class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false
    }
    // this.post=this.post.bind(this);
    // this.fileUpload=this.bind(this);
  }

//   componentDidMount() {
//     ReactGA.pageview(window.location.pathname);
//   }

//  fileUpload(file){
//   // const url = 'http://example.com/file-upload';
//   const formData = new FormData();
//   formData.append('file',file)
//   const config = {
//       headers: {
//           'content-type': 'multipart/form-data'
//       }
//   }
//     return  post('/api/file', formData,config)
//   }
  getdomain = (domain) =>{
    if (domain ==='Bank'){
      return [7,6,7,4,6,3];
    }else{
      return [3,3,3,6,3];
    }
  }

  validator =(domain) =>{
    let list = this.getdomain(domain);
    if (list[this.props.capability] < this.props.command){
      return false;
    }else{
      return true;
    }
  }
  startRecording = () => { 
    if(this.props.command ===''){
        alert("Select u dumbo")
    }else if(!this.validator(this.props.domain))
    {
      alert("Select u dumbo")
    }else{
    this.setState({
      record: true,
      isRecording: true
    });}
  }

  stopRecording= () => {
    this.setState({
      record: false,
      isRecording: false
    });
  }

  onStart=() => {
    console.log('You can tap into the onStart callback');
  }

  onStop= (blobObject) => {
    this.setState({
      blobURL : blobObject.blobURL,
      // blobObject.
      data : blobObject.blob,
    });
    // blobObject.data

    // toBuffer(blobObject, function (err, buffer) {
    //   if (err) throw err
     
    //   buffer[0] // => 1
    //   buffer.readUInt8(1) // => 2
    // })
    // console.log(this.state.blobURL+ " this is the URL");
    // console.log("data "+ this.state.data);
    // var buffer = new Buffer(this.state.blobURL, "binary");
    // fileUpload(buffer);
    const formData = new FormData();
    // formData.append('file',buffer);

    formData.append('file',this.state.data);
    formData.append('command',this.props.command);
    formData.append('domain',this.props.domain);
    formData.append('capability',this.props.capability); 
    // form
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
        // json:true
    };
    post('/api/file', formData,config);
    alert("Record Uploaded!");
    // console.log(blobObject+ " this is the URL");
  }

  render() {
    const { isRecording } = this.state;

    return(
      <MuiThemeProvider>
        <div>
          <br></br>
          <ReactMic
            className="oscilloscope"
            record={this.state.record}
            backgroundColor="#000000"
            visualSetting="sinewave"
            audioBitsPerSecond= {128000}
            onStop={this.onStop}
            onStart={this.onStart}
            strokeColor="#ffffff" />
          <div>
            <audio ref="audioSource" controls="controls" src={this.state.blobURL}></audio>
          </div>
          <br />
          <br />
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={isRecording}
            onClick={this.startRecording}>
            <MicrophoneOn />
          </FloatingActionButton>
          <FloatingActionButton
            className="btn"
            secondary={true}
            disabled={!isRecording}
            onClick={this.stopRecording}>
            <MicrophoneOff />
          </FloatingActionButton>
          <br />
          <br />
          <br />
         </div>
    </MuiThemeProvider>
    );
  }
}
// export default Demo;

// render(<Demo/>, document.querySelector('#demo'))