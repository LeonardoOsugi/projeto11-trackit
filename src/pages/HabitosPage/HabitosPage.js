import Topo from "../../components/Topo/Topo";
import Menu from "../../components/Menu/Menu";
import styled from "styled-components";
import { ADDHABITO } from "../../constants/addHabito";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { CONTEUDO } from "../../constants/conteudo";

export default function HabitosPage(){
    const [listaHabito, setListaHabito] = useState([]);
    const [days, setDays] = useState([]);
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/habits`)
        
        promisse.then((res) => {
            setListaHabito(res.data);
            setDays(res.data.days);
        });
        promisse.catch((err) =>{
            console.log(err.response.data);
        });

    },[]);

    function AddHabito(){
        return(
            <h1>habito</h1>
        )
    }

    return(
        <>
            <Topo/>
            <ADDHABITO>
                <p>Meus hábitos</p>
                <button onClick={AddHabito}>+</button>
            </ADDHABITO>
            <CONTEUDO>
                {AddHabito}
                {listaHabito.length === 0 && <div>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>}
            </CONTEUDO>
            <Menu/>
        </>
    )
}