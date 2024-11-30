import { useState } from 'react';
import '../static/css/main-page.css';
import Navbar from './Navbar';
import NavMain from './NavMain';
import SideProfile from './SideProfile';

export default function SavingsPage() {
    const [selectedTab, setSelectedTab] = useState('Money');

    return (
        <div className="main">
            <Navbar />
            <div className="main-savings">
                <NavMain />
                <div className="savings-content">
                <div className="savings-nav">
                    <div
                    className={`savings-nav-item ${selectedTab === 'Money' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('Money')}
                    >
                        <h4>Money</h4>
                    </div>
                    <div
                    className={`savings-nav-item ${selectedTab === 'Time' ? 'active' : ''}`}
                    onClick={() => setSelectedTab('Time')}
                    >
                        <h4>Time</h4>
                    </div>
                </div>
                {selectedTab === 'Money' ? (
                    <div className="savings-summary">
                        <div className="savings-summary-header">
                            <h2 style={{ fontSize: '24px', color: 'white' }}>Overall savings</h2>
                            <div className="savings-summary-total">
                                <h1>$399.00</h1>
                                <p>(or 19 twenty-dollar bills)</p>
                            </div>
                        </div>
                        <div className="savings-summary-list">
                            <div className="savings-summary-item">
                                <p>Money spent per day</p>
                                <span style={{ color: '#53fc53' }}>$7.00</span>
                            </div>
                            <div className="savings-summary-item">
                                <p>Oldest start date</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>2 Oct 2024</span>
                                    <span style={{ color: 'white' }}>58 days</span>
                                </div>
                            </div>
                            <div className="savings-summary-item">
                                <p>Days without resets</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>-1 day</span>
                                    <span style={{ color: 'white' }}>57 days</span>
                                </div>
                            </div>
                            <div className="savings-summary-item">
                                <p>Overall saved</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>$7.00 x 57 days</span>
                                    <span style={{ color: 'white' }}>$399.00</span>
                                </div>
                            </div>
                        </div>
                        <h2 style={{color: 'white', fontSize: '24px', fontWeight: '600'}}>Current savings</h2>
                        <div className="savings-summary-list">
                            <div className="savings-summary-item">
                                <p>Time saved per day</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>27 Nov 2024</span>
                                    <span style={{ color: 'white', fontWeight: '500' }}>2 days</span>
                                </div>
                            </div>
                            <div className="savings-summary-item">
                                <p>Money saved</p>
                                <span style={{ color: 'white', fontWeight: '500' }}>$14.00</span>
                            </div>
                        </div>
                        <h2 style={{color: 'white', fontSize: '24px', fontWeight: '600'}}>Projected savings</h2>
                        <div className="savings-summary-list">
                            <div className="savings-summary-item">
                                <p>Projected monthly savings</p>
                                <span style={{ color: '#75a5ff', fontWeight: '300' }}>$212.92</span>
                            </div>
                            <div className="savings-summary-item">
                                <p>Projected yearly savings</p>
                                <span style={{ color: '#75a5ff', fontWeight: '300' }}>$2,555.00</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="savings-summary">
                        <div className="savings-summary-header">
                            <h2 style={{ fontSize: '24px', color: 'white' }}>Overall time savings</h2>
                            <div className="savings-summary-total">
                            <h1>93 hours</h1>
                            <p>(or 3.9 days)</p>
                            </div>
                        </div>
                        <div className="savings-summary-list">
                            <div className="savings-summary-item">
                                <p>Time saved per day</p>
                            <span style={{ color: '#53fc53', fontWeight: '500' }}>1.6 hours</span>
                            </div>
                            <div className="savings-summary-item">
                                <p>Oldest start date</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>2 Oct 2024</span>
                                    <span style={{ color: 'white', fontWeight: '500' }}>58 days</span>
                                </div>
                            </div>
                            <div className="savings-summary-item">
                                <p>Days without resets</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>-1 day</span>
                                    <span style={{ color: 'white', fontWeight: '500' }}>57 days</span>
                                </div>
                            </div>
                            <div className="savings-summary-item">
                                <p>Overall time saved</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>2h : 30m x 57 days</span>
                                    <span style={{ color: 'white', fontWeight: '500' }}>93 hours</span>
                                </div>
                            </div>
                        </div>
                        <h2 style={{color: 'white', fontSize: '24px', fontWeight: '600'}}>Current savings</h2>
                        <div className="savings-summary-list">
                            <div className="savings-summary-item">
                                <p>Time saved per day</p>
                                <div className="savings-summary-item-info">
                                    <span style={{ color: 'gray', fontSize: '12px' }}>27 Nov 2024</span>
                                    <span style={{ color: 'white', fontWeight: '500' }}>2 days</span>
                                </div>
                            </div>
                            <div className="savings-summary-item">
                                <p>Time saved</p>
                                <span style={{ color: 'white', fontWeight: '500' }}>5 hours</span>
                            </div>
                        </div>
                        <h2 style={{color: 'white', fontSize: '24px', fontWeight: '600'}}>Projected savings</h2>
                        <div className="savings-summary-list">
                            <div className="savings-summary-item">
                                <p>Projected monthly savings</p>
                                <span style={{ color: '#75a5ff', fontWeight: '300' }}>76h : 3m</span>
                            </div>
                            <div className="savings-summary-item">
                                <p>Projected yearly savings</p>
                                <span style={{ color: '#75a5ff', fontWeight: '300' }}>912h : 30m</span>
                            </div>
                        </div>
                    </div>
                )}
                </div>
            </div>
            <SideProfile />
        </div>
    );
}
