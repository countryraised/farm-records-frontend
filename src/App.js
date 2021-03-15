import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Homepage from './components/Homepage';
import { Route, Link, Redirect } from 'react-router-dom';
import Fieldpage from './components/Fieldpage';
import Userpage from './components/Userpage';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      userProfile:{},
      name:'',
      username: '',
      password: '',
      allUsers:[],
      loggedIn: false,
      userId:null,
      
    };
  }

  componentDidMount = () => {
    this.getRecords();
    // this.getUsers();
  };
  getRecords = async () => {
    const response = await axios.get('http://localhost:3001/farmrecord/all');
    // console.log(response);
    this.setState({
      records: response.data,
    });
    // console.log(this.state.records);
  };
  getUsers = async () => {
    console.log("get users")
    const response = await axios.get('http://localhost:3001/user/all');
    console.log(response);
    this.setState({
      allUsers: response.data,
    });
    console.log(this.state.allUsers);
  };

  getUser = async () => {
    console.log("get users")
    const response = await axios.get(`http://localhost:3001/user/profile/${this.state.userId}`);
    console.log(response);
    // this.setState({
    //   userProfile: response.data,
    // });
    // console.log(this.state.userProfile);
  };

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
    console.log("logged in"); 
    console.log(response.data)
    this.setState({
      userId: response.data.id, 
      loggedIn:true,
      userProfile: response.data,
    })
    this.getUser();    
  };

  signup = async (e) => {
    e.preventDefault();
    console.log("signup")
    const data = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };
    console.log("i am running")
    const response = await axios.post('http://localhost:3001/auth/signup', data);
    console.log(response);    
    console.log("signed up");
  };


  render () {  
    // const records = this.state.records.map((record) => {
    //   return (
    //     <div>
    //       <h4>{record.fieldName}</h4>          
    //       <p>
    //         {record.dateComplete}<br/>
    //         {record.details}
    //       </p>
    //     </div>
    //   );
    // }); 
      return (
        <div className="App">
          {/* <h3>App.js page</h3>  */}

          <Route exact path="/" render = {() => (
              <Homepage 
                login={this.login}
                loginOnChange={this.loginOnChange}
                signup={this.signup}
                allUsers={this.state.allUsers}
                />
          )} 
          />
          

          <Route path="/fieldpage" render = {(routerProps) => (
              <Fieldpage
                records={this.state.records}
                userProfile={this.state.userProfile} 
                {...routerProps} 
                />
          )} 
          />

          {/* <Route path="/userpage" render = {(routerProps) => (
              <Userpage
                records={this.state.records}
                userProfile={this.state.userProfile} 
                {...routerProps} 
                />
          )} */}

          {/* <Fieldpage
            records={this.state.records}/> */}

          {/* <div>{records}</div> */}
          

        </div>
      );    
  }
}


export default App;
