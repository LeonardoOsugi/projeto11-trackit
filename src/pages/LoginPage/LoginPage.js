import styled from "styled-components";
import NavbarLogo from "../../components/NavbarLogoInputs/NavbarLogo";
import { Link } from "react-router-dom";

import { BASE_URL } from "../../constants/urls";

import React, { useState } from "react";
import { useAuth } from "../../providers/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha,  setSenha] = useState("");

  const {setUserInfo} = useAuth();

  const navegate = useNavigate();

  function addInfoL(e) {
    e.preventDefault();

    const urlPost = `${BASE_URL}/auth/login`;

    const body = {
      email: email,
      password: senha,
    };

    // const token = tokens.token;

    // {
    //   headers: 'Authorization': `Bearer ${token}`
    // }
    const promisse = axios.post(urlPost, body);

    promisse.then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("img", JSON.stringify(res.data.image));
      setUserInfo(res.data);
      alert("Login realizado");
      navegate("/hoje");
    });
    promisse.catch((err) => {
      alert(err.response.data.message);
    });
  }
  return (
    <ContainerLogin>
      <NavbarLogo />
      <form onSubmit={addInfoL}>
        <Inputs>
          <input
            type="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={senha}
            name="senha"
            placeholder="senha"
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Inputs>
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </ContainerLogin>
  );
}

const ContainerLogin = styled.div`
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
    border-radius: 5px;
  }
  p{
    margin-top: 50px;
    color:#52B6FF;
    text-decoration: none;
  }
`;

const Inputs = styled.div`
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

