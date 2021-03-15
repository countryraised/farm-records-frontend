import React from 'react';



function Fieldpage(props) {
    const records = props.records.map((record) => {
        return (
          <div key={record.id}>
            <h4>{record.fieldName}</h4>          
            <p>
              {record.dateComplete}<br/>
              {record.details}
            </p>
          </div>
        );
    });

    const foundField = props.records.find(field=> {
        return field.id === props.match.params.id;     
    })
    
    return(
        <div>
            <h1> Field name</h1>
            {/* date, operation, and details of this field*/}
            <div>{records}</div>
            {/* <div>{foundField}</div> */}
        </div>
    )
}

export default Fieldpage;