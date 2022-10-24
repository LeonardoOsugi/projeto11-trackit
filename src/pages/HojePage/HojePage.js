import Topo from "../../components/Topo/Topo";
import Menu from "../../components/Menu/Menu";
import styled from "styled-components";
import { ADDHABITO } from "../../constants/addHabito";
import { Tudo } from "../../constants/xTudo";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { CONTEUDO } from "../../constants/conteudo";
import {Lesgo} from "../../components/LesGo/LesGo";
import dayjs from "dayjs";
import "dayjs/locale/pt";

export default function HojePage(){
    const date = dayjs().locale("pt").format("dddd, DD/MM").replace("-feira", "");

    const formatDate = date.charAt(0).toUpperCase() + date.slice(1);

    const[listaHoje, setListaHoje] = useState([]);
    const [realizado, setRealizado] = useState(false);
    const tamanhoListaP = listaHoje.length;
    const [porcent, setPorcent] = useState(0);
    console.log(porcent);
    const token = JSON.parse(localStorage.getItem('token'));


    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/habits`, 
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        promisse.then((res) => {
            setListaHoje(res.data);
        });
        promisse.catch((err) =>{
            console.log(err.response.data);
        });

    },[]);
    return(
        <>
            <Topo/>
            <Tudo>
                <ADDHABITO>
                    <HeaderHoje cor={realizado === false?"#BABABA":"#8FC549"}>
                        <h1>{formatDate}</h1>
                        <p>{realizado === false?"Nenhum hábito concluído ainda":`${porcent.toFixed(1)}% dos hábitos concluídos`}</p>
                    </HeaderHoje>
                </ADDHABITO>
                <CONTEUDO>
                    <HabitosHoje>
                        {listaHoje.map((h) => <Lesgo key={h.id} id={h.id} name={h.name} sequencia={h.currentSequence} recorde={h.highestSequence} done={h.done} tamanhoListaP={tamanhoListaP} setPorcent={setPorcent} setRealizado={setRealizado}/>)}
                    </HabitosHoje>
                </CONTEUDO>
            </Tudo>
            <Menu/>
        </>
    )
};

const HabitosHoje = styled.div`
        display: flex;
        flex-wrap: wrap;
`;

const HeaderHoje = styled.div`
        flex-direction: column;
        p{
            color: ${props => props.cor};
        }
`;