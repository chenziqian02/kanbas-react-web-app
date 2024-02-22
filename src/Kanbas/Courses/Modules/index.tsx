import ModuleList from "./List";
import { CiCircleCheck } from "react-icons/ci";
import { FaPlus, FaEllipsisV } from "react-icons/fa";
import {AiFillCheckCircle} from "react-icons/ai";

function Modules() {
    return (
        <div>
            <div className="button-group d-flex flex-row justify-content-end">
                <button className="btn btn-light wd-button-style">Collapse All</button>
                <button className="btn btn-light wd-button-style">View Progress</button>
                <button className="btn btn-light dropdown-toggle wd-button-style" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <AiFillCheckCircle style={{color:'green'}}/>
                    &nbsp;&nbsp;Publish All
                </button>

                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Publish Some
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Option 2
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Option 3
                        </a>
                    </li>
                </ul>
                <button
                    type="button"
                    className="btn btn-danger wd-button-style"
                    style={{ marginRight: "5px" }}>
                    <FaPlus /> Module
                </button>
                <button type="button" className="btn btn-light wd-button-style">
                    <FaEllipsisV />
                </button>
            </div>

            <hr />

            {/*<h2>Modules</h2>*/}
            <ModuleList />
        </div>
    );
}
export default Modules;