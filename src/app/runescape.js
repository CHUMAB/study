'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';


const Runescape = () => {

    const [runescapeData, setRunescapeData] = React.useState([]);

    React.useEffect(() => {
        (async() => {
            try {
            const runeData = await axios.post('http://localhost:3000/api/runescape', {runescape: "data"})
            setRunescapeData(runeData.data[0]);
            } catch(e) {

            }
        })()
    }, [])


    return(
        <Tables key={1000}>
                <InnerTables className="mt-10">
                {runescapeData.map((skills) =>{
                if (skills.key  === 'row1') {
                            return <table className='ml-60'>
                                <tbody>  
                                    <tr>
                                        <td className='text-white ml-8'>{skills.skill}</td>
                                        <td className='text-white'>{skills.level}</td>    
                                    </tr>   
                                </tbody>
                                </table>}
                    }
            )}
            </InnerTables>
            <InnerTables className="mt-10">
                {runescapeData.map((skills) =>{
                if (skills.key === 'row2') {
                    return <table className='mx-50'>
                                <tbody>  
                                    <tr>
                                        <td className='text-white'>{skills.skill}</td>
                                        <td className='text-white'>{skills.level}</td>    
                                    </tr>   
                                </tbody>
                                </table>}
                }
            )}
            </InnerTables>
            <InnerTables className="mt-10">
                {runescapeData.map((skills) =>{
                if (skills.key === 'row3') {
                    return <table className='mr-60'>
                                <tbody>  
                                    <tr>
                                        <td className='text-white'>{skills.skill}</td>
                                        <td className='text-white'>{skills.level}</td>    
                                    </tr>   
                                </tbody>
                                </table>}
                }
            )}
            </InnerTables>
        </Tables>          
    )
}

const Tables = styled.div`
    display: flex;
    flex-direction: row;
`;

const InnerTables = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Runescape;