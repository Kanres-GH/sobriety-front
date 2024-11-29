import { useLocation } from 'react-router-dom';
import '../static/css/main-page.css'
import searchIcon from '../static/imgs/icons/search.svg'

export default function NavMain() {

    const location = useLocation();

    const pathToTitleMap : any = {
        "/tracker/dashboard" : "Tracker / Dashboard",
        "/tracker/savings" : "Tracker / Savings",
        "/tracker/calendar" : "Tracker / Calendar",
        "/community" : "Community",
        "/daily" : "Daily"
    }

    return (
        <div className='navmain'>
            <h3 style={{color: 'gray', letterSpacing: 1}}>New Me /<span style={{color: 'white'}}>{pathToTitleMap[location.pathname]}</span></h3>

            {location.pathname === "/community" ? <div className="navmain-input">
                <img src={searchIcon} />
                <input type="text" placeholder="Search by keywords" />
            </div> : ""}
        </div>
    );
}