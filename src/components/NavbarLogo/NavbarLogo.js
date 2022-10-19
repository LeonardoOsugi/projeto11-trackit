import styled from "styled-components";
import logo from  "../../assets/images/Group 8.png";
import React from 'react';
import { AuthContext } from "../../providers/auth";
export default function NavbarLogo(){
    const {email, setEmail, senha, setSenha} = React.useContext(AuthContext);
    return(
        <>
            <Tamanho>
                <img src={logo} alt="logo"/>
            </Tamanho>
            <Inputs>
                <input type="email" value={email} name="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" value={senha} name="senha" placeholder="senha" onChange={e => setSenha(e.target.value)}/>
          </Inputs>
        </>
    )
};

const Tamanho = styled.div`
       margin-top: 68px;
       width: 180px;
       height: 178.38px;
       margin-bottom: 20px;
`;

const Inputs = styled.div`
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

