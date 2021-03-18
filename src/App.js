import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Homepage from './components/Homepage';
import { Route, Link, withRouter } from 'react-router-dom';
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
      fieldName:'',
      dateComplete:'',
      operationType:'',
      details:'',
      apiDataLoaded: false,
      
    };
  }
  

  componentDidMount = () => {
    this.getRecords();
  };
  getRecords = async () => {
    const response = await axios.get('http://localhost:3001/farmrecord/all' || 'https://farm-record-app.herokuapp.com/farmrecord/all');    
    this.setState({
      records: response.data,
      apiDataLoaded: true
    });
  };
  

  getUser = async () => {
    console.log("get users")
    const response = await axios.get(`http://localhost:3001/user/profile/${this.state.userId}` || `https://farm-record-app.herokuapp.com/user/profile/${this.state.userId}`);
    this.setState({
      userProfile: response.data,
    });
    console.log(this.state.userProfile);
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
    const response = await axios.post('http://localhost:3001/user/login', data  || 'https://farm-record-app.herokuapp.com/user/login');
    this.setState({
      userId: response.data.id, 
      loggedIn:true,
      userProfile: response.data,
    })     
    this.props.history.push("/userpage")  
  };

  signup = async (e) => {
    e.preventDefault();
    const data = {       
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };    
    const response = await axios.post('http://localhost:3001/user/signup', data || 'https://farm-record-app.herokuapp.com/user/signup');    
    this.setState({
      userId: response.data.id, 
      loggedIn:true,
      userProfile: response.data,
    })    
    this.props.history.push("/userpage")    
  };

  createField = async (e) => {
    e.preventDefault();
    const data = {
      userId: this.state.userId,
      fieldName: this.state.fieldName,
      dateComplete: this.state.dateComplete,
      operationType: this.state.operationType,
      details: this.state.details,
    };
    const response = await axios.post('http://localhost:3001/farmrecord/createfield', data  || 'https://farm-record-app.herokuapp.com/farmrecord/createfield');
    this.props.history.push("/fieldpage")
  }


  logout =(e)=>{
    e.preventDefault();
    this.setState({
      userProfile:{},
      name:'',
      username: '',
      password: '',
      allUsers:[],
      loggedIn: false,
      userId:null,
      fieldName:'',
      dateComplete:'',
      operationType:'',
      details:'',
    })
    this.props.history.push("/")
  }


  render () {  
    
      return (
        <div className="App">
          <header>
            
            <Link to={`/`}><h1>Farm Records App</h1></Link>
          </header>          

          <Route exact path="/" render = {() => (
              <Homepage 
                login={this.login}
                loginOnChange={this.loginOnChange}
                signup={this.signup}
                allUsers={this.state.allUsers}
                />
          )}/>           

          <Route path="/userpage" render = {(routerProps) => (
              <Userpage
                records={this.state.records}
                userName={this.state.userProfile.name}
                userId={this.state.userId}
                fieldName={this.state.fieldName}
                dateComplete={this.state.dateComplete}
                operationType={this.state.operationType}
                details={this.state.details}
                loginOnChange={this.loginOnChange}
                createField={this.createField}
                logout={this.logout}
                {...routerProps} 
                />
          )}/>

          <Route path="/fieldpage" render = {(routerProps) => (
              <Fieldpage
                records={this.state.records}
                userId={this.state.userId} 
                {...routerProps} 
                />
          )}/>               

        </div>
      );    
  }
}


export default withRouter(App);
