import React from 'react';
import {  Link } from 'react-router-dom';

function Userpage(props) {    

    const foundFields = (props.records.filter(field=> {
        return field.userId === props.userId 
        }) 
    );
    const uniqueFields = [...new Set(foundFields.map(rec => rec.fieldName))];

    
    console.log(uniqueFields)
    // console.log(props.userId) //integer
    // console.log(foundFields) //array of objects.
    // console.log(props.userName)

    return(
        <div>            
            <h2>Welcome {props.userName}</h2>
            <button onClick={props.logout}>Log out</button><br/>
            
            <div>{uniqueFields.map(field=> <div><Link to={`/fieldpage`} ><p key={field}>{field}</p></Link></div>)}</div>            
            
            <h4>Create a new field</h4>
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
                <input type='submit' value='Create' />

            </form>            

        </div>
    )
}

export default Userpage;