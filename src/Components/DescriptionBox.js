import React from 'react';
import '../Design/DescriptionBox.css';

function DescriptionBox(props){
    return (
        <div class='general'>
            <div class='text'>
                <p>
                    {props.title}
                </p>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox