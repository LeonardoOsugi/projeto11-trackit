import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [emails, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("");
    return (
        <AuthContext.Provider value={{emails, setEmail, senha, setSenha, name, setName, foto, setFoto}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext);