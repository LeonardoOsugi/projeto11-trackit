import NavbarLogo from "../../components/NavbarLogoInputs/NavbarLogo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import { useState } from "react";

export default function CadastroPage() {
  const [emails, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const navegate = useNavigate();
  function addCadastro(e) {
    e.preventDefault();

    const urlPost = `${BASE_URL}/auth/sign-up`;

    const body = {
      email: emails,
      name: name,
      image: foto,
      password: senha,
    };

    const promisse = axios.post(urlPost, body);

    promisse.then(() => {
      alert("Cadastro realizado");
      navegate("/");
    });
    promisse.catch((err) => {
      alert(err.response.data.message);
    });
  }
  return (
    <ContainerCadastro>
      <NavbarLogo />
      <form onSubmit={addCadastro}>
        <OtherInputs>
          <input
            type="email"
            value={emails}
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="password" value={senha} name="senha" placeholder="senha" onChange={e => setSenha(e.target.value)}required/>
          <input
            type="name"
            value={name}
            name="name"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="url"
            value={foto}
            name="foto"
            placeholder="foto"
            onChange={(e) => setFoto(e.target.value)}
            required
          />
        </OtherInputs>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </ContainerCadastro>
  );
}

const ContainerCadastro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;

  button {
    width: 303px;
    height: 45px;
    color: #ffffff;
    background-color: #52b6ff;
    font-family: "Lexend Deca";
    font-size: 20.98px;
  }

  p{
    margin-top: 50px;
    color:#52B6FF;
    text-decoration: none;
  }
`;

const OtherInputs = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 303px;
    height: 45px;
    margin-bottom: 10px;
    font-family: "Lexend Deca";
    font-size: 19.976px;
    border-radius: 5px;
  }
`;
