import React from "react";
import FormElement from "./FormElement";

const Education = (props) => {
    const { education, functions} = props;
    return (
        <div className="sectionWrapper">
            <h2>Education</h2>
            <div>
                {education.map((part) => {
                    const index = education.indexOf(part);
                    return(
                        <div key={part.id}>
                            <form>
                                <FormElement title="Subject" info={part.subject} functions={functions.handleEducation} name="subject" index={index} type="text"/>
                                <FormElement title="Level" info={part.level} functions={functions.handleEducation} name="level" index={index} type="text"/>
                                <FormElement title="Grade" info={part.grade} functions={functions.handleEducation} name="grade" index={index} type="text"/>
                                <FormElement title="School" info={part.school} functions={functions.handleEducation} name="school" index={index} type="text"/>
                                <FormElement title="From" info={part.from} functions={functions.handleEducation} name="from" index={index} type="date"/>
                                <FormElement title="To" info={part.to} functions={functions.handleEducation} name="to" index={index} type="date"/>
                            </form>
                            <div>
                                <button onClick={() => functions.delEducation(part.id)}  className="delAdd">delete</button>
                            </div>
                        </div>   
                    )
                })}
            </div>
            <div>
                <button onClick={functions.addEducation}  className="delAdd">add</button>
            </div>
        </div>
    )
}

export default Education;