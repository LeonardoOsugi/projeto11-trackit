import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <AuthContext.Provider value={{email, setEmail, senha, setSenha}}>
            {props.children}
        </AuthContext.Provider>
    )
}