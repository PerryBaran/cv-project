import React from "react";

const ReviewPage = (props) => {
    const { personal, education, work } = props
    return (
        <div className="reviewWrapper">
            <h2 className="name">{personal.name}</h2>
            <div className="infoWrapper">
                <div className="personalSection">
                    <p className="personalHeading">Date of Birth:</p>
                    <p className="personalInfo">{personal.age}</p>
                </div>
                <div className="personalSection">
                    <p className="personalHeading">Gender:</p>
                    <p className="personalInfo">{personal.gender}</p>
                </div>
                <div className="personalSection">
                    <p className="personalHeading">Phone Number:</p>
                    <p className="personalInfo">{personal.number}</p>
                </div>
                <div className="personalSection">
                    <p className="personalHeading">Email:</p>
                    <p className="personalInfo">{personal.email}</p>
                </div>
                <div className="personalSection">
                    <p className="personalHeading">Bio:</p>
                    <p className="personalInfo">{personal.bio}</p>
                </div>
            </div>
            <div className="infoWrapper">
                <h3 className="title">Education History</h3>
                {education.map((part) => {
                    return (
                        <div key={part.id}  className="indent5px">
                            <div className="educationSection">
                                <h4 className="heading">{part.school}</h4>
                                <p className="info">({part.from} to {part.to})</p>
                            </div>
                            <div className="indent5px">
                                <p className="level">{part.level}</p>
                                <p className="educationInfo">{part.subject}</p>
                                <p className="educationInfo">({part.grade})</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="infoWrapper">
                <h3  className="title">Work History</h3>
                {work.map((part) => {
                    return (
                        <div key={part.id} className="indent5px">
                            <div>
                                <h4 className="heading">{part.position} at {part.employer}</h4>
                                <p className="info">({part.from} to {part.to})</p>
                            </div>
                            <div className="indent5px">
                                <p className="role">{part.role}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        )
}

export default ReviewPage;