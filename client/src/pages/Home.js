import Form from '../components/myForm';
import {useState} from 'react';
import React from 'react'
import axios from 'axios';

function Home() {
    const [username,setName] = useState("");
    const [password,setPassword] = useState("");
   async function postStuff(e) {
    e.preventDefault();
    try {
    await axios({
        method: 'post',
        url: '/post',
        data: {
        name: username,
        password: password
    
      }
    });
    } catch (error) {
      console.log(error);
    }
  }
  
    return (
        <div>
    <Form doSomething={postStuff}  handleName={(e) => { setName(e.target.value)}} 
        handlePassword={(e) => setPassword(e.target.value)} 
      action="/post" method="POST"></Form>
        </div>
    )
}

export default Home
