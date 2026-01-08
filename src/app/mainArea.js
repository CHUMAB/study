'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import Schedule from './schedule';
import Runescape from './runescape';
import Dashboard from './dashboard';
import Syllabus from './syllabus';

const MainArea = () => {

    const [schedule, setSchedule] = React.useState(false);
    const [runescape, setRunescape] = React.useState(false);
    const [dashboard, setDashboard] = React.useState(true);
    const [syllabus, setSyllabus] = React.useState(false);



     const handleSchedule = (event) => {
        setSchedule(true);
        setRunescape(false);
        setDashboard(false);
        setSyllabus(false);
    }

    const handleRunescape = (event) => {
        setRunescape(true);
        setSchedule(false);
        setDashboard(false);
        setSyllabus(false);
    }
    const handleDashboard = (event) => {
        setRunescape(false);
        setSchedule(false);
        setDashboard(true);
        setSyllabus(false);

    }

    const handleSyllabus = (event) => {
        setRunescape(false);
        setSchedule(false);
        setDashboard(false);
        setSyllabus(true);
    }

    return (
        <>
        
        <AreaHolder id="areaholder">
        <MenuDiv>
            <Button className="rounded-t-lg" onClick={handleDashboard} >DASHBOARD

            </Button>
            <Button className="rounded-t-lg" onClick={handleSchedule}>SCHEDULE

            </Button>
            <Button className="rounded-t-lg" onClick={handleSyllabus}>SYLLABUS

            </Button>
            
            <Button className="rounded-t-lg">

            </Button>
        </MenuDiv>
        <div>
            {dashboard ?<HolderDiv><Dashboard /></HolderDiv> : <div></div>}
            {schedule ? <HolderDiv><Schedule /></HolderDiv> : <div></div>}
            {runescape ? <HolderDiv><Runescape /></HolderDiv> : <div></div>}
            {syllabus ? <HolderDiv><Syllabus /></HolderDiv> : <div></div>}
        </div>
        </AreaHolder>
        </>
    )
}

const AreaHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95vh;
    width: 60vw;
    float: left;
    margin-top: 8vh;
    margin-left: 5vw;
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
    border: 1px solid gray;
    width: 15vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: DarkSlateGrey;
    &:hover {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
    &:active:not(:disabled) {
        background-color: rgb(26, 26, 26);
       border-bottom: 1px solid rgb(26, 26, 26);
    }
`;

const HolderDiv = styled.div`
    height: 70vh;
    width: 60vw;
    border-left: 2px solid gray;
    border-right: 2px solid gray;
    border-bottom: 2px solid gray;
`;

export default MainArea;