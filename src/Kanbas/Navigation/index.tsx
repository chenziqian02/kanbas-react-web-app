import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaRegClock,
    FaEnvelopeOpenText,
    FaSignOutAlt,
    FaRegQuestionCircle,
    FaTachometerAlt
} from "react-icons/fa";
import {RiMovieLine} from "react-icons/ri";
import NUlogo from '../images/NU_logo.png';



function KanbasNavigation() {
    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
        { label: "Courses",   icon: <FaBook className="fs-2" />           },
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox",  icon: <FaEnvelopeOpenText className="fs-2" /> },
        { label: "History",  icon: <FaRegClock className="fs-2" /> },
        { label: "Studio",  icon: <RiMovieLine className="fs-2" /> },
        { label: "Commons",  icon: <FaSignOutAlt className="fs-2" /> },
        { label: "Help",  icon: <FaRegQuestionCircle className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (

        <ul className="wd-kanbas-navigation">
            <img src={NUlogo} alt="Northeastern University Logo" className="wd-neu-logo"></img>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon}
                        <span className={pathname.includes(link.label) ? "" : "wd-text"}>{link.label}</span> </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;