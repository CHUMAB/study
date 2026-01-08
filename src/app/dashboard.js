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

    const dashBoardItems = [ weekNumber, currentDate ];

    React.useEffect(() => {
        var links = []
    
        links.push(
                            {"link": "https://online.camosun.ca/d2l/home", "site": "D2L"},
                            {"link": "https://colss-prod.ec.camosun.ca/Student/?hideProxyDialog=false", "site": "MyCamosun"},
                            {"link": "https://github.com/CHUMAB", "site": "GitHub"}
                            
                        );

        setLinkArray(links);

        
    }, []);

    React.useEffect(() => {
        
    
        

        console.log(linkArray);

        
    }, [linkArray]);
    


    return(
        <DashboardDiv>
            <Module>
                {dashBoardItems.map((item) => {
                  return <div key={(Math.random()*(1, 1000))} id='12'>{arrow} {item}</div> 
                })}
                {linkArray.map((item) => 
                     <><Link target="_blank" key={(Math.random()*(1, 1000))} href={item.link}>{arrow} ${item.site}</Link><br></br></>
                )}
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
    width: 15vw;
    color: lime;
`;

const Link = styled.a`
    &:hover {
        color: red;
    }
`;
export default Dashboard;