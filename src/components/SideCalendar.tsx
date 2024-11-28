import '../static/css/main-page.css';

export default function SideCalendar() {
    const currentDate = new Date();
        const daysToDisplay = Array.from({ length: 8 }, (_, index) => {
        const date = new Date();
        date.setDate(currentDate.getDate() - 2 + index);
        return date;
    });

    return (
        <div className="side-calendar">
            <div className="side-calendar-header">
                <h3 style={{ color: 'white' }}>{currentDate.toLocaleString('en-us', { month: 'long' })}</h3>
                <p style={{ color: '#ababab' }}>{currentDate.getFullYear()}</p>
                {/* <a href="#" className="side-calendar-add-reminder" style={{ color: '#00aaff' }}>
                    Add reminder
                </a> */}
            </div>
            <div className="side-calendar-days">
                {daysToDisplay.map((day, index) => {
                    const isToday = day.toDateString() === currentDate.toDateString();
                    return (
                        <div
                            key={index}
                            className="side-calendar-day"
                            style={{
                                backgroundColor: isToday ? '#386955' : 'transparent',
                            }}
                        >
                            <p>{day.toLocaleString('en-us', { weekday: 'short' })}</p>
                            <p style={{fontWeight: 'bold', fontSize: '15px'}}>{day.getDate()}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}