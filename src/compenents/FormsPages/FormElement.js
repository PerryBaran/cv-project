import React from 'react';

function FormElement(props) {
    const { title } = props
    return (
        <div className="elementWrapper">
            <label>{title}</label>
            <input></input>
        </div>
    );
}

export default FormElement;