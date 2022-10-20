import styled from "styled-components";
import logo from  "../../assets/images/Group 8.png";

export default function NavbarLogo(){
    return(
    <Tamanho>
        <img src={logo} alt="logo"/>
    </Tamanho>
    )
};

const Tamanho = styled.div`
       margin-top: 68px;
       width: 180px;
       height: 178.38px;
       margin-bottom: 20px;
`;