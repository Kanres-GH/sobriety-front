import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';

export default function CalendarPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-calendar">
                <NavMain />
            </div>
        </div>
    );
}