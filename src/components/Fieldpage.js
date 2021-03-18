import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


function Fieldpage(props) {
    
    const foundFields = (props.records.filter(field=> {
        return field.userId === props.userId         
        })
    );   
    foundFields.sort((a, b) => (b.id - a.id))

    return(
        <div>
            <Link to={`/userpage`}><button class="btn-lg">Return to Userpage</button></Link>
            
            <h1>Your completed field operations</h1>
            
            <div >
                {foundFields.map(field => 
                <div key={field.id}>
                    <h2>{field.fieldName}</h2>
                    <div>{field.dateComplete}</div>
                    <div>{field.operationType}</div>
                    <div>{field.details}</div>
                </div>    
                )}
            </div>
        </div>
    )
}

export default Fieldpage;