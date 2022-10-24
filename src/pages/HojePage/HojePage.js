import Topo from "../../components/Topo/Topo";
import Menu from "../../components/Menu/Menu";
import styled from "styled-components";
import { ADDHABITO } from "../../constants/addHabito";
import { Tudo } from "../../constants/xTudo";

export default function HojePage(){
    return(
        <>
            <Topo/>
            <Bode>
                <ADDHABITO>
                    HOJE
                </ADDHABITO>
            </Bode>
            <Menu/>
        </>
    )
};

const Bode = styled.div`
    body{
        background-color:#E5E5E5;
    }
`;