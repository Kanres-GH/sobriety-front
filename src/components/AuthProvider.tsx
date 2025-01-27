import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import axios from "axios";
type AuthContextType = {
    token: string | null;
    username: string | null;
    loading: boolean;
    setToken: (token: string | null) => void;
    setLoginname: (username: string | null) => void;
    isLoggedIn: boolean;
    fetchUsername: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    // const [username, setLoginname] = useState<string | null>(localStorage.getItem("username"));
    const [username, setLoginname] = useState<string | null>(null);
    const isLoggedIn = Boolean(token);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUsername = async () => {
        if (!token) return;
        try {
            setLoading(true);
            const response = await axios.get("https://diploma-backend-3e4r.onrender.com/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const users = response.data;
            const storedLogin = localStorage.getItem("username");
            const currentUser = users.find(
                (user: any) =>
                    user.user.Email === storedLogin || user.user.Name === storedLogin
            );
            // console.log(currentUser.user.Name);

            if (currentUser) {
                setLoginname(currentUser.user.Name);
            }
        } catch (error) {
            console.error("Failed to fetch username:", error);
        } 
        // finally {
        //     setLoading(false);
        // }
    };

    const fetchDependency = async() => {
        if (!token) return;
        try {
            setLoading(true);
            const response = await axios.get("https://diploma-backend-3e4r.onrender.com/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const users = response.data;
            const storedLogin = localStorage.getItem("username");
            const currentUser = users.find(
                (user: any) =>
                    user.user.Email === storedLogin || user.user.Name === storedLogin
            );
            const dependencies = await axios.get("https://diploma-backend-3e4r.onrender.com/auth/deps");
            // console.log(dependencies.data.find((i : any) => i.id === currentUser.dependency[0].id));
            // console.log(currentUser.dependency[0].id);
            if (currentUser) {
                localStorage.setItem("addiction", dependencies.data.find((i : any) => i.id === currentUser.dependency[0].id).name);
            }

        } catch (error) {
            console.error("Failed to fetch addiction:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsername();
        fetchDependency();
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, username, setLoginname, isLoggedIn, fetchUsername, loading }}>
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
