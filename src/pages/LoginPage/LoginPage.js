import styled from "styled-components";
import NavbarInputs from "../../components/NavbarLogoInputs/NavbarInputs"
import NavbarLogo from "../../components/NavbarLogoInputs/NavbarLogo";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants/urls";

import React from 'react';
import { useAuth } from "../../providers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const {emails, senha} = useAuth();

    const navegate = useNavigate();

    
    function addInfoL(e){
        e.preventDefault();

        const urlPost = `${BASE_URL}/auth/login`;

        const body = {
            email: emails,
            password: senha
        };

        const promisse = axios.post(urlPost, body);

        promisse.then(() => {
            alert("Login realizado");
            navegate("/hoje");
        });
        promisse.catch((err) => {
            alert(err.response.data.message);
        });
        
    }
    return(
        <ContainerLogin>
          <NavbarLogo/>
          <form onSubmit={addInfoL}>
            <NavbarInputs/>
            <button type="submit">Entrar</button>
          </form>
          <Link to="/cadastro">
            <p>Não tem uma conta? Cadastre-se!</p>
          </Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
       display:flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

       margin: 10px;

       button{
        width: 303px;
        height: 45px;
        color: #ffffff;
        background-color: #52B6FF;
        font-family:'Lexend Deca';
        font-size: 20.98px;
       }
`;