import React from 'react';
import './css/Button.css'

export default (props) => {
    let classesButton = 'button ';
    classesButton += props.operation ? 'operation' : '';
    classesButton += props.double ? 'double' : '';
    classesButton += props.triple ? 'triple' : '';

    return (
        <button 
            onClick={(e) => props.click && props.click(props.label)}
            className={classesButton}
        >
            {props.label}
        </button>
    )

}
