import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaRegUserCircle, FaBook, FaRegCalendarAlt, FaRegClock, FaEnvelopeOpenText, FaSignOutAlt , FaRegQuestionCircle } from "react-icons/fa";
import {IoSpeedometerOutline} from "react-icons/io5";
import {RiMovieLine} from "react-icons/ri";
import NUlogo from "../../images/NU_logo.png";
function CourseNavigation() {
    const links = [
        "Home",
        "Modules",
        "Piazza",
        "Assignments",
        "Quizzes",
        "Grades",
        "People",
        "Panopto Video",
        "Discussions",
        "Announcements",
        "Pages",
        "Files",
        "Rubrics",
        "Outcomes",
        "Collaboration",
        "Syllabus",
        "Settings",
    ];
    const { pathname } = useLocation();
    return (
        <div className="d-flex">
            <div className="d-block">
                <div className="d-none d-md-block" style={{ marginLeft: "80px" }}>
                    <ul className="wd-navigation">
                        {links.map((link, index) => (
                            <li
                                key={index}
                                className={pathname.includes(link) ? "wd-active" : ""}
                            >
                                <Link to={link}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default CourseNavigation;