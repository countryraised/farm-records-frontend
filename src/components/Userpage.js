import React from 'react';

function Userpage(props) {
    const records = props.records.map((record) => {
        return (
          <div key={record.id}>
            <h4>{record.fieldName}</h4>          
            
          </div>
        );
    });
    return(
        <div>
            
            {/* user's field list- be able to select field to see details*/}
            <p>{records}</p>

            {/* add field */}

        </div>
    )
}

export default Userpage;