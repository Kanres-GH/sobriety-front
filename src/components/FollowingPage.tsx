import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';

export default function FollowingPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-following">
                <NavMain />
            </div>
        </div>
    );
}