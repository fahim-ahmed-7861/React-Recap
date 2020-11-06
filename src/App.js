import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">

    <RandomUser></RandomUser>

    

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

function RandomUser()
{
    
   var [user,setUser]=useState([]);

   useEffect(()=>{
   fetch('https://randomuser.me/api//')
   .then(res => res.json())
   .then( data =>setUser(data.results[0]))
   },[])

   
  

    return (

       <div>  


<li>{user.name.title}</li>

<li>{user.name.first+" "+user.name.last}</li>

    <li>{user.phone}</li>
   

    <li>{user.registered.age}</li>

    <li>{user.location.city}</li>

    <li>{user.email}</li>

    <li>{user.id.name}</li>

    <li>{user.login.username}</li>
  

   



       </div>
    )
}




export default App;
