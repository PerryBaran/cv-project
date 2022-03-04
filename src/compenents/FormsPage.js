import React from "react";
import PersonalInfo from "./FormsPages/PersonalInfo";
import Education from "./FormsPages/Education";
import WorkExperience from "./FormsPages/WorkExperience";

const FormsPage = (props) => {
    return (
        <div>
            <PersonalInfo />;
            <Education />;
            <WorkExperience />;
        </div>
    );
};

export default FormsPage;