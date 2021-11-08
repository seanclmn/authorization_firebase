import logo from './logo.svg';
import React,{ useState, useEffect } from 'react';
import { onSnapshot, collection} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import './App.css';

import db from './firebase'
function App() {
  const [users,setUsers]=useState([{}])
  const [chats,setChats]=useState([{}])


  useEffect(()=>{
    onSnapshot(collection(db, "users"),(snapshot)=>{
      console.log(snapshot.docs)
    });

  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
