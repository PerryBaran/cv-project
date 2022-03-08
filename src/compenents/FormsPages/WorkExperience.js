import React from "react";
import FormElement from "./FormElement";

const WorkExperience = (props) => {
    return (
        <div className="sectionWrapper">
             <h2>Work Experience</h2>
            <form>
                <FormElement title="Employer"/>
                <FormElement title="Position"/>
                <FormElement title="Form"/>
                <FormElement title="To"/>
                <FormElement title="Role"/>
            </form>
        </div>
    )
}

export default WorkExperience;