'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';



const Dashboard = () => {

    const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    const date = new Date();
    var monthNumber = date.getMonth();
    const month = monthNames[monthNumber];
    const currentDate = (month + " / " + date.getDate() + ' / ' + date.getFullYear());

    function getDateWeek(date) {
    const currentDate = 
        (typeof date === 'object') ? date : new Date();
    const januaryFirst = 
        new Date(currentDate.getFullYear(), 0, 1);
    const daysToNextMonday = 
        (januaryFirst.getDay() === 1) ? 0 : 
        (7 - januaryFirst.getDay()) % 7;
    const nextMonday = 
        new Date(currentDate.getFullYear(), 0, 
        januaryFirst.getDate() + daysToNextMonday);

    return (currentDate < nextMonday) ? 52 : 
    (currentDate > nextMonday ? Math.ceil(
    (currentDate - nextMonday) / (24 * 3600 * 1000) / 7) : 1);
}
    const weekNumber = getDateWeek();

    return(
        <DashboardDiv>
            <Module>
                {currentDate}<br></br>
                {'Week '+ weekNumber}
            </Module>
            <Module>
                
            </Module>
        </DashboardDiv>
    )
}

const DashboardDiv = styled.div`
    height: 70vh;
    width: 60vw;
    border: 2px solid red;
`;

const Module = styled.div`
    height: 15vh;
    width: 15vw;
    border: 2px solid orange;
    color: white;
`;

export default Dashboard;