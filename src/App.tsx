import './static/css/index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import PageNotFound from './components/PageNotFound'
import SettingsPage from './components/SettingsPage'
import CalendarPage from './components/CalendarPage'
import SavingsPage from './components/SavingsPage'
import CommunityPage from './components/CommunityPage'
import ProfilePage from './components/ProfilePage'
import WorkbookPage from './components/WorkbookPage'
// import DailyPage from './components/DailyPage'
import { FeedFollowing } from './components/FeedFollowing'
import MotivationPage from './components/MotivatonPage'

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/tracker/dashboard' element={<MainPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/community/feed' element={<CommunityPage />} />
                <Route path='/community/following' element={<FeedFollowing />} />
                <Route path='/tracker/savings' element={<SavingsPage />} />
                <Route path='/tracker/calendar' element={<CalendarPage />} />
                <Route path='/daily/workbook' element={<WorkbookPage />} />
                <Route path='/daily/motivation' element={<MotivationPage />} />
                <Route path='/community/profile' element={<ProfilePage />} />
            </Routes>
        </Router>  
    )
}


