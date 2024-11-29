import '../static/css/main-page.css'

const milestones = [
    { label: 'Five Oh', completed: true, labelShort: '50' },
    { label: '2 Months', completed: true, labelShort: '2M' },
    { label: '10 Weeks', completed: true, labelShort: '10W' },
    { label: '11 Weeks', completed: false, labelShort: '11W' },
    { label: '12 Weeks', completed: false, labelShort: '12W' },
];

export default function MilestoneTracker() {
  return (
    <>
        <div className="milestone-tracker">
            <h2 className="milestone-title" style={{fontWeight: '500'}}>10 Weeks</h2>
            <div className="milestone-progress-bar">
                <div className="progress-line">
                {milestones.map((milestone, index) => (
                    <div
                    key={index}
                    className={`milestone-circle ${
                        milestone.completed ? 'completed' : 'upcoming'
                    }`}
                    >
                    {milestone.completed ? <span>&#10003;</span> : <span style={{fontWeight: '400'}}>{milestone.labelShort}</span>}
                    </div>
                ))}
                </div>
                <div className="milestone-labels">
                {milestones.map((milestone, index) => (
                    <div key={index} className="milestone-label" style={{fontWeight: '200', letterSpacing: 0.5}}>
                    {milestone.label}
                    </div>
                ))}
                </div>
            </div>
        </div>
        <p style={{fontSize: 'small'}}>You and <span style={{fontWeight: 'bold', color: '#7CB6FF'}}>581 others</span> currently have this milestone.</p>
    </>
  );
}
