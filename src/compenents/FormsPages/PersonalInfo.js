import React from "react";
import FormElement from "./FormElement";

const PersonalInfo = (props) => {
    return (
        <div className="sectionWrapper">
             <h2>Personal Infomation</h2>
            <form>
                <FormElement title="Name"/>
                <FormElement title="Age"/>
                <FormElement title="Gender"/>
                <FormElement title="Phone Number"/>
                <FormElement title="Email"/>
                <FormElement title="Bio"/>
            </form>
        </div>
    )
}

export default PersonalInfo;