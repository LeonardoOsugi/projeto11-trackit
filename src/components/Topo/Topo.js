import styled from "styled-components";
import React from 'react';
import trackit from "../../assets/images/TrackItLogo.png";
import { Link } from "react-router-dom";

export default function Topo(){
    const image = JSON.parse(localStorage.getItem('img'));
    return(
        <>
            <Topos>
                <Link to="/">
                <img src={trackit} alt="logo"/>
                </Link>
                <img className="user" src={image}  alt="img escolhida pelo user"/>
            </Topos>
        </>
    )
};

const Topos = styled.div`
     background-color: blue;
     position: fixed;
     top: 0;
     width: 100%;
     height: 70px;
     display: flex;
     justify-content: space-around;
     align-items: center;
     img{
        width: 97px;
        height: 49px;
     }
     .user{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
     }
`;