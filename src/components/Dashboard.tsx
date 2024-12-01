import '../static/css/main-page.css'
import MilestoneTracker from './MileStoneTracker';
import DaysTracker from './DaysTracker';
import CurrentMilestone from './CurrentMilestone';
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [sobrietyData, setSobrietyData] = useState<any>(null);

    useEffect(() => {
        const savedData = localStorage.getItem("sobrietyData");
        if (savedData) {
            setSobrietyData(JSON.parse(savedData));
        }
    }, []);

    if (!sobrietyData) {
        return <p>No sobriety data available</p>;
    }

    return (
        <div className="dashboard-grid">
            <div className="dashboard-grid-item grid-item-1">
                <DaysTracker />
            </div>
            <div className="dashboard-grid-item grid-item-2">
                <div className="dashboard-milestone-tracker">
                    <MilestoneTracker />
                </div>
                
                <h2 style={{color: 'white', fontSize: '18px', fontWeight: '500'}}>So far I have saved...</h2>
                <div className="dashboard-block" style={{    justifyContent: "space-between"}}>
                    <p style={{color: '#D6D6D6'}}>Money saved:</p>
                    <span style={{color: '#77FF6A', fontWeight: 'bold'}}>${sobrietyData.moneySpent === null ? "0" : sobrietyData.moneySpent}</span>
                </div>
                
                <h2 style={{color: 'white', fontSize: '18px', fontWeight: '500'}}>I'm doing this because...</h2>
                <div className="dashboard-block" style={{justifyContent: 'center'}}>
                    <p style={{color: '#D6D6D6', fontSize: '16px'}}>{sobrietyData.sobrietyReason}</p>
                </div>
            </div>
            
            <div className="dashboard-grid-item grid-item-3">
                <CurrentMilestone />
            </div>
        </div>
    );
}