import React from 'react';

function Homepage(props) {
    return(
        <div>
            <h1>Farm Records App</h1>
            {/* user login */}
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
            </form>

            {/* user sign up */}


        </div>
    )
}

export default Homepage;