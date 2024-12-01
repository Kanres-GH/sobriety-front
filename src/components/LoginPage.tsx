import { Link, Navigate } from 'react-router-dom';
import logo from '../static/imgs/logo.svg'
import '../static/css/reg-log.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signIn } from '../api_service';
import { useAuth } from './AuthProvider';

export default function LoginPage() {
    const { isLoggedIn } = useAuth();
    const { setToken, setLoginname } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    if (isLoggedIn) {
        return <Navigate to="/tracker/dashboard" replace />;
    }

    function onSubmit() {
        signIn(username, password)
        .then((data) => {
            setToken(data.accessToken);
            setLoginname(username);
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("username", username);
            navigate("/tracker/dashboard");
        }) .catch((error) => {
            console.error("Sign-in failed", error);
            alert(error.response?.data?.message || "An error occured while signing in.");
        });
    }
    
    return (
        <div className='reg-log'>
            <div className="reg-log-img" />
            <div className="reg-log-main">
                <div className="reg-log-main-content">
                    <img src={logo} alt="New Me Logo" style={{width: '40vw', alignSelf: 'center', minWidth: '350px'}} />
                    <hr style={{display: 'block', borderColor: '#ffffff', border: 0, height: '1px', borderTop: '1px solid #1c1c1c'}}/>
                    <div className="reg-log-main-content-heading">
                        <h1 style={{fontWeight: '500', fontSize: '2em'}}>Log into New Me</h1>
                    </div>
                    <div className="reg-log-main-content-form">
                        <form>
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="username">Username</label>
                                <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="reg-log-main-content-form-input">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </form>
                    </div>
                    
                    <button className='login-btn' type='submit' onClick={onSubmit}>Sign in</button>
                    <p>Don't have an account? <Link to='/register'><span className='reg-log-span'>Sign up</span></Link></p>
                </div>
            </div>
        </div>
    );
}