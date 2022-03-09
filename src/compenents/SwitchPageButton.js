import React from 'react';

function SwitchPageButton(props) {
    const {formSelect, active, text} = props

    let classNames = "switchPage"
    if (active) {
        classNames = "switchPage active"
    }
   
    return <button onClick={formSelect} className={classNames}>{text}</button>
}

export default SwitchPageButton;