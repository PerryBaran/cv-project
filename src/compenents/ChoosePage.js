import React from "react";
import FormsPage from "./FormsPage"
import ReviewPage from "./ReviewPage";

const Page = (props) => {
    const { form } = props;
    if (form) {
        return <FormsPage />
    }
    return <ReviewPage />
};

export default Page;