import React from 'react';



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

    const foundField = props.records.filter(field=> {
        return field.userId === props.userProfile.id;     
    })

    return(
        <div>
            <h4>fieldpage.js</h4>
            <h1> Field name</h1>
            {/* date, operation, and details of this field*/}
            <div>{records}</div>
            <div>{foundField}</div>
        </div>
    )
}

export default Fieldpage;