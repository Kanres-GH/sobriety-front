import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
    token: string | null;
    username: string | null;
    setToken: (token: string | null) => void;
    setLoginname: (username: string | null) => void;
    isLoggedIn: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [username, setLoginname] = useState<string | null>(localStorage.getItem("username"));
    const isLoggedIn = Boolean(token);

    return (
        <AuthContext.Provider value={{ token, setToken, username, setLoginname, isLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
