import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';

export default function WorkbookPage() {

    return (
        <div className='main'>
        <Navbar />
            <div className="main-workbook">
                <NavMain />
            </div>
        </div>
    );
}