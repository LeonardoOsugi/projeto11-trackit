import styled from "styled-components";
import React, { useState } from "react";
import UltimoDay from "../UltimoDay/UltimoDay";
import lixo from "../../assets/images/Group.png"
import axios from "axios";
import { useAuth } from "../../providers/auth";
import { BASE_URL } from "../../constants/urls";

export default function ProcuraHabito({ postid, name, day}){ 
    const [apareca, setApareca] = useState("none");
    const {selectDay, setSelectDay} = useAuth();
    const token = JSON.parse(localStorage.getItem('token'));

    const btnDay = ["D", "S", "T", "Q", "Q", "S", "S"];

    function escolhaDelete(){
        alert("Deseja Realmente remover esse Hábito?")
        setApareca("block");
    }

    function cancelar(){
        setApareca("none");
    }

    function deletar(id){
        axios.delete(`${BASE_URL}/habits/${id}`, 
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setSelectDay(selectDay.filter(postid !== id));
    }
    return(
        <AcheiHabito>
            <End bkend={apareca === "block" && "none"}>
                <img onClick={() => escolhaDelete()} src={lixo} alt="lixo"/>
            </End>
            <ButtonEnd bkbtnend={apareca}>
                <p>Realmente deseja deletar esse Habito?</p>
                <button onClick={() => cancelar()}>Cancelar</button>
                <button className="deletar" onClick={() => deletar(postid)}>Delete</button>
                <hr/>
            </ButtonEnd>
            <p>{name}</p>
            <OrganizandoACasa>
                {btnDay.map((b, i) => <UltimoDay key={i} i={i} selecionado={day.includes(i)} b={b}/>)}
            </OrganizandoACasa>
        </AcheiHabito>
    )
};

const AcheiHabito = styled.div`
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        background-color: #ffffff;
        width: 340px;
        height: 100px;
        padding: 20px;
        border-radius: 5px;
`;

const OrganizandoACasa = styled.div`
       display: flex;
`;

const End = styled.div`
        display: ${props => props.bkend};
        justify-content: flex-start;
`;

const ButtonEnd = styled.div`
        display: ${props => props.bkbtnend};
        button{
            background-color: blue;
            color: #ffffff;
            border-radius: 5px;
        }
        .deletar{
            background-color: red;
        }
`;