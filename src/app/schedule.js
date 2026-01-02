'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';


const Schedule = () => {


    return (
        <>
            <div dir="ltr">
                <table cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2 border-l-2"></td><DayGap />
                            <td dir="ltr" className="border-b-2 border-r-2 border-l-2">Monday</td>
                            <DayGap />
                            <td dir="ltr" className="border-b-2 border-r-2 border-l-2">Tuesday</td><DayGap />
                            <td dir="ltr" className="border-b-2 border-r-2 border-l-2">Wednesday</td><DayGap />
                            <td dir="ltr" className="border-b-2 border-r-2 border-l-2">Thursday</td><DayGap />
                            <td dir="ltr" className="border-b-2 border-r-2 border-l-2">Friday</td><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">8:00 AM</td><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <ClassTop>COMP-246</ClassTop><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <ClassTop>ICS-224</ClassTop><DayGap />

                            <ClassEdge />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">9:00 AM</td><DayGap />
                            <Empty /><DayGap />
                            <ClassMid>8:30 - 11:30</ClassMid><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <ClassBot >8:30 - 9:30</ClassBot ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <ClassTop>ICS-224</ClassTop><DayGap />
                            <ClassTop>ENGR-255</ClassTop><DayGap />
                            <ClassTop>ICS-224</ClassTop><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">10:00 AM</td><DayGap />
                            <ClassTop>COMP-253</ClassTop><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <ClassBot >9:30 - 10:30</ClassBot ><DayGap />
                            <ClassMid >9:30 - 11:30</ClassMid ><DayGap />
                            <ClassMid >9:30 - 11:30</ClassMid ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <ClassMid >10:00 - 11:00</ClassMid ><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <ClassTop>HLSC-264</ClassTop><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">11:00 AM</td><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                            <ClassMid >10:30 - 12:00</ClassMid ><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                            <ClassTop>ICS-224</ClassTop><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                            <ClassTop>ENGR-255</ClassTop><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">12:00 AM</td><DayGap />
                            <Empty /><DayGap />
                            <ClassBot >9:30 - 10:30</ClassBot ><DayGap />
                            <Empty /><DayGap />
                            <ClassBot >11:30 - 12:30</ClassBot ><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <ClassTop>COMP-246</ClassTop><DayGap />
                            <ClassTop>ICS-280</ClassTop><DayGap />
                            <ClassTop>COMP-271</ClassTop><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">1:00 PM</td><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <ClassMid >12:30 - 2:30</ClassMid ><DayGap />
                            <ClassBot >12:30 - 1:30</ClassBot ><DayGap />
                            <ClassBot >12:30 - 1:30</ClassBot ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <ClassTop>COMP-271</ClassTop><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">2:00 PM</td><DayGap />
                            <Empty /><DayGap />
                            <ClassMid >1:30 - 4:30</ClassMid ><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                            <ClassTop>COMP-271</ClassTop><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <Empty /><DayGap />
                            <ClassBot >2:00 - 3:00</ClassBot ><DayGap />
                            <ClassTop>ENGR-255</ClassTop><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">3:00 PM</td><DayGap />
                            <Empty /><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <Empty /><DayGap />
                            <Empty ></Empty ><DayGap />
                            <ClassMid >2:30 - 4:30</ClassMid ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                            <Empty /><DayGap />
                            <ClassTop >COMP-253</ClassTop ><DayGap />
                            <ClassMid ></ClassMid ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">4:00 PM</td><DayGap />
                            <Empty /><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                            <Empty /><DayGap />
                            <ClassBot >3:30 - 4:30</ClassBot ><DayGap />
                            <ClassBot ></ClassBot ><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-t-2 border-r-2">5:00 PM</td><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                        </tr>
                        <tr>
                            <th>
                            </th>
                            <td className="border-b-2 border-r-2"></td><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                            <Empty /><DayGap />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}


const TableStyles = styled.table`
    border: solid;
    border-color: white;
    color: white;
`;

const Empty = styled.td`
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-left: 1px solid;
    border-color: white;
    color: white;
    
`;

const ClassTop = styled.td`
    border-top: 2px solid;
    border-left: 2px solid;
    border-right: 2px solid;
    border-color: red;
    color: white;
`;

const ClassMid = styled.td`
    border-left: 2px solid;
    border-right: 2px solid;
    border-color: red;
    color: white;
`;

const ClassBot = styled.td`
    border-bottom: 4px double;
    border-left: 2px solid;
    border-right: 2px solid;
    border-color: red;
    color: white;
    margin-bottom: 50px;
`;

const ClassEdge = styled.td`
    width: 0;

`;

const DayGap = styled.td`
    width: 5px;;
`;

export default Schedule;