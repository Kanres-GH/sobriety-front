import '../static/css/main-page.css'
import avatar from '../static/imgs/avatar.jpg'
import markerIcon from '../static/imgs/icons/marker.svg'
import SideCalendar from './SideCalendar';
import bellIcon from '../static/imgs/icons/bell.svg'

export default function SideProfile() {

    return (
        <div className="side-profile">
            <div className="side-profile-user">
                <div className="side-profile-username">
                    <img src={avatar} alt="User avatar" className='user-avatar-sm' />
                    <h2 style={{color: 'white', fontWeight: 'bold', letterSpacing: 1}}>USERNAME</h2>
                </div>
                <div className="side-profile-info">
                    <p className='side-profile-p'>25 years old</p>
                    <hr className='main-hr' style={{height: '75%', borderLeft: 'none'}}/>
                    <div className="side-profile-loc">
                        <p className='side-profile-p'><img src={markerIcon} style={{height: '75%', filter: 'invert(100%) sepia(2%) saturate(2%) hue-rotate(53deg) brightness(118%) contrast(100%)'}}/>Almaty, Kazakhstan</p>
                    </div>
                </div>
                <div className="side-profile-info-2">
                    <div className="side-profile-info-2-item">
                        <p style={{color: '#ababab'}}>Lorem</p>
                        <p style={{color: 'white', fontWeight: 'bold'}}>Ipsum</p>
                    </div>
                    <hr className='main-hr' style={{height: '100%', borderLeft: 'none'}}/>
                    <div className="side-profile-info-2-item">
                        <p style={{color: '#ababab'}}>Weight</p>
                        <p style={{color: 'white', fontWeight: 'bold'}}>80kg</p>
                    </div>
                    <hr className='main-hr' style={{height: '100%', borderLeft: 'none'}}/>
                    <div className="side-profile-info-2-item">
                        <p style={{color: '#ababab'}}>Lorem</p>
                        <p style={{color: 'white', fontWeight: 'bold'}}>Ipsum</p>
                    </div>
                </div>
            </div>
            <div className="side-profile-calendar">
                <SideCalendar />
            </div>
            <hr className='main-hr' style={{width: '80%', alignSelf: 'center', borderTop: 'none'}}/>
            <div className="side-profile-upcoming">
                <h2 style={{color: 'white', fontWeight: 'bold', fontSize: '18px', letterSpacing: 1.5}}>Upcoming</h2>
                <div className="side-profile-upcoming-items">
                    <div className="side-profile-upcoming-item">
                        <div className="side-profile-upcoming-item-img">
                            <img src={bellIcon} style={{filter: 'invert(92%) sepia(73%) saturate(513%) hue-rotate(75deg) brightness(94%) contrast(83%)', height: '15px'}}/>
                        </div>
                        <div className="side-profile-upcoming-item-text">
                            <p style={{color: 'white', fontSize: '15px', fontWeight: '550'}}>Lorem Ipsum</p>
                            <p style={{color: 'white', fontSize: '15px'}}>Dummy Text</p>
                            <p style={{fontWeight: '100', fontSize: '12px', letterSpacing: '-0.3px'}}>09:20 - 11:30</p>
                        </div>
                    </div>
                    <div className="side-profile-upcoming-item">
                        <div className="side-profile-upcoming-item-img">
                            <img src={bellIcon} style={{filter: 'invert(92%) sepia(73%) saturate(513%) hue-rotate(75deg) brightness(94%) contrast(83%)', height: '15px'}}/>
                        </div>
                        <div className="side-profile-upcoming-item-text">
                            <p style={{color: 'white', fontSize: '15px', fontWeight: '550'}}>Lorem Ipsum</p>
                            <p style={{color: 'white', fontSize: '15px'}}>Dummy Text</p>
                            <p style={{fontWeight: '100', fontSize: '12px', letterSpacing: '-0.3px', display: 'flex', gap: '20px'}}>08:00 <span style={{color: '#FFAD47'}}>Soon</span></p>
                        </div>
                    </div>
                </div>
                <hr className='main-hr' style={{width: '80%', alignSelf: 'center', borderTop: 'none'}}/>
            </div>
            <div className="side-profile-footer">
                
            </div>
        </div>
    );
}