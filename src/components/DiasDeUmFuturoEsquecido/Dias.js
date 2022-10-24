// import { useState } from "react";
import React from "react";
import styled from "styled-components";


export default function Dias({d, i, selecionado, setSelecionado}){
    let newSelecionado = [...selecionado];
    function addDia(i){
        if(selecionado.includes(i) === false){
            newSelecionado = [...selecionado, i];
            setSelecionado(newSelecionado);
        }else{
            newSelecionado = newSelecionado.filter((e) =>{
                if(e !== i){
                    return true;
                }
        });
         setSelecionado(newSelecionado);
        };
    }
    return(
        <Botao corbcgr={selecionado.includes(i) === false?"#ffffff": "#D4D4D4"} corcolor={selecionado.includes(i) === false?"#D4D4D4": "#ffffff"} >
            <button type="button" onClick={() =>addDia(i)}>{d}</button>
        </Botao>
    )
};

const Botao = styled.div`
      margin-left: 5px;
      width: 30px;
      height: 30px;
      button{
        background-color: ${props => props.corbcgr};
        color: ${props => props.corcolor};
        font-family: 'Lexend Deca';
        font-size: 19.98px;
        border-radius: 5px;
      }
`;