import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';
import SideProfile from './SideProfile';

export default function SettingsPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-settings">
                <NavMain />
                <div className="settings-content">
                    
                </div>
            </div>
            <SideProfile />
        </div>
    );
}