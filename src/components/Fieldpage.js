import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


function Fieldpage(props) {
    
    const foundFields = (props.records.filter(field=> {
        return field.userId === props.userId 
        && field.fieldName == props.fieldName
        })
    );   

    // console.log(props.userId) //integer
    // console.log(foundField) //array of objects.    

    return(
        <div>
            <Link to={`/userpage`}><div>Userpage</div></Link>
            <h4>fieldpage.js</h4>
            <h1> Field name</h1>
            
            <div>
                {foundFields.map(field => 
                <div>
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