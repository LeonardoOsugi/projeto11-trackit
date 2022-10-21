import GlobalStyle from "./assets/styles/GlobalStyle";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';

import LoginPage from "./pages/LoginPage/LoginPage";
import CadastroPage from "./pages/CadastroPage/CadastroPage";
import HojePage from "./pages/HojePage/HojePage";
import HabitosPage from "./pages/HabitosPage/HabitosPage";
import HistoricoPage from "./pages/HistoricoPage/HistoricoPage";

function App() {
  return (
    <BrowserRouter>
       <GlobalStyle/>
       <Routes>
           <Route path="/" element={<LoginPage/>}/>
           <Route path="/cadastro" element={<CadastroPage/>}/>
           <Route path="/hoje" element={<HojePage/>}/>
           <Route path="/habitos" element={<HabitosPage/>}/>
           <Route path="/historico"element={<HistoricoPage/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
