import { Link } from "react-router-dom";
type UserData = {
    username: string,
    email: string,
    password: string,
    cpassword: string,
    addiction: string,
}

type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
    errors: {
        username: string;
        email: string;
        password: string;
        cpassword: string;
        addiction: string;
    };
}

export default function UserDataForm({ username, email, password, cpassword, updateFields, errors }: UserFormProps) {
    return (
        <>
            <div className="reg-log-main-content-heading">
                <h1 style={{ fontWeight: '500', fontSize: '2em', letterSpacing: 1.5 }}>Create a new account</h1>
            </div>
            <div className="reg-log-main-content-form-input">
                <label htmlFor="username">Username:</label>
                <input
                    autoFocus
                    required
                    type="text"
                    value={username}
                    onChange={(e) => updateFields({ username: e.target.value })}
                    placeholder="Enter your new username"
                />
                {errors.username && <p style={{ fontSize: '12px', color: 'red' }}>{errors.username}</p>}
            </div>

            <div className="reg-log-main-content-form-input">
                <label htmlFor="email">Email:</label>
                <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => updateFields({ email: e.target.value })}
                    placeholder="inbox@mail.com"
                />
                {errors.email && <p style={{ fontSize: '12px', color: 'red' }}>{errors.email}</p>}
            </div>

            <div className="reg-log-main-content-form-input">
                <label htmlFor="password">Password:</label>
                <input
                    required
                    type="password"
                    value={password}
                    onChange={(e) => updateFields({ password: e.target.value })}
                    placeholder="Enter your new password"
                />
                {errors.password && <p style={{ fontSize: '12px', color: 'red' }}>{errors.password}</p>}
            </div>

            <div className="reg-log-main-content-form-input">
                <label htmlFor="cpassword">Confirm Password:</label>
                <input
                    required
                    type="password"
                    value={cpassword}
                    onChange={(e) => updateFields({ cpassword: e.target.value })}
                />
                {errors.cpassword && <p style={{ fontSize: '12px', color: 'red' }}>{errors.cpassword}</p>}
            </div>
            <p>Already have an account? <Link to='/login'><span className='reg-log-span'>Log in</span></Link></p>
        </>
    );
}