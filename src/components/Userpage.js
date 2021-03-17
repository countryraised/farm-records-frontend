import React from 'react';
import {  Link } from 'react-router-dom';

function Userpage(props) {
    

    const records = props.records.map((record) => {
        return (
            <div key={record.id}>
            <h4>{record.fieldName}</h4>            
            </div>
        );
    });

    const foundFields = (props.records.filter(field=> {
        return field.userId === props.userId 
        }) 
    );
    const fields = [...new Set(records.map(rec => rec.category))];

          
    console.log(fields)
    console.log(props.userId) //integer
    console.log(foundFields) //array of objects.
    console.log(props.userName)

    return(
        <div>
            {/* <p>user page</p> */}
            <h2>Welcome {props.userName}</h2>
            <button onclick={props.logout}>Log out</button><br/>
            {/* user's field list- be able to select field to see details*/}
            {/* <div>{records}</div>
            <p>split</p> */}
            <div>{foundFields.map(field=> <div><Link to={`/fieldpage`} ><p key={field.id}>{field.fieldName}</p></Link></div>)}</div>
            
            {/* add field */}
            <h4>Create a new field</h4>
            <form onSubmit={props.createField}>
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