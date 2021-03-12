import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],

    };
  }

  componentDidMount = () => {
    this.getRecords();
  };
  getRecords = async () => {
    const response = await axios.get('http://localhost:3001/farmrecord/all');
    console.log(response);
    this.setState({
      records: response.data,
    });
    console.log(this.state.records);
  };

  render () {  
    const records = this.state.records.map((record) => {
      return (
        <div>
          <h4>{record.fieldName}</h4>          
          <p>
            {record.dateComplete}<br/>
            {record.details}
          </p>
        </div>
      );
    }); 
      return (
        <div className="App">
          <h3>App.js page</h3> 

          <div>{records}</div>
          

        </div>
      );    
  }
}


export default App;
