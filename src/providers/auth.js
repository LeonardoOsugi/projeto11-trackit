import React, { useState } from 'react';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [userInfo, setUserInfo] = useState("");
    const [selectDay, setSelectDay] = useState([]);
    // const [name, setName] = useState("");
    // const [foto, setFoto] = useState("");
    return (
        <AuthContext.Provider value={{userInfo, setUserInfo, selectDay, setSelectDay}}>
            {props.children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => React.useContext(AuthContext);