import NavbarLogo from "../../components/NavbarLogoInputs/NavbarLogo";
import NavbarInputs from "../../components/NavbarLogoInputs/NavbarInputs";
import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "../../providers/auth";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export default function CadastroPage(){
    const {emails, senha} = useAuth();
    const [name, setName] = useState("");
    const [foto, setFoto] = useState("");

    const navegate = useNavigate();

    function addCadastro(e){
        e.preventDefault();

        const urlPost = `${BASE_URL}/auth/sign-up`;

        const body = {
            email: emails,
            name: name,
            image: foto,
            password: senha
        };

        const promisse = axios.post(urlPost, body);

        promisse.then(() => {
            alert("Cadaastro realizado");
            navegate("/");
        });
        promisse.catch((err) => {
            alert(err.response.data.message);
        });
    }
    return(
        <ContainerCadastro>
            <NavbarLogo />
            <form onSubmit={addCadastro}>
                <NavbarInputs/>
                <OtherInputs>
                    <input type="name" value={name} name="name" placeholder="nome" onChange={e => setName(e.target.value)}required/>
                    <input type="url" value={foto} name="foto" placeholder="foto" onChange={e => setFoto(e.target.value)}required/>
                </OtherInputs>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </ContainerCadastro>
        
    )
};

const ContainerCadastro = styled.div`
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

const OtherInputs = styled.div`
       display: flex;
       flex-direction: column;
       input{
          width: 303px;
          height:45px;
          margin-bottom: 10px;
          font-family: 'Lexend Deca';
          font-size: 19.976px;
       }  
`;