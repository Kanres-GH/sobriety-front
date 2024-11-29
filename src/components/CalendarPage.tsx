import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';
import SideProfile from './SideProfile';

export default function CalendarPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-calendar">
                <NavMain />
            </div>
            <SideProfile />
        </div>
    );
}