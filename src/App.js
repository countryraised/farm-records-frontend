import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Homepage from './components/Homepage';
import { Route, Link, Redirect } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      userProfile:{},
      username: '',
      password: '',
    };
  }

  componentDidMount = () => {
    this.getRecords();
    // this.getUser();
  };
  getRecords = async () => {
    const response = await axios.get('http://localhost:3001/farmrecord/all');
    // console.log(response);
    this.setState({
      records: response.data,
    });
    // console.log(this.state.records);
  };
  // getUser = async () => {
  //   const response = await axios.get('http://localhost:3001/user/profile/1');
  //   console.log(response);
  //   this.setState({
  //     userProfile: response.data,
  //   });
  //   console.log(this.state.userProfile);
  // };

  loginOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = async (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("i am running")
    const response = await axios.post('http://localhost:3001/auth/login', data);
    console.log(response);
    this.setState({
      userProfile: response.data,
    });
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

          <Route exact path="/" render = {() => (
              <Homepage 
                login={this.state.login}
                loginOnChange={this.state.loginOnChange}/>
          )} 
          />
          
          

          <div>{records}</div>
          

        </div>
      );    
  }
}


export default App;
