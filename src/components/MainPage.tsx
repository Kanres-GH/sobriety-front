import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';
import Dashboard from './Dashboard';
export default function MainPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-dashboard">
                <NavMain />
                <Dashboard />
            </div>
        </div>
    );
}