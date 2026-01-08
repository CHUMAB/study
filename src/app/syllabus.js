'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';

const Syllabus = () => {

    const [classNumber, setClassNumber] = React.useState([]);




    const classSetter = (event) => {

        const id = event.target.id

        var tempArray = []
        
        tempArray.push({"id": id});
        
        setClassNumber(tempArray);


    }

    const SyllabusSwitch = (classNum) => {

        console.log('gamer'+classNum);
            

    }

    React.useEffect(() => {
        console.log(classNumber);
    }, [classNumber])



    return (
        <>
            
            <MenuDiv>
                <Button className="rounded-t-lg" id="280" onClick={classSetter}>280

                </Button>
                <Button className="rounded-t-lg" id="246" onClick={classSetter}>246

                </Button>
                <Button className="rounded-t-lg" id="244" onClick={classSetter}>244

                </Button>
                
                <Button className="rounded-t-lg" id="264" onClick={classSetter}>264

                </Button>
                <Button className="rounded-t-lg" id="255" onClick={classSetter}>255

                </Button>
                <Button className="rounded-t-lg" id="271" onClick={classSetter}>271

                </Button>
                <Button className="rounded-t-lg" id="253" onClick={classSetter}>253

                </Button>
            </MenuDiv>
            <HolderDiv>
                    {classNumber.map((item) => {
                        if (item.id === "246") {
                            return <><h1 className="text-white">Advanced Simulation</h1><PDF data="../246.pdf" type="application/pdf" width="100%" height="775px"></PDF></>;
                        }
                        if (item.id === "253") {
                            return <><h1 className="text-white">Extended Reality (XR) Project</h1><PDF data="../253.pdf" type="application/pdf" width="100%" height="775px"></PDF></>;
                        }
                    })
                    
                        
                    }
            </HolderDiv>
        </>
    )
    
}

const MenuDiv = styled.div`
    height: 5vh;
    width: 60vw;
    float: left;
    display: flex;
    flex-direction: row;
    padding-right: 4px;
`;

const Button = styled.div`
    border-top:
    height: 4.4vh;
    border: 1px solid gray;
    width: 14vw;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: SteelBlue  ;
    margin-bottom: 15px;
    &:hover {
        background-color: rgb(26, 26, 26);
        border-bottom: 1px solid rgb(26, 26, 26);
        cursor: pointer;
    }
`;

const HolderDiv = styled.div`
    height: 70vh;
    width: 60vw;
`;

const PDF = styled.object`
    overflow-y: none;
    border: 2px solid gray;
    width: 60vw;
`;

export default Syllabus;