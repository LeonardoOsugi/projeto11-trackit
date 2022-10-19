import GlobalStyle from "./assets/styles/GlobalStyle";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
       <GlobalStyle/>
       <Routes>
           <Route path="/" element={<LoginPage/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
