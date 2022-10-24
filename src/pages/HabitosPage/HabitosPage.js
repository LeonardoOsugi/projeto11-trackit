import Topo from "../../components/Topo/Topo";
import Menu from "../../components/Menu/Menu";
import styled from "styled-components";
import { ADDHABITO } from "../../constants/addHabito";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { CONTEUDO } from "../../constants/conteudo";
import Dias from "../../components/DiasDeUmFuturoEsquecido/Dias";
import ProcuraHabito from "../../components/ProcuraHabito/ProcuraHabito";
import { Tudo } from "../../constants/xTudo";
import { useAuth } from "../../providers/auth";

export default function HabitosPage(){
    const btnDay = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [listaHabito, setListaHabito] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");
    const [ativa, setAtiva] = useState("none");
    const [selecionado, setSelecionado] = useState([]);
    const {setSelectDay} = useAuth();

    const token = JSON.parse(localStorage.getItem('token'));


    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/habits`, 
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        promisse.then((res) => {
            setListaHabito(res.data);
            setSelectDay(res.data);
        });
        promisse.catch((err) =>{
            console.log(err.response.data);
        });

    },[]);

    function invocacaoDoHabito(e){
        e.preventDefault();

        const urlPost = `${BASE_URL}/habits`;

        const body = {
            name: nomeHabito,
            days: selecionado
        }

        const promisse = axios.post(urlPost, body, 
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

        promisse.then(() => {
            alert("deu certo");
        });
        promisse.catch((err) =>{
            alert(err.response.data.message);
        });

        setAtiva("none");


    }

    return(
        <>
            <Topo/>
            <Tudo>
                <ADDHABITO>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setAtiva("block")}>+</button>
                </ADDHABITO>
                <CONTEUDO>
                    <CriandoNovoHabito ativa={ativa}>
                        <form onSubmit={invocacaoDoHabito}>
                            <input value={nomeHabito} name="nomeHabito"placeholder="nome do hábito" onChange={(e) => setNomeHabito(e.target.value)}
                            required
                            />
                            <Ladinho>
                            {btnDay.map((d, i) => 
                                <Dias key={i} i={i} d={d} selecionado={selecionado} setSelecionado={setSelecionado}/>
                            )}
                            </Ladinho>
                            <BtnJulgamentoFinal>
                                <p onClick={() => setAtiva("none")}>Cancelar</p>
                                <button type="submit" className="savepoint">Salvar</button>
                            </BtnJulgamentoFinal>
                        </form>
                    </CriandoNovoHabito>
                    {listaHabito.length === 0 ? (<div className="semHabito">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>)
                    :
                    (
                        <FoundHabito>
                            {listaHabito.map((l) => <ProcuraHabito key={l.id} postid={l.id} name={l.name} day={l.days}/>)}
                        </FoundHabito>
                        )}
                </CONTEUDO>
            </Tudo>
            <Menu/>
        </>
    )
};

const CriandoNovoHabito = styled.div`
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: 10px;
      display: ${props => props.ativa};
      flex-direction: row;
      background-color: #ffffff;
      width: 340px;
      height: 180px;
      padding: 20px;
      border-radius: 5px;
      
      input{
        width: 330px;
        height: 45px;
        border-radius: 3px;
        font-size: 19.98px;
      }
`;



const Ladinho = styled.div`
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
`;

const BtnJulgamentoFinal = styled.div`
        margin-top: 60px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: #ffffff;
        color: #52B6FF;
        text-decoration: none;
        font-family: 'Lexend Deca';
        font-size: 15.98px;
        button{
            margin-left: 10px;
            background-color: #52B6FF;
            color: #ffffff;
            font-family: 'Lexend Deca';
            font-size: 15.98px;
        }
`;

const FoundHabito = styled.div`
        display: flex;
        flex-wrap: wrap;
`;