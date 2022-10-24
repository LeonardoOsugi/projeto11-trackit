import styled from "styled-components";
import React, { useState } from "react";
import Checkao from "../../assets/images/Checkao.png";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

export function Lesgo({id, name, sequencia, recorde, done, tamanhoListaP, setPorcent, setRealizado}){

    const[tamanhoListaS, setTamanhoListaS] = useState([]);
    const [feito, setFeito] = useState(false);
    console.log(done);
    const token = JSON.parse(localStorage.getItem('token'));

    function verifSelecionado(id){

        setFeito(true);

        const urlPost = `${BASE_URL}/habits/${id}/check`;

        const body = {
            done:true
        }

        const promisse = axios.post(urlPost, body, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

        promisse.then(() => {
            const newListaS = [...tamanhoListaS, id];
            setTamanhoListaS(newListaS);
            setPorcent((tamanhoListaS.length/tamanhoListaP)*100);
            setRealizado(true);
            console.log("deu certo");
        });
        promisse.catch((err) =>{
            alert(err.response.data.message);
        });
    }

    function verifNSelecionado(id){

        setFeito(false);

        const urlPost = `${BASE_URL}/habits/${id}/uncheck`;

        const body = {
            done:false
        }

        const promisse = axios.post(urlPost, body, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

        promisse.then(() => {
            tamanhoListaS.push(id);
            console.log("deu certo");
        });
        promisse.catch((err) =>{
            alert(err.response.data.message);
        });
    }
    return(
        <HojeHabito>
            <Contexto>
                <h1>{name}</h1>
                <p>Sequência atual: {sequencia === undefined?"0":sequencia} dias</p>
                <p>Seu recorde: {recorde === undefined?"0":recorde} dias</p>
            </Contexto>
            <Check onClick={() => feito === false?verifSelecionado(id):verifNSelecionado(id)} bk={feito === false?"#EBEBEB":"#8FC549"}>
                        <img src={Checkao} alt="check"/>
            </Check>
        </HojeHabito>
    )
};

const HojeHabito = styled.div`
        margin-left: 10px;
        margin-bottom: 10px;
        width: 340px;
        height: 94px;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
`;

const Contexto = styled.div`
        flex-direction: column;
        h1{
            font-family: 'Lexend Deca';
            font-size: 19.98px;
        }
        p{
            margin-top: 10px;
            font-family: 'Lexend Deca';
            font-size: 12.98px
        }
`;

const Check = styled.div`
        width: 69px;
        height: 69px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.bk};
        border-radius: 5px;
        img{
            width: 35.09px;
            height:20px;
        }
`;