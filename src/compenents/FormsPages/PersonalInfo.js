import React from "react";
import FormElement from "./FormElementPersonal";

const PersonalInfo = (props) => {
    const { personal, functions } = props
    return (
        <div className="sectionWrapper">
             <h2>Personal Infomation</h2>
            <form>
                <FormElement title="Name" info={personal.name} functions={functions.handlePersonal} name="name"/>
                <FormElement title="Age" info={personal.age} functions={functions.handlePersonal} name="age"/>
                <FormElement title="Gender" info={personal.gender} functions={functions.handlePersonal} name="gender"/>
                <FormElement title="Phone Number" info={personal.number} functions={functions.handlePersonal} name="number"/>
                <FormElement title="Email" info={personal.email} functions={functions.handlePersonal} name="email"/>
                <FormElement title="Bio" info={personal.bio} functions={functions.handlePersonal} name="bio"/>
            </form>
        </div>
    )
}

export default PersonalInfo;