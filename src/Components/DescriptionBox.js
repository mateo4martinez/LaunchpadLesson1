import React from 'react';
import '../Design/DescriptionBox.css';

function DescriptionBox(props){
    return (
        <div id='box'>
            <h3 id='title'>
                <b>{props.title}</b>
            </h3>
            <p id='text'>
                {props.description}
            </p>
        </div>
    )
}

export default DescriptionBox