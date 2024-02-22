import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { BiClipboard } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css"

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="button-group">
                <input className="form-control w-50" placeholder="Search for Assignments"></input>
                <div className="button-controls">
                    <button className="btn btn-light">+Group</button>
                    <button type="button" className="btn btn-danger">+ Assignment</button>
                    <button className="btn btn-light"><FaEllipsisV /></button>
                </div>
            </div>
            <hr/>
            <div>
                <div className="assignment-row first-row">
                    <FaEllipsisV/>
                    <FaEllipsisV/>
                    ASSIGNMENTS
                    <div className="title-circle">
                        40% of Total
                    </div>
                    +
                    <FaEllipsisV/>
                </div>
                {courseAssignments.map((assignment) => (
                    <div className="assignment-row">
                        <div className="left-group">
                            <FaEllipsisV/>
                            <FaEllipsisV/>
                            <BiClipboard/>
                            <Link
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item">
                                {assignment.title}
                            </Link>
                        </div>
                        <div className="right-group">
                            <AiFillCheckCircle style={{color:'green'}}/>
                            <FaEllipsisV/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Assignments;