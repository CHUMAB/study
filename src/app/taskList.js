'use client'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import Runescape from './runescape';
import DatePicker from 'react-date-picker'

export const dynamic = 'force-dynamic';

const TaskList = () => {

    const [message, setMessage] = React.useState("");
    const [date, setDate] = React.useState("");
    const [fetchedTask, setFetchedTask] = React.useState([]);
    const [updateList, setUpdateList] = React.useState(0);
    const [dropdown, setDropdown] = React.useState("");
    const [isShown, setIsShown] = React.useState(false);
    const [taskDelete, setTaskDelete] = React.useState(0);
    const [taskComplete, setTaskComplete] = React.useState("");
    const [taskCompleteCounter, setTaskCompleteCounter] = React.useState(0);


    const runItOnce = useRef(false);


    const addTask = async (event) => {
        event.preventDefault();

        if (dropdown === "") {
        }

        setMessage(message.toUpperCase())
        await axios.post('http://localhost:3000/api/tasks', {task: message, classNum: dropdown, due: date})
        .catch(function (e) {
            console.log(e);
        })
        setUpdateList(updateList+ 1);
    }

    React.useEffect(() => {
        if (runItOnce.current === false) {

            runItOnce.current = true;
        } else {

            (async() => {
            try {
                await axios.post('http://localhost:3000/api/tasks', {fetch: "fetch"})
                .then((resp) => {
                    var taskArray = [];
                    console.log(resp);
                    let x = (resp.data.messages).length;
                        if ((resp.data.messages).length === 0) {
                            return;
                        }
                        for (let i = 0; i < x; i++) {
                            taskArray.push({
                                "class": resp.data.messages[i].class, 
                                "task": resp.data.messages[i].text, 
                                "key_id": resp.data.messages[i].key_id, 
                                "completed": resp.data.messages[i].completed,
                                "due": resp.data.messages[i].due
                            });
                        }
                        setFetchedTask(taskArray);
                        console.log("FETCHED TASKS: "+ taskArray)
                })
                } catch(e) {
                    console.log(e);
                }

        })();
        }
    }, [updateList, taskCompleteCounter]);

    React.useEffect(() => {
        console.log(fetchedTask)
    }, [fetchedTask])



    const handleInput = (event) => {
        setMessage(event.target.value);
    }

    const handleDate = (event) => {
        setDate(event.target.value);
    }

    const handleDropdown = (event) => {
        setDropdown(event.target.value);
    }

    const taskCompleteFunc = async (event) => {
        setTaskComplete(event.target.id);    
    }

    React.useEffect(() => {
        (async() => {
            try {
                await axios.post('http://localhost:3000/api/tasks', {taskCompletePost: taskComplete})
                .then ((resp) => {
                    console.log(resp)
                })
            } catch (e){
                console.log(e)
            }
        })()
        let addOne = taskCompleteCounter + 1;
        setTaskCompleteCounter(addOne);

    }, [taskComplete])

    const taskCancel = (event) => {
        console.log("delete");
    }

    return(
        <>
        <TasksHolder>
            <FormHolder>
            <form onSubmit={addTask}>
                <h2>Tasks Completed: {taskCompleteCounter}</h2>
                    <select className="mt-2 rounded-md bg-gray-500 pl-1 border-orange-500 border-2" value={dropdown} onChange={handleDropdown} name="class" id="class">
                        <option className="bg-blue-500" value="default">CLASS CHOOSE</option>
                        <option className="bg-blue-500" value="COMP-246">COMP-246 - Advanced Simulation</option>
                        <option className="bg-blue-500" value="COMP-253">COMP-253 - Extended Reality (XR) Project</option>
                        <option className="bg-blue-500" value="COMP-271">COMP 271 - Applied UX/UI</option>
                        <option className="bg-blue-500" value="ENGR-255">ENGR 255 - Design Visualization</option>
                        <option className="bg-blue-500" value="HLSC-264">HLSC-264 - Interprofessional Practices</option>
                        <option className="bg-blue-500" value="ICS-224">ICS-224 - Mobile App Development</option>
                        <option className="bg-blue-500" value="ICS-280">ICS-280 - Capstone Project Preparation</option>7
                    </select> <br></br>
                <input placeholder="Describe Task" className="mt-2 rounded-md bg-gray-500 pl-1 border-orange-500 border-2 w-full" onChange={handleInput}></input><br></br>
                <input placeholder="Due Date" className="mt-2 rounded-md bg-gray-500 pl-1 border-orange-500 border-2 w-full" onChange={handleDate}></input><br></br>
                <button className="rounded-md bg-green-600 py-2 px-4 mt-2 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ">ADD TASK</button>
            </form>
            </FormHolder>
            <Task>
                <InnerTask id="innertask" className="w-full px-2" key={(Math.random()*(1, 1000))}>
                    {fetchedTask.map((tasks) =>{
                    if (tasks.completed === false) {
                        if (tasks.class === "COMP-246") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-blue-800 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task}</div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>

                                                <><button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button></>
                                                </div>
                            }
                        if (tasks.class === "COMP-253") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-sky-700 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task} </div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>
                                                <><button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button></>        
                                        </div>
                            }
                        if (tasks.class === "COMP-271") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-indigo-700 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task} </div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>
                                                <button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button>         
                                        </div>
                            }
                        if (tasks.class === "ENGR-255") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-purple-950 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task} </div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>
                                                <button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button>         
                                        </div>
                            }
                        if (tasks.class === "HLSC-264") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-gray-700 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task} </div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>
                                                <button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button>         
                                        </div>
                            }
                        if (tasks.class === "ICS-224") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-rose-900 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task} </div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>
                                                <button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button>         
                                        </div>
                            }
                        if (tasks.class === "ICS-280") {
                            return      <div key={(Math.random()*(1, 1000))} className="w-full mb-2 bg-blue-400 border-t-2 border-2">
                                            <div className="bg-slate-700 float-left px-2 border-r-2 border-b-2">Due: {tasks.due}</div>
                                            <div className="bg-slate-700 float-right px-2 border-l-2 border-b-2">{tasks.class}</div>
                                            <br></br>
                                            <div className="float-left w-full pl-2 pt-2" key={(Math.random()*(1, 1000))}>{tasks.task} </div><br></br>
                                            <div className=" pb-2 border-b-2 w-xl mx-2 border-orange-500"></div>
                                            <br></br>
                                                <button onClick={taskCancel} className="float-left border-white border-r-2 border-t-2 bg-red-800 hover:bg-red-700 text-white py-0 px-16">X</button>                                        
                                                <button onClick={taskCompleteFunc} id={tasks.task} className="float-right border-white border-l-2 border-t-2 bg-green-800 hover:bg-green-900 text-white py-0 px-16">✔</button>         
                                        </div>
                            }
                    }
                        
                        })}
                 </InnerTask>
            </Task>
        </TasksHolder>
        </>
    )
}

const TasksHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 95vh;
    width: 30vw;
    position: relative;
    float: right;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px solid grey;
`;

const Task = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
    align-items: center;
    height: 85%;
    width: 90%;
`;

const InnerTask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    border-rounded
    padding-bottom: 10px;
    color: white;
    overflow-y: scroll;
    scrollbar-color: orange gray;
    scrollbar-width: thin;
    scroll-padding 10px;
    
`;

const FormHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: auto;
    width: 90%;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 2px;
    color: white;
`;

export default TaskList;