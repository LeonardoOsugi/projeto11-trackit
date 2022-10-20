import styled from "styled-components";
import React from 'react';
import { useAuth } from "../../providers/auth";
export default function NavbarInputs(){
    const {emails, setEmail, senha, setSenha} = useAuth();
    return(
            <Inputs>
                <input type="email" value={emails} name="email" placeholder="email" onChange={e => setEmail(e.target.value)}required/>
                <input type="password" value={senha} name="senha" placeholder="senha" onChange={e => setSenha(e.target.value)}required/>
           </Inputs>
    )
};

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

