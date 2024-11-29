import { useState } from "react";
import Navbar from "./Navbar";
import NavMain from "./NavMain";
import SideProfile from "./SideProfile";

export default function CalendarPage() {
    const today = new Date();
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());

    const soberDays = ["2024-11-20", "2024-11-21", "2024-11-22", "2024-11-19", "2024-11-23", "2024-11-24", "2024-11-25", "2024-11-26", "2024-11-28", "2024-11-29"];
    const resetDays = ["2024-11-27"];

    const getDaysInMonth = (year: number, month: number) => {
        const date = new Date(year, month, 1);
        const days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };

    const days = getDaysInMonth(currentYear, currentMonth);

    const firstDayIndex = days[0].getDay();

    const calendarDays = Array(firstDayIndex === 0 ? 6 : firstDayIndex - 1)
        .fill(null) // Fill empty days before the start of the month
        .concat(days);

    const isSpecialDay = (date: Date, type: string) => {
        const formattedDate = date.toLocaleDateString("en-CA");
        if (type === "sober") return soberDays.includes(formattedDate);
        if (type === "reset") return resetDays.includes(formattedDate);
        return false;
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentYear(currentYear - 1);
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentYear(currentYear + 1);
            setCurrentMonth(0);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    return (
        <div className="main">
            <Navbar />
            <div className="main-calendar">
                <NavMain />
                <div className="calendar-content">
                    <div className="calendar-box gradient-background">
                        <div className="calendar-header">
                            <button onClick={handlePrevMonth} className="calendar-nav-button">
                                &lt; Prev
                            </button>
                            <h2>
                                {new Date(currentYear, currentMonth).toLocaleString("en-us", { month: "long" })} {currentYear}
                            </h2>
                            <button onClick={handleNextMonth} className="calendar-nav-button">
                                Next &gt;
                            </button>
                        </div>
                        <div className="calendar-day-header">
                            <div className="calendar-day-weekday">Mon</div>
                            <div className="calendar-day-weekday">Tue</div>
                            <div className="calendar-day-weekday">Wed</div>
                            <div className="calendar-day-weekday">Thu</div>
                            <div className="calendar-day-weekday">Fri</div>
                            <div className="calendar-day-weekday">Sat</div>
                            <div className="calendar-day-weekday">Sun</div>
                        </div>
                        <div className="calendar-grid">
                            {calendarDays.map((day, index) => (
                                <div
                                    key={index}
                                    className={`calendar-day ${
                                        day
                                            ? isSpecialDay(day, "sober")
                                                ? "calendar-sober"
                                                : isSpecialDay(day, "reset")
                                                ? "calendar-reset"
                                                : day.toDateString() === today.toDateString() &&
                                                  currentYear === today.getFullYear() &&
                                                  currentMonth === today.getMonth()
                                                ? "calendar-current"
                                                : ""
                                            : "calendar-empty"
                                    }`}
                                >
                                    {day ? day.getDate() : ""}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SideProfile />
        </div>
    );
}
