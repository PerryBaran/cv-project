import React from 'react';

function FormElement(props) {
    const { title, info, name, index, functions } = props
    return (
        <div className="elementWrapper">
            <label>{title}</label>
            <input defaultValue={info} onChange={functions} name={name} id={index}></input>
        </div>
    );
}

export default FormElement;