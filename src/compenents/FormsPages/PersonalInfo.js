import React from "react";
import FormElement from "./FormElementPersonal";

const PersonalInfo = (props) => {
    const { personal, functions } = props
    return (
        <div className="sectionWrapper">
             <h2>Personal Infomation</h2>
            <form>
                <FormElement title="Name" info={personal.name} functions={functions.handlePersonal} name="name" type="text"/>
                <FormElement title="Date of Birth" info={personal.age} functions={functions.handlePersonal} name="age" type="date"/>
                <FormElement title="Gender" info={personal.gender} functions={functions.handlePersonal} name="gender" type="text"/>
                <FormElement title="Phone Number" info={personal.number} functions={functions.handlePersonal} name="number" type="number"/>
                <FormElement title="Email" info={personal.email} functions={functions.handlePersonal} name="email" type="email"/>
                <FormElement title="Bio" info={personal.bio} functions={functions.handlePersonal} name="bio" type="text"/>
            </form>
        </div>
    )
}

export default PersonalInfo;