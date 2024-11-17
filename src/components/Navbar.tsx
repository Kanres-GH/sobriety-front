// import { Link } from "react-router-dom";
import dashboardIcon from "../static/imgs/icons/apps.svg"
import savingsIcon from "../static/imgs/icons/usd-circle.svg"
import goalsIcon from "../static/imgs/icons/flag.svg"
import calendarIcon from "../static/imgs/icons/calendar-day.svg"
import communityIcon from "../static/imgs/icons/users-alt.svg"
import dailyFeedIcon from "../static/imgs/icons/brightness.svg"
import exitIcon from "../static/imgs/icons/exit.svg"
import settingsIcon from "../static/imgs/icons/settings.svg"
import trackerIcon from "../static/imgs/icons/chart-pie-alt.svg"
import '../static/css/navbar.css'
import logo from '../static/imgs/logo.png'

export default function Navbar() {

    return (
        <div className="navbar-main">
            <div className="navbar-logo">
                <img src={logo} alt="New Me Logo" style={{ width: '250px', justifySelf: 'center' }}/>
            </div>
            <hr className="navbar-hr"/>
            <div className="navbar-main-current">
                <ul className="navbar-ul">
                    <li className="navbar-li navbar-li-current">
                        <img src={dashboardIcon} className="navbar-icon-current" />
                        Dashboard
                    </li>
                    <li className="navbar-li navbar-li-current">
                        <img src={savingsIcon} className="navbar-icon-current" />
                        Savings
                    </li>
                    <li className="navbar-li navbar-li-current">
                        <img src={goalsIcon} className="navbar-icon-current" />
                        Goals
                    </li>
                    <li className="navbar-li navbar-li-current">
                        <img src={calendarIcon} className="navbar-icon-current" />
                        Calendar
                    </li>
                </ul>
            </div>
            <hr className="navbar-hr"/>
            <div className="navbar-main-list">
                <ul className="navbar-ul">
                <li className="navbar-li navbar-li-list">
                        <img src={trackerIcon} className="navbar-icon-list" />
                        Tracker
                    </li>
                    <li className="navbar-li navbar-li-list">
                        <img src={communityIcon} className="navbar-icon-list" />
                        Community
                    </li>
                    <li className="navbar-li navbar-li-list">
                         <img src={dailyFeedIcon} className="navbar-icon-list" />
                        Daily Feed
                    </li>
                    
                </ul>
            </div>
            <hr className="navbar-hr"/>
            <div className="navbar-main-bottom">
                <ul className="navbar-ul">
                    <li className="navbar-li navbar-li-bottom">
                    <img src={settingsIcon} className="navbar-icon-bottom" />
                        Settings
                    </li>
                    <li className="navbar-li navbar-li-bottom">
                        <img src={exitIcon} className="navbar-icon-bottom" />
                        Log Out
                    </li>
                </ul>
            </div>
        </div>
    );
}