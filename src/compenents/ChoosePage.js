import React from "react";
import FormsPage from "./FormsPage"
import ReviewPage from "./reviewPage";

const Page = (props) => {
    
    if (this.state.form) {
        return <FormsPage />;
    }
    return <ReviewPage />;
};

export default Page;