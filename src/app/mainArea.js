'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import Schedule from './schedule';
import Runescape from './runescape';
import Dashboard from './dashboard';

const MainArea = () => {

    const [schedule, setSchedule] = React.useState(false);
    const [runescape, setRunescape] = React.useState(false);
    const [dashboard, setDashboard] = React.useState(true);



     const handleSchedule = (event) => {
        setSchedule(true);
        setRunescape(false);
        setDashboard(false);
    }

    const handleRunescape = (event) => {
        setRunescape(true);
        setSchedule(false);
        setDashboard(false);
    }
    const handleDashboard = (event) => {
        setRunescape(false);
        setSchedule(false);
        setDashboard(true);
    }


    return (
        <>
        
        <AreaHolder>
        <MenuDiv>
            <Button className="rounded-t-lg" onClick={handleDashboard}>DASHBOARD

            </Button>
            <Button className="rounded-t-lg" onClick={handleSchedule}>SCHEDULE

            </Button>
            <Button className="rounded-t-lg" onClick={handleRunescape}>RUNESCAPE

            </Button>
            
            <Button className="rounded-t-lg">

            </Button>
        </MenuDiv>
        <div>
            {dashboard ?<HolderDiv><Dashboard /></HolderDiv> : <div></div>}
            {schedule ? <HolderDiv><Schedule /></HolderDiv> : <div></div>}
            {runescape ? <HolderDiv><Runescape /></HolderDiv> : <div></div>}
        </div>
        </AreaHolder>
        </>
    )
}

const AreaHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
    border: 3px solid green;
    width: 70vw;
    float: left;

`;


const MenuDiv = styled.div`
    height: 5vh;
    width: 60vw;
    float: left;
    display: flex;
    flex-direction: row;

`;

const Button = styled.div`
    border-top:
    height: 4.4vh;
    border: 3px solid blue;
    width: 15vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    
`;

const HolderDiv = styled.div`
    height: 70vh;
    width: 60vw;
    border: 2px solid red;
`;

export default MainArea;