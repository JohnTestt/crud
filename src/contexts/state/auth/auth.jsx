import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const storedUser = localStorage.getItem('user');

    const [user, setUser] = useState(
        storedUser ? JSON.parse(storedUser)
            : { logged: false, email: '', photo: '' }
    );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);