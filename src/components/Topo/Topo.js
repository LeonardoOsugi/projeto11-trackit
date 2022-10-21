import styled from "styled-components";
import React from 'react';
import { useAuth } from "../../providers/auth";
import trackit from "../../assets/images/TrackItLogo.png";

export default function Topo(){
    const {foto} = useAuth();
    return(
        <>
            <Topos>
                <img src={trackit} alt="logo"/>
                <img className="user" src={foto}  />
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