import { useEffect, useState } from 'react';
import './Home.css';
import List from '../components/List';
import React from 'react';
import db from "../firebase";
import { collectionGroup, onSnapshot, query, getDocs } from "firebase/firestore";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () =>  {
      const q = query(collectionGroup(db, "pantry"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push(doc.data());
        });
        setData(documents)
        console.log("Data Fetched")
      });
    }
    fetchData()
  }, []);

  function alphabatize() {
    var sorted = data.sort(function(a, b) {
      var nameA = a.brand_name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.brand_name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    }
    );
    setData(sorted)
    console.log("Data Alphabetized")
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>My Pantry</h3>
          <button onClick={alphabatize}>Alphabetize</button>
        </div>
        <List data={data}/>
      </header>
      
    </div>
  );
}

export default Home;