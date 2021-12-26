import './App.css';
import React , {useState} from 'react';
import axios from 'axios';


function App() {

  const [name,setName] = useState("");
 function postStuff(e) {
  e.preventDefault();
  try {
  axios.post('htpp://localhost:5000/post', {
      name
    })
  } catch (error) {
    console.log(error);
  }
}



  return (
    <div className="App">
     
       <form onSumbit={postStuff} action="/post" method="POST">
         <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button type='submit'>Send Name</button>
        </form>
    </div>
  );
}

export default App;
