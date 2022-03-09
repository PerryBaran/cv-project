import React from "react";
import PersonalInfo from "./FormsPages/PersonalInfo";
import Education from "./FormsPages/Education";
import WorkExperience from "./FormsPages/WorkExperience";

const FormsPage = (props) => {
    const { personal, education, work, functions} = props
    return (
        <div className="pageWrapper">
            <PersonalInfo personal={personal} functions={functions}/>
            <Education education={education} functions={functions}/>
            <WorkExperience work={work} functions={functions}/>
        </div>
    );
};

export default FormsPage;