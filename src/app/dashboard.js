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
    const arrow = ">";
    const [linkArray, setLinkArray] = React.useState([]);


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
    var weekNumber = getDateWeek();

    weekNumber = "Week " + weekNumber;

    const d2l = "https://online.camosun.ca/d2l/home";

    const dashBoardItems = [ {"id": 0, "content": weekNumber},
                             {"id": 1, "content": currentDate} ];

    React.useEffect(() => {
        var links = []

        links.push(
                    {"key": 2, "link": "https://online.camosun.ca/d2l/home", "site": "D2L"},
                    {"key": 3, "link": "https://colss-prod.ec.camosun.ca/Student/?hideProxyDialog=false", "site": "MyCamosun"},
                    {"key": 4, "link": "https://github.com/CHUMAB", "site": "GitHub"} 
                );

        setLinkArray(links);
    }, []);

    // React.useEffect(() => {
    // }, [linkArray]);
    


    return(
        <DashboardDiv  key={(Math.random()*(1, 10000))}>
            <Module  key={(Math.random()*(1, 10000))}>
                {dashBoardItems.map((item) => {
                  return <div key={item.id} >{arrow} {item.content}</div> 
                })}
                {linkArray.map((item) => {
                     return <Link target="_blank" key={item.key} href={item.link}>{arrow} ${item.site}</Link>
                })}
            </Module>
            <Module>
                
            </Module>
        </DashboardDiv>
    )
}

const DashboardDiv = styled.div`
    height: 70vh;
    width: 60vw;
`;

const Module = styled.div`
    height: 15vh;
    width: 50vw;
    color: lime;
    display: flex;
    flex-direction: column;
`;

const Link = styled.a`
    &:hover {
        color: red;
    }
`;
export default Dashboard;