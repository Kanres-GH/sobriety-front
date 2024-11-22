import '../static/css/main-page.css'
import searchIcon from '../static/imgs/icons/search.svg'

export default function NavMain() {

    return (
        <div className='navmain'>
            <h3 style={{color: 'gray', letterSpacing: 1}}>New Me <span style={{color: 'white'}}>/ Dashboard</span></h3>
            <div className="navmain-input">
                <img src={searchIcon} />
                <input type="text" placeholder="Search by keywords" />
            </div>
        </div>
    );
}