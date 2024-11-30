import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';
import SideProfile from './SideProfile';

export default function WorkbookPage() {

    return (
        <div className='main'>
        <Navbar />
            <div className="main-workbook">
                <NavMain />
                <div className="workbook-content">

                </div>
            </div>
            <SideProfile />
        </div>
    );
}