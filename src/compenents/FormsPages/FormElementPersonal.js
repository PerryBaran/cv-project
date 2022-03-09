import React from 'react';

function FormElement(props) {
    const { title, info, name, functions } = props
    return (
        <div className="elementWrapper">
            <label>{title}</label>
            <input defaultValue={info} onChange={functions} name={name}></input>
        </div>
    );
}

export default FormElement;