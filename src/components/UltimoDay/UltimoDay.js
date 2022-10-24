import styled from "styled-components";
import React from "react";


export default function UltimoDay({ b, selecionado}){
    return(
        <Botao changeStatus={selecionado}>
            <button disabled={true}>{b}</button>
        </Botao>
    )
};

const Botao = styled.div`
       button{
        width: 30px;
        height: 30px;
        margin-top: 10px;
        margin-right: 10px;
        background-color: ${props => props.changeStatus?"gray":"#ffffff"};
        color: ${props => props.changeStatus?"#ffffff":"gray"};
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-size: 19.98px;
       }
`;