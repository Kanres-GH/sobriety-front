import logo from '../static/imgs/logo.svg'
import '../static/css/reg-log.css'
import useMultiForm from '../static/scripts/useMultiForm';
import UserDataForm from './UserDataForm';
import RegisterFinalForm from './RegisterFinalForm';
import AddictionListForm from './AddictionListForm';
import { FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getPersonDependencies, signUp } from '../api_service';
import { useAuth } from './AuthProvider';
import UserDataFormAdd from './UserDataFormAdd';

type FormData = {
    username: string,
    email: string,
    password: string,
    cpassword: string,
    addiction: string,
}

const INITIAL_DATA: FormData = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    addiction: "",
}

export default function RegisterPage() {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn) {
        return <Navigate to="/tracker/dashboard" replace />;
    }
    const { setToken, setLoginname } = useAuth();
    const [data, setData] = useState(INITIAL_DATA);
    const [addiction, setAddiction] = useState("Select from the list below.");
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
        addiction: "",
    });

    const navigate = useNavigate();
    const { currentStepIndex, step, next, back, isFirstStep, isLastStep } = useMultiForm([
        <UserDataForm {...data} updateFields={updateFields} errors={errors} />,
        <AddictionListForm addiction={addiction} setAddiction={setAddiction} error={errors.addiction}/>,
        <UserDataFormAdd />,
        <RegisterFinalForm />,
    ]);

    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            for (const key in fields) {
                if (key === "username" && fields[key]!.length >= 3) {
                    newErrors.username = "";
                }
                if (key === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields[key]!)) {
                    newErrors.email = "";
                }
                if (key === "password" && fields[key]!.length >= 6) {
                    newErrors.password = "";
                }
                if (key === "cpassword" && fields[key] === data.password) {
                    newErrors.cpassword = "";
                }
            }
            return newErrors;
        });
    }

    function validateStep(): boolean {
        const newErrors = { ...errors };
    
        if (currentStepIndex === 0) {
            if (!data.username.trim() || data.username.length < 3) {
                newErrors.username = "Username must be at least 3 characters long.";
            } else {
                newErrors.username = "";
            }
            if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                newErrors.email = "Please enter a valid email.";
            } else {
                newErrors.email = "";
            }
            if (!data.password.trim() || data.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters long.";
            } else {
                newErrors.password = "";
            }
            if (data.cpassword !== data.password) {
                newErrors.cpassword = "Passwords are not the same.";
            } else {
                newErrors.cpassword = "";
            }
        } else if (currentStepIndex === 1) {
            if (addiction === "Select from the list below.") {
                newErrors.addiction = "Please select an addiction before proceeding.";
            } else {
                newErrors.addiction = "";
            }
        }

        setErrors(newErrors);

        return !Object.values(newErrors).some((error) => error !== "");
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();

        if (isLastStep) {
            const {username, email, password} = data;
            signUp(username, email, password)
            .then((response) => {
                setToken(response.accessToken);
                setLoginname(username);
                getPersonDependencies(response.accessToken, addiction);
                console.log("Addiction: ", addiction);
                localStorage.setItem("username", username);
                // localStorage.setItem("addiction", addiction);
                alert("Account successfully created!");
                navigate("/tracker/dashboard");
            }) .catch((error) => {
                console.error("Sign-up failed:", error);
                alert(error.response?.data?.message || "An error occured while signing up");
            });
        } else if (validateStep()) {
            next();
        }
    }

    function handleBack() {
        if (!isFirstStep) {
            const newErrors = { ...errors };
            if (currentStepIndex === 1) newErrors.addiction = "";
            setErrors(newErrors);
            back();
        }
    }

    return (
        <div className="reg-log">
            <div className="reg-log-img" />
            <div className="reg-log-main">
                <div className="reg-log-main-content">
                    <img
                        src={logo}
                        alt="New Me Logo"
                        style={{ width: '40vw', alignSelf: 'center', minWidth: '350px' }}
                    />
                    <hr
                        style={{
                            display: 'block',
                            borderColor: '#ffffff',
                            border: 0,
                            height: '1px',
                            borderTop: '1px solid #1c1c1c',
                        }}
                    />
                    <div className="reg-log-main-content-form">
                        <form onSubmit={onSubmit}>
                            {step}
                            <div className="reg-log-btns">
                                {!isFirstStep && (
                                    <button
                                        className="reg-log-btn"
                                        type="button"
                                        onClick={handleBack}
                                    >
                                        Back
                                    </button>
                                )}
                                <button className="reg-log-btn" type="submit">
                                    {isLastStep ? "Sign Up" : "Next"}
                                </button>
                            </div>
                        </form>
                    </div>
                    <hr
                        style={{
                            display: 'block',
                            borderColor: '#ffffff',
                            border: 0,
                            height: '1px',
                            borderTop: '1px solid #1c1c1c',
                        }}
                    />
                    {isLastStep && (
                        <p>
                            By creating an account, you agree to our{' '}
                            <span className="reg-log-span">Terms of Use</span> and{' '}
                            <span className="reg-log-span">Privacy Policy</span>.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}