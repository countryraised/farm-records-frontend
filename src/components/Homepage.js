import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

function Homepage(props) {

    // const userProfile = props.allUsers.map((user) => {
    //     return (
    //       <div key={user.id}>
    //         <h4>{user.name}</h4>          
    //         <p>
    //           {user.username}<br/>
    //           {user.password}
    //         </p>
    //       </div>
    //     );
    // });


    return(
        <div>
            <h1>Farm Records App</h1>
            {/* user login */}
            <h3>Log In</h3>
            <form onSubmit={props.login}>
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
            </form><br/>
                <h4>OR</h4>
            {/* user sign up */}
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
            </form>

            {/* <div>{userProfile}</div>  */}
        </div>
    )
}

export default Homepage;