import styled from "styled-components";
import NavbarLogo from "../../components/NavbarLogo/NavbarLogo"

export default function LoginPage(){
    return(
        <ContainerLogin>
          <NavbarLogo/>
          <button>Entrar</button>
          <p>Não tem uma conta? Cadastre-se!</p>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
       display:flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;

       margin: 10px;

       button{
        width: 303px;
        height: 45px;
        color: #ffffff;
        background-color: #52B6FF;
       }
`;