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
import { AuthProvider } from './components/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    {/* Глобальные страницы */}
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    {/* Для них нужен логин */}
                    <Route path='*' element={<ProtectedRoute><PageNotFound /></ProtectedRoute>} />
                    <Route path='/tracker/dashboard' element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
                    <Route path='/settings' element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
                    <Route path='/community/feed' element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
                    <Route path='/community/following' element={<FeedFollowing />} />
                    <Route path='/tracker/savings' element={<ProtectedRoute><SavingsPage /></ProtectedRoute>} />
                    <Route path='/tracker/calendar' element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
                    <Route path='/daily/workbook' element={<ProtectedRoute><WorkbookPage /></ProtectedRoute>} />
                    <Route path='/daily/motivation' element={<ProtectedRoute><MotivationPage /></ProtectedRoute>} />
                    <Route path='/community/profile' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}


