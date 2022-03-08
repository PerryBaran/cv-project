import React from "react";
import FormElement from "./FormElement";

const Education = (props) => {
    return (
    <div className="sectionWrapper">
        <h2>Education</h2>
        <form>
            <FormElement title="Subject"/>
            <FormElement title="Level"/>
            <FormElement title="School"/>
            <FormElement title="From"/>
            <FormElement title="To"/>
        </form>
    </div>
    )
}

export default Education;