import React from "react";
import FormElement from "./FormElement";

const WorkExperience = (props) => {
    const { work, functions } = props;
    return (
        <div className="sectionWrapper">
            <h2>Work Experience</h2>
            <div>
                {work.map((part) => {
                    const index = work.indexOf(part);
                    return(
                        <div key={part.id}>
                            <form className="part">
                                <FormElement title="Employer" info={part.employer} functions={functions.handleWork} name="employer" index={index}/>
                                <FormElement title="Position" info={part.position} functions={functions.handleWork} name="position" index={index}/>
                                <FormElement title="From" info={part.from} functions={functions.handleWork} name="from" index={index}/>
                                <FormElement title="To" info={part.to} functions={functions.handleWork} name="to" index={index}/>
                                <FormElement title="Role" info={part.role} functions={functions.handleWork} name="role" index={index}/>
                            </form>
                            <div>
                                <button onClick={() => functions.delWork(part.id)}  className="delAdd">delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={functions.addWork} className="delAdd">add</button>
            </div>
        </div>
    )
}

export default WorkExperience;