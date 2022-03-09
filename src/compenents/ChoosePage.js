import React from "react";
import FormsPage from "./FormsPage"
import ReviewPage from "./ReviewPage";

const Page = (props) => {
    const { form, personal, education, work, functions} = props
    if (form) {
        return <FormsPage personal={personal} education={education} work={work} functions={functions}/>
    }
    return <ReviewPage personal={personal} education={education} work={work}/>
};

export default Page;