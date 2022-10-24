import Topo from "../../components/Topo/Topo";
import Menu from "../../components/Menu/Menu";
import styled from "styled-components";
import { ADDHABITO } from "../../constants/addHabito";
import { Tudo } from "../../constants/xTudo";
import { CONTEUDO } from "../../constants/conteudo";

export default function HistoricoPage(){
    return(
        <>
            <Topo/>
            <Tudo>
                <ADDHABITO>
                    <h1>Hítorico</h1>
                </ADDHABITO>
                <CONTEUDO>
                    <BreveEmbreveGreve>
                        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                    </BreveEmbreveGreve>
                </CONTEUDO>
            </Tudo>
            <Menu/>
        </>
    )
};

const BreveEmbreveGreve = styled.div`
        p{
            font-family: 'Lexend Deca';
            font-size: 17.98px;
        }
`;