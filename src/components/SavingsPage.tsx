import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';

export default function SavingsPage() {

    return (
        <div className='main'>
            <Navbar />
            <div className="main-savings">
                <NavMain />
            </div>
        </div>
    );
}