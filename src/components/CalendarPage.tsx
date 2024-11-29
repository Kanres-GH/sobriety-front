import Navbar from "./Navbar";
import NavMain from "./NavMain";
import SideProfile from "./SideProfile";

export default function CalendarPage() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const soberDays = ["2024-11-20", "2024-11-21", "2024-11-22", "2024-11-19", "2024-11-23", "2024-11-24", "2024-11-25", "2024-11-26", "2024-11-28", "2024-11-29"];
    const resetDays = ["2024-11-27"];

    const getDaysInMonth = (year : any, month : any) => {
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

    // Add empty cells before the first day for proper alignment
    const calendarDays = Array(firstDayIndex).fill(null).concat(days);

    // const isSpecialDay = (date : any, type : any) => {
    //         const formattedDate = date.toISOString().split("T")[0];
    //         if (type === "sober") return soberDays.includes(formattedDate);
    //         if (type === "reset") return resetDays.includes(formattedDate);
    //         return false;
    // };

    const isSpecialDay = (date : any, type : any) => {
        const formattedDate = date.toLocaleDateString("en-CA");
        if (type === "sober") return soberDays.includes(formattedDate);
        if (type === "reset") return resetDays.includes(formattedDate);
        return false;
    };

    return (
        <div className="main">
            <Navbar />
            <div className="main-calendar">
                <NavMain />
                <div className="calendar-content">
                    <div className="calendar-box gradient-background">
                        <div className="calendar-header">
                            <h2>
                                {today.toLocaleString("en-us", { month: "long" })} {currentYear}
                            </h2>
                        </div>
                        <div className="calendar-day-header">
                            <div className="calendar-day-weekday">
                                Mon
                            </div>
                            <div className="calendar-day-weekday">
                                Tue
                            </div>
                            <div className="calendar-day-weekday">
                                Wed
                            </div>
                            <div className="calendar-day-weekday">
                                Thu
                            </div>
                            <div className="calendar-day-weekday">
                                Fri
                            </div>
                            <div className="calendar-day-weekday">
                                Sat
                            </div>
                            <div className="calendar-day-weekday">
                                Sun
                            </div>
                        </div>
                        <div className="calendar-grid">
                        {/* Days of the week */}

                        

                        {/* Calendar days */}
                        {calendarDays.map((day, index) => (
                            <div
                            key={index}
                            className={`calendar-day ${
                                day
                                ? isSpecialDay(day, "sober")
                                    ? "calendar-sober"
                                    : isSpecialDay(day, "reset")
                                    ? "calendar-reset"
                                    : day.toDateString() === today.toDateString()
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
