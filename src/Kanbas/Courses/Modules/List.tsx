import React from "react";
import { useParams } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import './index.css'
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="table">
            <li className="list-group-item">
                <button
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                    Add
                </button>

                <button
                    onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>

                <input value={module.name}
                       onChange={(e) =>
                           dispatch(setModule({ ...module, name: e.target.value }))
                }/>
                <textarea value={module.description}
                          onChange={(e) =>
                              dispatch(setModule({ ...module, description: e.target.value }))
                }/>
            </li>

            {moduleList
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="assignment-row">
                        <FaEllipsisV/>
                        <button style={{ float: 'left' }}
                                onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        &nbsp;&nbsp;{module.name}

                        <button style={{ float: 'left' }}
                                onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>
                        <AiFillCheckCircle style={{color:'green'}}/>
                        &nbsp;
                        +
                        &nbsp;

                        <FaEllipsisV/>
                    </li>
                ))
            }
        </ul>
    );
}
export default ModuleList;