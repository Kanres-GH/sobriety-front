import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';

export default function SettingsPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-settings">
                <NavMain />
            </div>
        </div>
    );
}