import React from "react";
import FormElement from "./FormElement";

const PersonalInfo = (props) => {
    const { personal } = props
    return (
        <div className="sectionWrapper">
             <h2>Personal Infomation</h2>
            <form>
                <FormElement title="Name" info={personal.name}/>
                <FormElement title="Age" info={personal.age}/>
                <FormElement title="Gender" info={personal.gender}/>
                <FormElement title="Phone Number" info={personal.number}/>
                <FormElement title="Email" info={personal.email}/>
                <FormElement title="Bio" info={personal.bio}/>
            </form>
        </div>
    )
}

export default PersonalInfo;