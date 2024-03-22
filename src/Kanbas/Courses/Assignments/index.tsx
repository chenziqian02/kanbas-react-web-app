import React from "react";
import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import {
    deleteAssignment,
    // setAssignment,
} from "./assignmentsReducer";
import {AiFillCheckCircle} from "react-icons/ai";
import {BiClipboard} from "react-icons/bi";



function Assignments() {
    const { courseId } = useParams();
    const assignmentList = useSelector((state: KanbasState) =>
        state.assignmentsReducer.assignments);
    console.log(assignmentList);
    // const formatDate = (date: any) => {
    //     return `${(date.getMonth() + 1).toString().padStart(2, "0")}/
    //       ${(date.getDate() + 1).toString().padStart(2, "0")}/
    //       ${date.getFullYear()}`;
    // };
    const dispatch = useDispatch();
    const handleDeleteConfirmation = (assign_id : any) => {
        const isConfirmed = window.confirm("Are you sure?");

        if (isConfirmed) {
            console.log("User clicked Yes");
            dispatch(deleteAssignment(assign_id));

        }
    };

    return (
        <div>
            <h2>Assignments for course {courseId}</h2>
            <div className="button-group">
                <input className="form-control w-50" placeholder="Search for Assignments"></input>
                <div className="button-controls">
                    <button className="btn btn-light">+Group</button>
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments/Add+`}>
                        <button
                            type="button"
                            className="btn btn-danger wd-button-style float-end mx-1">
                            <FaPlus /> Assignment
                        </button>
                    </Link>
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
                {assignmentList.map((assignment) => (
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
                            <button className="btn btn-danger"  onClick={() => handleDeleteConfirmation(assignment._id)}>Delete</button>
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