import React from 'react';
import {  Link } from 'react-router-dom';

function Userpage(props) {    

    const foundFields = (props.records.filter(field=> {
        return field.userId === props.userId 
        }) 
    );
    const uniqueFields = [...new Set(foundFields.map(rec => rec.fieldName))];   
    
    return(
        <div>            
            <h2>Welcome {props.userName}</h2>
            <button onClick={props.logout} class="btn btn-warning">Log out</button><br/>
        

            <div>
                <h5>Your existing fields</h5>
                <div>{uniqueFields.map(field=> <div><h6>{field}</h6></div>)}</div>            
            </div>
            <div><Link to='/fieldpage'><p>past field operations.</p> </Link></div>
            <h4>Create a new field event.</h4>
            <form onSubmit={props.createField} >
                <input
                    name='fieldName'
                    type='text'
                    placeholder='field name'
                    value={props.fieldName}
                    onChange={props.loginOnChange}
                /><br/>
                <input
                    name='dateComplete'
                    type='text'
                    placeholder='date complete'
                    value={props.dateComplete}
                    onChange={props.loginOnChange}
                /><br/>
                <input 
                    name='operationType'
                    type='text'
                    placeholder='operation type'
                    value={props.operationType}
                    onChange={props.loginOnChange}
                /><br/>
                <input 
                    name='details'
                    type='text'
                    placeholder='details'
                    value={props.details}
                    onChange={props.loginOnChange}
                /><br/>
                <input 
                    name='userId'
                    type='hidden'              
                    value={props.userId}
                    onChange={props.loginOnChange}
                />
                <input type='submit' value='Create' class="btn btn-success" />

            </form>    <br/>                    

        </div>
    )
}

export default Userpage;