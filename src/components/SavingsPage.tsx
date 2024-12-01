import { useState } from 'react';
import '../static/css/main-page.css';
import Navbar from './Navbar';
import NavMain from './NavMain';
import SideProfile from './SideProfile';
import editIcon from '../static/imgs/icons/edit.svg'


export default function SavingsPage() {
    const [selectedTab, setSelectedTab] = useState('Money');
    const [moneyData, setMoneyData] = useState({
        moneyPerDay: "$7.00",
        overallSaved: "$399.00",
    });
    const [timeData, setTimeData] = useState({
        timePerDay: { hours: 1, minutes: 36 }, // Example: 1h : 36m
        overallTimeSaved: { hours: 93, minutes: 0 }, // Example: 93h : 0m
    });

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editTarget, setEditTarget] = useState<{
        label: string;
        value: any;
        type: 'money' | 'time';
    } | null>(null);

    const openDialog = (label: string, value: any, type: 'money' | 'time') => {
        setEditTarget({ label, value, type });
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setEditTarget(null);
        setIsDialogOpen(false);
    };

    const handleSubmit = (newValue: any) => {
        if (editTarget?.type === 'money') {
            setMoneyData((prev) => ({
                ...prev,
                [editTarget.label]: newValue,
            }));
        } else if (editTarget?.type === 'time') {
            setTimeData((prev) => ({
                ...prev,
                [editTarget.label]: newValue,
            }));
        }
        closeDialog();
    };


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
                                <div className="savings-summary-item-edit">
                                    <span style={{ color: '#53fc53' }}>$7.00</span><img src={editIcon}
                                    onClick={() =>
                                        openDialog('moneyPerDay', moneyData.moneyPerDay, 'money')
                                    } />
                                </div>
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
                                <div className="savings-summary-item-edit">
                                    <span style={{ color: '#53fc53' }}>1.6 hours</span><img src={editIcon}
                                    onClick={() =>
                                        openDialog('timePerDay', timeData.timePerDay, 'time')
                                    } />
                                </div>
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
            {isDialogOpen && editTarget && (
                <Dialog
                    label={editTarget.label}
                    value={editTarget.value}
                    onClose={closeDialog}
                    onSubmit={handleSubmit}
                />
            )}
            <SideProfile />
        </div>
    );
}

type DialogProps = {
    label: string;
    value: any;
    onClose: () => void;
    onSubmit: (newValue: any) => void;
};

function Dialog({ label, value, onClose, onSubmit }: DialogProps) {
    const [inputHours, setInputHours] = useState(value.hours || 0);
    const [inputMinutes, setInputMinutes] = useState(value.minutes || 0);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const parsedValue = { hours: parseInt(inputHours), minutes: parseInt(inputMinutes) };
        onSubmit(parsedValue);
    };

    return (
        <div className="dialog-overlay">
            <div className="dialog-box">
                
                {typeof value === 'object' ? (
                    <form onSubmit={handleFormSubmit}>
                        <h2>Edit spent time per day</h2>
                        <div>
                            <label>Hours:</label>
                            <input
                                type="number"
                                value={inputHours}
                                onChange={(e) => setInputHours(e.target.value)}
                                min={0}
                                required
                            />
                        </div>
                        <div>
                            <label>Minutes:</label>
                            <input
                                type="number"
                                value={inputMinutes}
                                onChange={(e) => setInputMinutes(e.target.value)}
                                min={0}
                                max={59}
                                required
                            />
                        </div>
                        <div className="dialog-buttons">
                            <button type="button" onClick={onClose}>
                                Cancel
                            </button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h2>Edit spent money per day</h2>
                        <input
                            type="text"
                            value={value}
                            readOnly
                        />
                        <div className="dialog-buttons">
                            <button type="button" onClick={onClose}>
                                Close
                            </button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}