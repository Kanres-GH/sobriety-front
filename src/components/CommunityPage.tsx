import '../static/css/main-page.css'
import FeedCurrent from './FeedCurrent';
import Navbar from './Navbar';
import NavMain from './NavMain';
import { useState } from 'react';
import SideProfile from './SideProfile';
import { FeedFollowing } from './FeedFollowing';

export default function CommunityPage() {

    const [selectedTab, setSelectedTab] = useState(`${"2 Days"}`);

    return (
        <div className='main'>
            <Navbar />
            <div className="main-feed">
                <NavMain />
                <div className="feed-content">
                    <div className="feed-navbar">
                        <div className="feed-nav">
                            <div className={`feed-nav-item ${selectedTab === `${"2 Days"}` ? 'active' : ''}`}
                            onClick={() => setSelectedTab(`${"2 Days"}`)}>
                                <h4>{"2 Days"}</h4>
                            </div>
                            <div className={`feed-nav-item ${selectedTab === `${"All Milestones"}` ? 'active' : ''}`}
                            onClick={() => setSelectedTab('All Milestones')}>
                                <h4>{"All Milestones"}</h4>
                            </div>
                            <div className={`feed-nav-item ${selectedTab === `${"Following"}` ? 'active' : ''}`}
                            onClick={() => setSelectedTab('Following')}>
                                <h4>{"Following"}</h4>
                            </div>
                        </div>
                    </div>
                    {selectedTab === `${"2 Days"}` ? 
                    <div className="feed-box">
                        <FeedCurrent />
                    </div> : selectedTab === "All Milestones" ?
                    <div className="feed-milestones-box">
                        <div className="feed-milestones-list">
                            <h2>Getting sober</h2>
                            <div className="feed-milestones-list-item">
                                <p>Day Zero</p>
                                <span>&gt;</span>
                            </div>
                        </div>
                        <h2>Reached Milestones</h2>
                        <div className="feed-milestones-list">
                            <div className="feed-milestones-list-item">
                                <p>Day One</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>2 Days</p>
                                <span>&gt;</span>
                            </div>
                        </div>
                        <h2>Getting sober</h2>
                        <div className="feed-milestones-list">
                            <div className="feed-milestones-list-item">
                                <p>3 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>4 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>Fiver <span>• 5 days</span></p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>6 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>1 Week <span>• 7 days</span></p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>8 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>9 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>Double Digits <span>• 10 days</span></p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>12 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>2 Weeks <span>• 14 days</span></p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>17 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>3 Weeks <span>• 21 days</span></p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>25 Days</p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>1 Month <span>• 30 days</span></p>
                                <span>&gt;</span>
                            </div>
                            <div className="feed-milestones-list-item">
                                <p>5 Weeks <span>• 35 days</span></p>
                                <span>&gt;</span>
                            </div>
                        </div>
                    </div> : selectedTab === `${"Following"}` ?
                    <div className="feed-box">
                        <FeedFollowing />
                    </div> : ""
                }
                </div>
            </div>
            <SideProfile />
        </div>
    );
}