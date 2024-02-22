import { Link } from "react-router-dom";
import db from "../Database";
import './index.css'
// import { FaEllipsisV } from 'react-icons/fa';
// import { BiCalendarEdit } from "react-icons/bi";
function Dashboard() {
    return (
        <div className="p-4" style={{marginLeft: '80px'}}>
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses ({db.courses.length})</h2> <hr />

            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {db.courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/imagess/${course.image}`} className="card-img-top"
                                     style={{ height: 150 }}/>
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.name}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;