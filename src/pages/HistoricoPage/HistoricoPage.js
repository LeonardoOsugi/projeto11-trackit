import Topo from "../../components/Topo/Topo";
import Menu from "../../components/Menu/Menu";
import styled from "styled-components";
import { ADDHABITO } from "../../constants/addHabito";

export default function HistoricoPage(){
    return(
        <>
            <Topo/>
            <ADDHABITO>
                <p>Hítorico</p>
            </ADDHABITO>
            <Menu/>
        </>
    )
}