import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUser, logout } from './user-slice';
import Conversation from '../app/conversation.js';
import mongoose from 'mongoose';
import styled from 'styled-components';

  
const AuthenticateUser = ( { user, setUser, logout } ) => {
  const [userName, setUserName ]          = React.useState("");
  const [userPassword, setUserPassword ]  = React.useState("");

  const login = async () => {
    const user_query = { user_name: userName, user_password: userPassword };

    const {data} = await axios.post("https://cam-project.demo.compsci.cc/api/authenticate", user_query);
    if (data.authenticated === true) {
      setUser( data.account );
    } else {
      setUserName("");
      setUserPassword("");
    }
  }

  return (
    <Background >
      <p className="">User: {user ? user.name : 'Guest'}</p>
      { !user ? 
        <>
          <Login>
              <Screen id="Screen">
                <LoginForm>
                  
                    <input className="bg-slate-700 border border-default-medium rounded rounded-base w-24 px-3 py-2.5 "
                      type="text" onChange={ (e) => { setUserName(e.target.value); } } placeholder="Enter username" value={userName} />
                      <br />
                    <input className="bg-slate-700 border border-default-medium rounded rounded-base w-24 px-3 py-2.5"
                      type="password" onChange={ (e) => { setUserPassword(e.target.value); } } placeholder="Enter password" value={userPassword}/><br></br>
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 "
                     onClick={login}>Login</button>
                  
                </LoginForm>
              </Screen>
            
          </Login>
        </>
      : <>
          <div>
            <button className="flex justify-start pl-2" onClick={logout}>Logout</button> 
          </div>
          <Screen>
            <Conversation />
          </Screen>
        </>

      }
    </Background>
  );
};


const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const Background = styled.div`
background-image: url(/BG-Custom.png);
height: 100vh;
width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
`;

const Screen = styled.div`
position: fixed;
height: 66vh;
width: 47.3vw;
left: 18.5%;
top: 14%;
border-radius: 12%;
`;

const LoginForm = styled.div`
 display: flex;
 flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 66vh;
`;






export default connect(mapStateToProps, { setUser, logout })(AuthenticateUser);