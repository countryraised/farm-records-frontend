import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


function Homepage(props) {
    
    return(
        <div>
            
            <h3>Log In</h3>
            <form onSubmit={props.login} >
                <div>
                    <input
                        name='username'
                        type='text'
                        placeholder='username'
                        value={props.username}
                        onChange={props.loginOnChange}
                    />
                    <input
                        name='password'
                        type='password'
                        placeholder='password'
                        value={props.password}
                        onChange={props.loginOnChange}
                    />
                    <input type='submit' value='Login' />

                </div>
            </form><br/>

                <h4>OR</h4>
            
            <h3>Sign Up</h3>
            <br/>
            <form onSubmit={props.signup}>
                <input
                    name='name'
                    type='text'
                    placeholder='name'
                    value={props.name}
                    onChange={props.loginOnChange}
                />
                <input
                    name='username'
                    type='text'
                    placeholder='username'
                    value={props.username}
                    onChange={props.loginOnChange}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='password'
                    value={props.password}
                    onChange={props.loginOnChange} 
                />
                <input type='submit' value='SignUp' />
                {/* <Link to={`/useerpage`} ><input type='submit' value='SignUp' /></Link> */}
            </form><br/><br/>
            
        </div>
    )
}

export default Homepage;