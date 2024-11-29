import { Link } from 'react-router-dom';
import '../static/css/main-page.css';

interface SideCalendarProps {
    soberDays: string[];
    resetDays: string[];
}

export default function SideCalendar({ soberDays, resetDays }: SideCalendarProps) {
    const currentDate = new Date();
    const daysToDisplay = Array.from({ length: 8 }, (_, index) => {
        const date = new Date();
        date.setDate(currentDate.getDate() - 3 + index);
        return date;
    });

    const isSpecialDay = (date: Date, type: "sober" | "reset") => {
        const formattedDate = date.toLocaleDateString("en-CA");
        if (type === "sober") return soberDays.includes(formattedDate);
        if (type === "reset") return resetDays.includes(formattedDate);
        return false;
    };

    return (
        <div className="side-calendar">
            <div className="side-calendar-header">
                <h3 style={{ color: 'white' }}>{currentDate.toLocaleString('en-us', { month: 'long' })}</h3>
                <p style={{ color: '#ababab' }}>{currentDate.getFullYear()}</p>
            </div>
            <div className="side-calendar-days">
                {daysToDisplay.map((day, index) => {
                    const isToday = day.toDateString() === currentDate.toDateString();
                    const isSober = isSpecialDay(day, "sober");
                    const isReset = isSpecialDay(day, "reset");

                    return (
                        <Link to="/tracker/calendar">
                            <div
                                key={index}
                                className="side-calendar-day"
                                style={{
                                    backgroundColor: isToday
                                        ? '#456299'
                                        : isSober
                                        ? '#377a4b' // Customize sober day color
                                        : isReset
                                        ? '#822c2c' // Customize reset day color
                                        : 'transparent',
                                }}
                            >
                                <p style={{ fontWeight: '300', fontSize: '12px' }}>
                                    {day.toLocaleString('en-us', { weekday: 'short' })}
                                </p>
                                <p style={{ fontWeight: '600', fontSize: '15px' }}>{day.getDate()}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
