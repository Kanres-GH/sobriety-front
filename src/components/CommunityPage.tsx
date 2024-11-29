import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';

export default function CommunityPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-community">
                <NavMain />
            </div>
        </div>
    );
}