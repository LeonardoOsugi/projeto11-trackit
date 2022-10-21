import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <MenuBottom>
            <Link to="/habitos">
            <button>Hábitos</button>
            </Link>
            <Link to="/hoje">
                <button className="btnHoje">
                    <p>Hoje</p>
                </button>
            </Link>
            <Link to="/historico">
            <button>Hitórico</button>
            </Link>
        </MenuBottom>
    )
};

const MenuBottom = styled.div`
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 70px;
      background-color: #ffffff;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button{
        font-family: 'Lexend Deca';
        font-size: 17.98px;
        color: #52B6FF;
      }
      .btnHoje{
        margin-bottom: 50px;
        width: 91px;
        height: 91px;
        border-radius: 100%;
        background-color: #52B6FF;
        font-family: 'Lexend Deca';
        font-size: 17.98px;
        color: #ffffff;
      }
`;

const ContainnerHoje = styled.div`
      margin-bottom: 50px;
      width: 91px;
      height: 91px;
      border-radius: 100%;
`;