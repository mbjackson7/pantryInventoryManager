import { useEffect, useState } from 'react';
import '../App.css';
import List from '../components/List';
import React from 'react';
import db from "../firebase";
import { doc, collection, onSnapshot, query } from "firebase/firestore";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () =>  {
      const q = query(collection(db, "pantry"))
      return onSnapshot(q, (querySnapshot) => {
      console.log("Data", querySnapshot.docs.map(d => doc.data()));
    });
    }
    fetchData().then(newData => {
      setData(newData);
      console.log(data);
    });
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>My Pantry</h3>
        <List data="None"/>
      </header>
      
    </div>
  );
}

export default Home;