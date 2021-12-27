import './App.css';
import React , {useState} from 'react';
import axios from 'axios';


function App() {
  const [name,setName] = useState("");

 async function postStuff(e) {
  e.preventDefault();
  try {
  await axios({
      method: 'post',
      url: '/post',
      data: {
      Name: name,
  
    }
  });
  } catch (error) {
    console.log(error);
  }
}



  return (
    <div className="App">
     
       <form onSubmit={postStuff} action="/post" method="POST">
         <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type='submit'>Send Name</button>
        </form>
    </div>
  );
}

export default App;
