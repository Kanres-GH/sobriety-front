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

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/dashboard' element={<MainPage />} />
                <Route path='/settings' element={<SettingsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/community' element={<CommunityPage />} />
                <Route path='/savings' element={<SavingsPage />} />
                <Route path='/calendar' element={<CalendarPage />} />
                <Route path='/workbook' element={<WorkbookPage />} />
            </Routes>
        </Router>  
    )
}


