import { Link, useLocation } from "react-router-dom";
import dashboardIcon from "../static/imgs/icons/apps.svg";
import savingsIcon from "../static/imgs/icons/usd-circle.svg";
import calendarIcon from "../static/imgs/icons/calendar-day.svg";
import communityIcon from "../static/imgs/icons/users-alt.svg";
import dailyFeedIcon from "../static/imgs/icons/brightness.svg";
import exitIcon from "../static/imgs/icons/exit.svg";
import settingsIcon from "../static/imgs/icons/settings.svg";
import trackerIcon from "../static/imgs/icons/chart-pie-alt.svg";
import feedIcon from '../static/imgs/icons/table-layout.svg'
import followingIcon from '../static/imgs/icons/following.svg'
import workbookIcon from '../static/imgs/icons/book-open-reader.svg'
import pledgeIcon from '../static/imgs/icons/drawer-alt.svg'
import motivationIcon from '../static/imgs/icons/talent-hand.svg'
import "../static/css/navbar.css";
import logo from "../static/imgs/logo.png";

export default function Navbar() {
    const location = useLocation();

    const isActive = (paths : any) => paths.some((path : any) => location.pathname.startsWith(path));

    return (
        <div className="navbar-main">
            <div className="navbar-logo">
                <img src={logo} alt="New Me Logo" style={{ width: "250px", justifySelf: "center" }} />
            </div>
            {/* <hr className="navbar-hr" /> */}
            <div className="navbar-main-current">
                <ul className="navbar-ul">
                    { isActive(["/tracker"]) ?
                        <>
                            <Link to="/tracker/dashboard">
                                <li className={`navbar-li ${isActive(["/tracker/dashboard"]) ? "active-link" : ""}`}>
                                    <img src={dashboardIcon} className="navbar-icon-current" />
                                    Dashboard
                                </li>
                            </Link>
                            <Link to="/tracker/savings">
                                <li className={`navbar-li ${isActive(["/tracker/savings"]) ? "active-link" : ""}`}>
                                    <img src={savingsIcon} className="navbar-icon-current" />
                                    Savings
                                </li>
                            </Link>
                            <Link to="/tracker/calendar">
                                <li className={`navbar-li ${isActive(["/tracker/calendar"]) ? "active-link" : ""}`}>
                                    <img src={calendarIcon} className="navbar-icon-current" />
                                    Calendar
                                </li>
                            </Link>
                        </>
                        : isActive(["/community"]) ?
                        <>
                            <Link to="/community/feed">
                                <li className={`navbar-li ${isActive(["/community/feed"]) ? "active-link" : ""}`}>
                                    <img src={feedIcon} className="navbar-icon-current" />
                                    Feed
                                </li>
                            </Link>
                            <Link to="/community/following">
                                <li className={`navbar-li ${isActive(["/community/following"]) ? "active-link" : ""}`}>
                                    <img src={followingIcon} className="navbar-icon-current" />
                                    Following
                                </li>
                            </Link>
                        </> : isActive(["/daily"]) ?
                        <>
                            <Link to="/daily/pledge">
                                <li className={`navbar-li ${isActive(["/daily/pledge"]) ? "active-link" : ""}`}>
                                    <img src={pledgeIcon} className="navbar-icon-current" />
                                    Pledge
                                </li>
                            </Link>
                            <Link to="/daily/workbook">
                                <li className={`navbar-li ${isActive(["/daily/workbook"]) ? "active-link" : ""}`}>
                                    <img src={workbookIcon} className="navbar-icon-current" />
                                    Workbook
                                </li>
                            </Link>
                            <Link to="/daily/motivation">
                                <li className={`navbar-li ${isActive(["/daily/motivation"]) ? "active-link" : ""}`}>
                                    <img src={motivationIcon} className="navbar-icon-current" />
                                    Motivation
                                </li>
                            </Link>
                        </> : ""
                    }
                </ul>
            </div>
            <hr className="navbar-hr" />
            <div className="navbar-main-list">
                <ul className="navbar-ul">
                    <Link to="/tracker/dashboard">
                        <li className={`navbar-li ${isActive(["/tracker"]) ? "active-link" : ""} navbar-li-list`}>
                            <img src={trackerIcon} className="navbar-icon-list" />
                            Tracker
                        </li>
                    </Link>
                    <Link to="/community/feed">
                        <li className={`navbar-li ${isActive(["/community"]) ? "active-link" : ""} navbar-li-list`}>
                            <img src={communityIcon} className="navbar-icon-list" />
                            Community
                        </li>
                    </Link>
                    <Link to="/daily/pledge">
                        <li className={`navbar-li ${isActive(["/daily"]) ? "active-link" : ""} navbar-li-list`}>
                            <img src={dailyFeedIcon} className="navbar-icon-list" />
                            Daily
                        </li>
                    </Link>
                </ul>
            </div>
            <hr className="navbar-hr" />
            <div className="navbar-main-bottom">
                <ul className="navbar-ul">
                    <Link to="/settings">
                        <li className={`navbar-li ${isActive(["/settings"]) ? "active-link" : ""} navbar-li-bottom`}>
                            <img src={settingsIcon} className="navbar-icon-bottom" />
                            Settings
                        </li>
                    </Link>
                    <li className="navbar-li navbar-li-bottom">
                        <img src={exitIcon} className="navbar-icon-bottom" />
                        Log Out
                    </li>
                </ul>
            </div>
        </div>
    );
}
