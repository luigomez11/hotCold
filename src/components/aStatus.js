import React from 'react';

export default function AStatus(props){
    return (
        <p
            id="status-readout"
            className="visuallyhidden"
            aria-live="assertive"
            aria-atomic="true"
        >
            {props.aStatus}
        </p>
    );
}