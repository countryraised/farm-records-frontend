import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';


function Fieldpage(props) {
    const records = props.records.map((record) => {
        return (
          <div key={record.id}>
            <h4>{record.fieldName}</h4>          
            <p>
              {record.dateComplete}<br/>
              {record.details}<br/>
              {record.userId}
            </p>
          </div>
        );
    });

    const foundField = (props.records.find(field=> {
        return field.userId == props.userId
        })
    );   
    console.log(props.userId) //integer
    console.log(foundField) //array of objects.
    

    return(
        <div>
            <Link to={`/userpage`}><div>Userpage</div></Link>
            <h4>fieldpage.js</h4>
            <h1> Field name</h1>
            {/* date, operation, and details of this field*/}
            {/* <div>{records}</div> */}
            <p>split</p>
            <h2>{foundField.fieldName}</h2>
            <div>{foundField.dateComplete}</div>
            <div>{foundField.operationType}</div>
            <div>{foundField.details}</div>

        </div>
    )
}

export default Fieldpage;