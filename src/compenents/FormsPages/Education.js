import React from "react";
import FormElement from "./FormElement";

const Education = (props) => {
    const { education, functions} = props;
    return (
        <div className="sectionWrapper">
            <h2>Education</h2>
            <div>
                {education.map((part) => {
                    return(
                        <div key={part.id}>
                            <form>
                                <FormElement title="Subject" info={part.subject}/>
                                <FormElement title="Level" info={part.level}/>
                                <FormElement title="School" info={part.school}/>
                                <FormElement title="From" info={part.from}/>
                                <FormElement title="To" info={part.to}/>
                            </form>
                            <div>
                                <button onClick={() => functions.delEducation(part.id)}  className="del">delete</button>
                            </div>
                        </div>   
                    )
                })}
            </div>
            <div>
                <button onClick={functions.addEducation}  className="add">+</button>
            </div>
        </div>
    )
}

export default Education;