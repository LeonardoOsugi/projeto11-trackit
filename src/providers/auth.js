import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [emails, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <AuthContext.Provider value={{emails, setEmail, senha, setSenha}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext);