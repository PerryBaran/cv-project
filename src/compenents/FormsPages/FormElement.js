import React from 'react';

function FormElement(props) {
    const { title, info } = props
    return (
        <div className="elementWrapper">
            <label>{title}</label>
            <input defaultValue={info}></input>
        </div>
    );
}

export default FormElement;