import React from 'react';

function FormElement(props) {
    const { title, info, name, index, functions, type } = props
    return (
        <div className="elementWrapper">
            <label>{title}</label>
            <input defaultValue={info} onChange={functions} name={name} id={index} type={type}></input>
        </div>
    );
}

export default FormElement;