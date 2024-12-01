import '../static/css/main-page.css'
import Navbar from './Navbar';
import NavMain from './NavMain';
import SideProfile from './SideProfile';
import userIcon from '../static/imgs/icons/circle-user.svg'
import { useAuth } from './AuthProvider';

export default function SettingsPage() {
    const { username, } = useAuth()

    return (
        <div className='main'>
            <Navbar />
            <div className="main-settings">
                <NavMain />
                <div className="settings-content">
                    <div className="settings-content-box">
                        <div className="settings-header">
                            <h1>Account Settings</h1>
                            <div className="settings-header-avatar">
                                <img src={userIcon} />
                            </div>
                            <button>Update Photo</button>
                        </div>
                        <div className="settings-data-list">
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Username</span>
                                    <p>{username}</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Bio</span>
                                    <p>Not set</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Email</span>
                                    <p>Not set</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Password</span>
                                    <p>********</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                        </div>
                        <h1>Addictions</h1>
                        <div className="settings-data-list">
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Addiction</span>
                                    <p>Alcohol</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Start date</span>
                                    <p>27/11/2024</p>
                                </div>
                                <span>3 days &gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Start time</span>
                                    <p>18:26</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <p>Reset start date</p>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Days per week (prior to tracking)</span>
                                    <p>5 days</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <div className="settings-data-item-info">
                                    <span>Times per day (prior to tracking)</span>
                                    <p>3 drinks</p>
                                </div>
                                <span>&gt;</span>
                            </div>
                        </div>
                        <h1>Other</h1>
                        <div className="settings-data-list">
                            <div className="settings-data-item">
                                <p style={{color: 'lightblue'}}>Sign out</p>
                                <span>&gt;</span>
                            </div>
                            <div className="settings-data-item">
                                <p style={{color: 'red'}}>Delete account</p>
                                <span>&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SideProfile />
        </div>
    );
}