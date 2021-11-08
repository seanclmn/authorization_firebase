import React, { useState,useEffect } from "react";
import firebase from "./firebase"

import './App.css';

function App() {
  const [users,setUsers]= useState([]);
  const [loading,setLoading]=useState(false)

  const ref = firebase.firestore().collection("users")


  function getUsers(){
    setLoading(true)
    ref.onSnapshot((querySnapshot)=>{
      const items = []
      querySnapshot.forEach((doc)=>{
        items.push(doc.data())
      })
      setUsers(items)
      setLoading(false)
    })
  }


  useEffect(()=>{
    getUsers()
    console.log(users)
  }, []);

  if (loading) {
    return <p>loading! loading! leave me alone :)</p>
  }



  return (
    <div className="App">
      <p>hi</p>

      { users.map((user)=><p key = {user.username} >{user.username}</p>)}
    </div>
  );
}

export default App;
