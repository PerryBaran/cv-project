import React from "react";
import FormElement from "./FormElement";

const WorkExperience = (props) => {
    const { work, functions } = props;
    return (
        <div className="sectionWrapper">
            <h2>Work Experience</h2>
            <div>
                {work.map((part) => {
                    return(
                        <div key={part.id}>
                            <form className="part">
                                <FormElement title="Employer" info={part.employer}/>
                                <FormElement title="Position" info={part.position}/>
                                <FormElement title="From" info={part.from}/>
                                <FormElement title="To" info={part.to}/>
                                <FormElement title="Role" info={part.role}/>
                            </form>
                            <div>
                                <button onClick={() => functions.delWork(part.id)}  className="del">delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div>
                <button onClick={functions.addWork} className="add">+</button>
            </div>
        </div>
    )
}

export default WorkExperience;